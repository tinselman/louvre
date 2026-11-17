/* check.mjs — headless: every painting hung, none overlapping another, a doorway or its label; every room reachable
   from the start; nothing outside its wall.   node tools/check.mjs */
import { createServer } from 'vite';
import puppeteer from 'puppeteer-core';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({ root, logLevel: 'error', server: { port: 5264, strictPort: false } });
await server.listen();
const base = server.resolvedUrls.local[0].replace(/\/$/, '');
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
await page.setViewport({ width: 1200, height: 800 });
await page.goto(`${base}/?hud=0`, { waitUntil: 'load' });
await page.waitForFunction('window.__gReady === true', { timeout: 60000 });
const r = await page.evaluate(() => {
  const g = window.__g, out = [];
  const along = (it) => (it.face.axis === 'x' ? it.pos[0] : it.pos[2]);
  const byFace = new Map();
  for (const it of g.items) { if (!it.face) continue; if (!byFace.has(it.face)) byFace.set(it.face, []); byFace.get(it.face).push(it); }
  let overlaps = 0, doorHits = 0, outside = 0, labelHits = 0;
  for (const [f, list] of byFace) {
    const box = (it) => [along(it) - it.ow / 2, along(it) + it.ow / 2, it.pos[1] - it.oh / 2, it.pos[1] + it.oh / 2];
    for (let i = 0; i < list.length; i++) {
      const a = box(list[i]);
      if (a[0] < f.u0 - 1e-3 || a[1] > f.u1 + 1e-3 || a[2] < 0.1 || a[3] > (f.lunette ? f.room.top : f.h)) { outside++; out.push(`outside ${list[i].work.title}`); }
      for (const [d0, d1, dh] of f.doors) if (a[1] > d0 && a[0] < d1 && a[2] < dh) { doorHits++; out.push(`door ${list[i].work.title}`); }
      for (let j = i + 1; j < list.length; j++) {
        const b = box(list[j]);
        if (a[1] > b[0] + 1e-3 && b[1] > a[0] + 1e-3 && a[3] > b[2] + 1e-3 && b[3] > a[2] + 1e-3) { overlaps++; out.push(`overlap ${list[i].work.title} / ${list[j].work.title}`); }
      }
      const L = list[i].label;
      if (L) {
        const lu = f.axis === 'x' ? L[0] : L[2], lb = [lu - 0.085, lu + 0.085, L[1] - 0.06, L[1] + 0.06];
        for (const o of list) { const b = box(o); if (lb[1] > b[0] && b[1] > lb[0] && lb[3] > b[2] && b[3] > lb[2]) { labelHits++; out.push(`label ${list[i].work.title} on ${o.work.title}`); break; } }
        if (lb[0] < f.u0 || lb[1] > f.u1) { labelHits++; out.push(`label off wall ${list[i].work.title}`); }
      }
    }
  }
  // every room reachable through doorways from where you start
  const B = g.data.building, seen = new Set([g.roomAt(B.start.x, B.start.z)]), q = [...seen];
  while (q.length) { const r = q.pop(); for (const d of B.doors) for (const [a, b] of [[d.a, d.b], [d.b, d.a]]) if (a === r && !seen.has(b)) { seen.add(b); q.push(b); } }
  const lost = B.rooms.filter((r) => !seen.has(r.id)).map((r) => r.id);
  return { works: g.data.works.length, hung: g.items.length, unplaced: g.unplaced.length, overlaps, doorHits, outside, labelHits, lost, sample: out.slice(0, 12) };
});
console.log(JSON.stringify(r, null, 1));
if (errors.length) console.log('page errors:', errors.slice(0, 5));
await browser.close(); await server.close();
const bad = r.unplaced + r.overlaps + r.doorHits + r.outside + r.labelHits + r.lost.length + errors.length;
console.log(bad ? `FAIL (${bad})` : 'PASS');
process.exit(bad ? 1 : 0);
