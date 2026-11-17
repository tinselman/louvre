/* fps.mjs — frame times in a few places, headless on this Mac's GPU.  node tools/fps.mjs [dpr] */
import { createServer } from 'vite';
import puppeteer from 'puppeteer-core';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dpr = +(process.argv[2] || 2);
const server = await createServer({ root, logLevel: 'error', server: { port: 5262, strictPort: false } });
await server.listen();
const base = server.resolvedUrls.local[0].replace(/\/$/, '');
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true,
  args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--disable-gpu-vsync', '--disable-frame-rate-limit'] });
for (const at of ['', '60,2.6,90,0', '-150,2.6,-90,0', '-3,-30,180,0', '70,-25,0,0', '2.6,-240,180,0,2', '-40,-204,90,0,2', '140,-62,90,0,2', '278,-120,180,0,2', '129.6,-113.3,-90,8,1']) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: dpr });
  await page.goto(`${base}/?hud=0${at ? '&at=' + at : ''}`, { waitUntil: 'load' });
  await page.waitForFunction('window.__gReady === true', { timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1500));
  const r = await page.evaluate(() => new Promise((res) => {
    const g = window.__g; const gl = g.renderer;
    const t = []; let last = performance.now();
    const step = () => { const n = performance.now(); t.push(n - last); last = n; if (t.length < 180) requestAnimationFrame(step); else res(t); };
    requestAnimationFrame(step);
  }));
  r.sort((a, b) => a - b);
  const pr = await page.evaluate(() => window.__g.renderer.getPixelRatio());
  console.log(`${(at || 'outside').padEnd(18)} median ${r[90].toFixed(1)} ms  p90 ${r[162].toFixed(1)} ms  pixelRatio now ${pr}`);
  await page.close();
}
await browser.close(); await server.close();
