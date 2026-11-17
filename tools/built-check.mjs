/* built-check.mjs — the built site, served under /louvre/ as GitHub Pages will: loads, draws, no errors.
   node tools/built-check.mjs http://127.0.0.1:5267/louvre/ out.png */
import puppeteer from 'puppeteer-core';
const [url, out] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--use-angle=metal'] });
const p = await b.newPage();
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
p.on('requestfailed', (r) => errs.push('failed ' + r.url().slice(0, 100)));
await p.setViewport({ width: 1400, height: 860 });
await p.goto(url + '?hud=0&at=-3,-26.5,180,0', { waitUntil: 'load' });
await p.waitForFunction('window.__gReady === true', { timeout: 60000 });
await new Promise((r) => setTimeout(r, 5000));
await p.screenshot({ path: out });
console.log(JSON.stringify(await p.evaluate(() => ({ pics: window.__g.pictures.length, ready: window.__gReady }))));
console.log(errs.length ? errs.slice(0, 6).join('\n') : 'no errors');
await b.close();
