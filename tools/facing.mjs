/* facing.mjs — stand in front of paintings and take a picture of each, headlessly (never shows a window).
 *
 *   node tools/facing.mjs out-dir id [id ...]
 *
 * Finds each painting where it hangs (window.__g.pictures), stands back far enough to see it whole with a little
 * wall round it, faces it, waits for the sharp picture, and saves out-dir/<id>.png. Starts its own Vite server. */
import { createServer } from 'vite';
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [outDir, ...ids] = process.argv.slice(2);
mkdirSync(resolve(outDir), { recursive: true });
const server = await createServer({ root, logLevel: 'error', server: { port: 5264, strictPort: false } });
await server.listen();
const base = server.resolvedUrls.local[0].replace(/\/$/, '');
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true,
  args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--no-first-run', '--no-default-browser-check', '--hide-scrollbars'],
});
const errors = [];
try {
  const page = await browser.newPage();
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('response', (r) => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto(`${base}/?hud=0`, { waitUntil: 'load', timeout: 90000 });
  await page.waitForFunction('window.__gReady === true', { timeout: 90000 });
  for (const id of ids) {
    const ok = await page.evaluate((id) => {
      const g = window.__g, p = g.pictures.find((q) => q.work.id === id);
      if (!p) return false;
      const c = p.mesh.getWorldPosition(new p.mesh.position.constructor());
      const n = p.placed.normal, f = p.work.floor ?? (c.y > 6 ? 2 : 1);
      const d = Math.max(2.2, Math.max(p.w, p.h * 1.5) * 1.15);
      g.setFloor(f);
      g.player.pos.set(c.x + n[0] * d, (f === 2 ? 8 : 0) + 1.62, c.z + n[2] * d);
      g.player.yaw = Math.atan2(n[0], n[2]);
      g.player.pitch = Math.atan2(c.y - g.player.pos.y, d);
      return true;
    }, id);
    if (!ok) { console.log(id, 'not hung'); continue; }
    await new Promise((r) => setTimeout(r, 600));
    await page.waitForFunction('window.__g.pendingSharp() === 0', { timeout: 20000 }).catch(() => errors.push(`${id}: sharp picture still loading`));
    await new Promise((r) => setTimeout(r, 900));
    await page.screenshot({ path: resolve(outDir, `${id}.png`) });
    console.log(id);
  }
} finally {
  await browser.close();
  await server.close();
}
for (const e of errors) console.log('  ! ' + e);
