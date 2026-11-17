import { defineConfig, Plugin } from 'vite';
import { cpSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

/* data/ is copied beside the built page; the pictures are in public/art. */
const BUILD = Date.now().toString(36);
function louvreData(): Plugin {
  return {
    name: 'louvre-data',
    closeBundle() {
      cpSync(resolve(__dirname, 'data'), resolve(__dirname, 'dist', 'data'), { recursive: true });
      writeFileSync(resolve(__dirname, 'dist', 'version.json'), JSON.stringify({ build: BUILD }) + '\n');
    },
  };
}
export default defineConfig({
  base: './',
  plugins: [louvreData()],
  define: { __BUILD__: JSON.stringify(BUILD) },
  server: { port: 5252, strictPort: true, host: '127.0.0.1' },
  build: { chunkSizeWarningLimit: 2000 },
});
