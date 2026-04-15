/**
 * Post-build: shrink raster images in dist/ to keep deploy bundles smaller.
 * Run automatically after `vite build` via package.json "build" script.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");

// Keep dist image payload small for hosting upload limits.
const MAX_WIDTH = 800;
const PNG_Q = 32;
const JPEG_Q = 50;

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function main() {
  let saved = 0;
  const files = (await walk(distDir)).filter((f) => /\.(png|jpe?g)$/i.test(f));

  for (const file of files) {
    const before = (await fs.stat(file)).size;
    const buf = await fs.readFile(file);
    const img = sharp(buf);
    const meta = await img.metadata();
    const pipeline = img.rotate();

    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    let outBuf;
    const lower = file.toLowerCase();
    if (lower.endsWith(".png")) {
      outBuf = await pipeline.png({ quality: PNG_Q, compressionLevel: 9, effort: 10 }).toBuffer();
    } else {
      outBuf = await pipeline.jpeg({ quality: JPEG_Q, mozjpeg: true }).toBuffer();
    }

    if (outBuf.length < before) {
      await fs.writeFile(file, outBuf);
      saved += before - outBuf.length;
    }
  }

  // eslint-disable-next-line no-console
  console.log(
    `[shrink-dist-images] Processed ${files.length} images. Estimated bytes saved vs pre-shrink: ${(saved / 1024).toFixed(0)} KB`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
