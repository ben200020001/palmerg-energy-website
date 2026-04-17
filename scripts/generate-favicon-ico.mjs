/**
 * Build public/favicon.ico from Palmerg logo (multi-size ICO for browser compatibility).
 * Run: node scripts/generate-favicon-ico.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "src/assets/palmerg-logo.png");
const out = path.join(root, "public/favicon.ico");
const white = { r: 255, g: 255, b: 255, alpha: 1 };

const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((s) =>
    sharp(src)
      .resize(s, s, { fit: "contain", background: white })
      .png()
      .toBuffer(),
  ),
);

const ico = await pngToIco(pngs);
fs.writeFileSync(out, ico);
console.log("wrote", out, ico.length, "bytes");
