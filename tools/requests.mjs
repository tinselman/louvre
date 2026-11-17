/* requests.mjs — every request a page makes at one spot that comes back 400 or worse.
   node tools/requests.mjs https://tinselman.github.io/louvre/ "x,z,yaw,pitch,floor" */
import puppeteer from 'puppeteer-core';
const [url, at] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--use-angle=metal'] });
const p = await b.newPage();
const bad = []; let n = 0;
p.on('response', (r) => { n++; if (r.status() >= 400) bad.push(r.status() + ' ' + r.url().slice(0, 140)); });
await p.setViewport({ width: 1400, height: 860 });
await p.goto(url + '?hud=0&at=' + at, { waitUntil: 'load' });
await p.waitForFunction('window.__gReady === true', { timeout: 60000 });
await new Promise((r) => setTimeout(r, 6000));
console.log(n, 'responses;', bad.length ? bad.join('\n') : 'none bad');
console.log(JSON.stringify(await p.evaluate(() => ({ rounds: window.__g.rounds?.length ?? null }))));
await b.close();
