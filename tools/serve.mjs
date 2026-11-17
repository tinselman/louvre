/* serve.mjs — a dev server for a test, on its own port, that closes itself after a while.
   node tools/serve.mjs [port] [seconds] */
import { createServer } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const port = +(process.argv[2] || 5266), secs = +(process.argv[3] || 150);
const s = await createServer({ root, logLevel: 'error', server: { port, strictPort: true, host: '127.0.0.1' } });
await s.listen();
console.log('up', port);
setTimeout(() => s.close().then(() => process.exit(0)), secs * 1000);
