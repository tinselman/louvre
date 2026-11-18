/* mapclick.mjs — headless: open the map, and on each floor's tab click every room (a real mouse click on the plan, at
   the middle of the room), and check you're then standing in that room on that floor, the map closed.
   Then one shot of the map with the pointer over the Venus de Milo's room, and one of where the click put you.
     node tools/mapclick.mjs [out-dir]           (shots: map-hover.png, map-landed.png) */
import { createServer } from 'vite';
import puppeteer from 'puppeteer-core';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = process.argv[2] || root;
const server = await createServer({ root, logLevel: 'error', server: { port: 5267, strictPort: false } });
await server.listen();
const base = server.resolvedUrls.local[0].replace(/\/$/, '');
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--use-angle=metal'] });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
await page.setViewport({ width: 1300, height: 1000 });
await page.goto(`${base}/?hud=0`, { waitUntil: 'load' });
await page.waitForFunction('window.__gReady === true', { timeout: 60000 });
const tick = (ms = 120) => new Promise((r) => setTimeout(r, ms));

/** open the map on floor f; the screen point of (x, z) on its plan (scrolled into the panel if need be) */
const aim = (f, x, z) => page.evaluate(async (f, x, z) => {
  const m = window.__g.map;
  if (!m.open) m.toggle(true);
  document.querySelector(`#map .map-tabs button[data-floor="${f}"]`).click();
  const cv = document.querySelector('#map canvas'), panel = document.getElementById('map');
  const { X0, Z0, k } = m.frame;
  let b = cv.getBoundingClientRect(), py = b.top + (z - Z0) * k;
  const pb = panel.getBoundingClientRect();
  if (py < pb.top + 4 || py > pb.bottom - 4) { panel.scrollTop += py - (pb.top + pb.bottom) / 2; b = cv.getBoundingClientRect(); }
  await new Promise((r) => setTimeout(r, 260));      // the panel's fade in
  b = cv.getBoundingClientRect();
  return [b.left + (x - X0) * k, b.top + (z - Z0) * k];
}, f, x, z);

const rooms = await page.evaluate(() => window.__g.data.building.rooms.map((r) => ({ id: r.id, floor: r.floor, stair: !!r.stair, x0: r.x0, z0: r.z0, x1: r.x1, z1: r.z1 })));
// the room a click at a point means: the smallest of that floor's rooms round it
const area = (r) => (r.x1 - r.x0) * (r.z1 - r.z0);
const under = (f, x, z) => rooms.filter((r) => r.floor === f && x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1).sort((a, b) => area(a) - area(b))[0];
let ok = 0;
const bad = [];
for (const r of rooms) {
  const x = (r.x0 + r.x1) / 2, z = (r.z0 + r.z1) / 2, want = under(r.floor, x, z);
  const [px, py] = await aim(r.floor, x, z);
  await page.mouse.click(px, py);
  await tick();
  const got = await page.evaluate(() => { const g = window.__g, p = g.player.pos; return { floor: g.floor(), room: g.roomAt(p.x, p.z) ?? null, open: g.map.open, x: p.x, z: p.z, eye: p.y }; });
  const fine = !got.open && got.floor === want.floor && got.room === want.id;
  if (fine) ok++; else bad.push(`${r.id} (floor ${r.floor}) → wanted ${want.id}, got room ${got.room} floor ${got.floor} at ${got.x.toFixed(1)},${got.z.toFixed(1)}${got.open ? ' (map still open)' : ''}`);
}
console.log(`${ok} of ${rooms.length} rooms: a click on the map put you in them`);
for (const b of bad) console.log('  ✗ ' + b);

// the stairs: at the foot on the lower floor, at the head on the upper
for (const id of ['dz0', 'dz1', 's1', 's2']) {
  const r = rooms.find((q) => q.id === id);
  const [px, py] = await aim(r.floor, (r.x0 + r.x1) / 2, (r.z0 + r.z1) / 2);
  await page.mouse.click(px, py); await tick(300);
  console.log(await page.evaluate((id) => { const g = window.__g, p = g.player.pos; return `${id.padEnd(4)} → x ${p.x.toFixed(2)} z ${p.z.toFixed(2)} eye ${p.y.toFixed(2)} floor ${g.floor()} yaw ${(g.player.yaw * 180 / Math.PI).toFixed(0)}°`; }, id));
}

// a click near a corner: looking the longest way (east, down the room)
{
  const r = rooms.find((q) => q.id === '345');
  const [px, py] = await aim(0, r.x0 + 1.2, r.z1 - 1.2);     // (the plan is ~1.6 px a metre: nearer is its outline)
  await page.mouse.click(px, py); await tick();
  console.log(await page.evaluate(() => { const g = window.__g, p = g.player.pos; return `345 corner click → x ${p.x.toFixed(2)} z ${p.z.toFixed(2)} yaw ${(g.player.yaw * 180 / Math.PI).toFixed(0)}° room ${g.roomAt(p.x, p.z)}`; }));
}

// shots: the pointer over her room, then where a click there puts you
{
  const r = rooms.find((q) => q.id === '345');
  const [px, py] = await aim(0, 136, -46);
  await page.mouse.move(px, py); await tick(300);
  console.log('under the pointer:', await page.evaluate(() => document.querySelector('#map .map-here').textContent));
  await page.screenshot({ path: `${outDir}/map-hover.png` });
  await page.mouse.click(px, py); await tick(1500);
  await page.screenshot({ path: `${outDir}/map-landed.png` });
}
console.log(errors.length ? 'page errors: ' + errors.join(' | ') : 'no page errors');
await browser.close(); await server.close();
