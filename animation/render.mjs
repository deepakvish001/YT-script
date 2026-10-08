// Renders an HTML/three.js scene frame-by-frame in headless Chromium, then encodes with ffmpeg.
// The scene must expose window.renderFrame(t) and set window.sceneReady = true.
//
//   node render.mjs scenes/hormuz.html out/hormuz.mp4 12          # full render (30 fps)
//   STILLS=0.5,4,7.5,10.5 node render.mjs scenes/hormuz.html       # preview stills only
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const root = path.dirname(fileURLToPath(import.meta.url));
const [scenePath = 'scenes/hormuz.html', outPath = 'out/scene.mp4', durArg = '12', fpsArg = '30'] = process.argv.slice(2);
const fps = Number(fpsArg), duration = Number(durArg);
const CHROME = process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.woff2': 'font/woff2', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => {
  const file = path.join(root, decodeURIComponent(req.url.split('?')[0]));
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));

const browser = await chromium.launch({
  executablePath: CHROME,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('console', m => console.log('[page]', m.text()));
page.on('pageerror', e => console.error('[pageerror]', e.message));
await page.goto(`http://127.0.0.1:${server.address().port}/${scenePath}`);
await page.waitForFunction(() => window.sceneReady === true, null, { timeout: 180000 });

const outDir = path.join(root, 'out');
fs.mkdirSync(outDir, { recursive: true });

if (process.env.STILLS) {
  for (const t of process.env.STILLS.split(',').map(Number)) {
    await page.evaluate(t => window.renderFrame(t), t);
    const file = path.join(outDir, `still_${t}.jpg`);
    await page.screenshot({ path: file, type: 'jpeg', quality: 90 });
    console.log('wrote', file);
  }
} else {
  const framesDir = path.join(outDir, 'frames');
  fs.rmSync(framesDir, { recursive: true, force: true });
  fs.mkdirSync(framesDir, { recursive: true });
  const n = Math.round(fps * duration);
  const started = Date.now();
  for (let i = 0; i < n; i++) {
    await page.evaluate(t => window.renderFrame(t), i / fps);
    await page.screenshot({ path: path.join(framesDir, `f${String(i).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 95 });
    if (i % 30 === 0) console.log(`frame ${i}/${n}  (${((Date.now() - started) / 1000).toFixed(0)}s)`);
  }
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(fps), '-i', path.join(framesDir, 'f%05d.jpg'),
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    path.resolve(root, outPath)], { stdio: 'inherit' });
  console.log('wrote', outPath);
}

await browser.close();
server.close();
