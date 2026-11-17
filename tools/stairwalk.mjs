/* stairwalk.mjs — headless: walk up the Escalier Henri II with the W key, turning at the landing, and out on the
   second floor; then back down. Prints where you are, how high, which floor.   node tools/stairwalk.mjs */
import { createServer } from 'vite';
import puppeteer from 'puppeteer-core';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({ root, logLevel: 'error', server: { port: 5265, strictPort: false } });
await server.listen();
const base = server.resolvedUrls.local[0].replace(/\/$/, '');
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--use-angle=metal'] });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
await page.setViewport({ width: 900, height: 600 });
await page.goto(`${base}/?hud=0&at=145.5,-117.7,90,0,1`, { waitUntil: 'load' });
await page.waitForFunction('window.__gReady === true', { timeout: 60000 });
const where = (label) => page.evaluate((label) => { const g = window.__g, p = g.player.pos; return `${label.padEnd(26)} x ${p.x.toFixed(1)} z ${p.z.toFixed(1)} eye ${p.y.toFixed(2)} floor ${g.floor()} room ${g.roomAt(p.x, p.z) ?? '—'}`; }, label);
const walk = async (yawDeg, secs) => {
  await page.evaluate((y) => { window.__g.player.yaw = y * Math.PI / 180; }, yawDeg);
  await page.keyboard.down('KeyW'); await new Promise((r) => setTimeout(r, secs * 1000)); await page.keyboard.up('KeyW');
  await new Promise((r) => setTimeout(r, 400));
};
const out = [await where('start (passage, 1st)')];
await walk(90, 6.5); out.push(await where('up flight A, west'));
await walk(180, 1.6); out.push(await where('across the landing'));
await walk(-90, 4.0); out.push(await where('up flight B, east'));
await walk(-90, 3.0); out.push(await where('out to the passage'));
await page.evaluate(() => { window.__g.player.pos.x = 144.9; });
await walk(0, 3.0); out.push(await where('north into 900'));
await page.evaluate(() => { const p = window.__g.player.pos; p.x = 146.0; p.z = -113.3; });
await walk(90, 7.5); out.push(await where('down flight B, west'));
await walk(0, 1.6); out.push(await where('across the landing'));
await walk(-90, 7.5); out.push(await where('down flight A, out east'));
console.log(out.join('\n'));
if (errors.length) console.log('page errors:', errors.slice(0, 4));
await browser.close(); await server.close();
