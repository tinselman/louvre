/* shot.mjs — screenshot the gallery headlessly (never shows a window).
 *
 *   node tools/shot.mjs "<query>" out.png [width height]
 *   node tools/shot.mjs --list jobs.json     jobs = [{ query, out, w, h, wait, dpr }]
 *
 * Starts its own Vite server and drives Google Chrome headless on the GPU. The page
 * sets window.__gReady once it has drawn (add near=1 to wait for the sharp pictures).
 */
import { createServer } from 'vite';
import puppeteer from 'puppeteer-core';
import { readFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
let jobs;
if (args[0] === '--list') jobs = JSON.parse(readFileSync(args[1], 'utf8'));
else jobs = [{ query: args[0] ?? '', out: args[1] ?? 'shots/out.png', w: +(args[2] || 1400), h: +(args[3] || 860) }];

const server = await createServer({ root, logLevel: 'error', server: { port: 5263, strictPort: false } });
await server.listen();
const base = server.resolvedUrls.local[0].replace(/\/$/, '');
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--no-first-run', '--no-default-browser-check', '--hide-scrollbars'],
});
let failed = 0;
try {
  for (const job of jobs) {
    const page = await browser.newPage();
    const errors = [];
    page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`); });
    page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`));
    await page.setViewport({ width: job.w ?? 1400, height: job.h ?? 860, deviceScaleFactor: job.dpr ?? 1 });
    await page.goto(`${base}/?${job.query ?? ''}`, { waitUntil: 'load', timeout: 60000 });
    try { await page.waitForFunction('window.__gReady === true', { timeout: job.timeout ?? 60000 }); }
    catch { errors.push('[shot] timed out waiting for __gReady'); failed++; }
    await new Promise((r) => setTimeout(r, job.wait ?? 1400));
    mkdirSync(dirname(resolve(root, job.out)), { recursive: true });
    await page.screenshot({ path: resolve(root, job.out) });
    console.log(`${job.out}  <-  ?${job.query ?? ''}`);
    for (const e of errors) console.log('   ' + e);
    await page.close();
  }
} finally {
  await browser.close();
  await server.close();
}
process.exit(failed ? 1 : 0);
