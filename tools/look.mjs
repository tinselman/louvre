/* look.mjs — photograph a model from four sides, headless.   node tools/look.mjs models/victoire.glb out.png */
import { createServer } from 'vite';
import puppeteer from 'puppeteer-core';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({ root, logLevel: 'error', server: { port: 5268, strictPort: false } });
await server.listen();
const base = server.resolvedUrls.local[0].replace(/\/$/, '');
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--use-angle=metal'] });
const p = await b.newPage(); await p.setViewport({ width: 1600, height: 520 });
const errs = []; p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto(`${base}/tools/look.html?model=/${process.argv[2]}`);
await p.waitForFunction('window.__done === true', { timeout: 60000 });
console.log(JSON.stringify(await p.evaluate(() => window.__info)));
await p.screenshot({ path: process.argv[3] });
if (errs.length) console.log(errs.slice(0, 4).join('\n'));
await b.close(); await server.close();
