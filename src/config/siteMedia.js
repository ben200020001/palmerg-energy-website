import baseOverrides from "@/data/siteMedia.overrides.json";
import { publicAsset } from "@/utils/publicAsset";

/**
 * Site media for Palmerg + Base44
 *
 * 1) Edit `src/data/siteMedia.overrides.json` in this repo (e.g. in Base44 Code tab):
 *    set any value to a full URL from Base44 file library / your CDN.
 *    Leave "" to keep the default (local `public/` or bundled `src/assets`).
 *
 * 2) Optional — merge more URLs from Base44 Environment variables without editing JSON:
 *    VITE_SITE_MEDIA_JSON={"images/products/gasoline-fueling.png":"https://..."}
 *    (same keys as in the JSON file). Values in env override JSON for matching keys.
 */
function parseEnvOverrides() {
  const raw = import.meta.env.VITE_SITE_MEDIA_JSON;
  if (!raw || !String(raw).trim()) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function mergedMap() {
  return { ...baseOverrides, ...parseEnvOverrides() };
}

/**
 * @param {string} path Absolute-style public path e.g. "/images/products/gasoline-fueling.png"
 */
export function resolvePublicPath(path) {
  const key = path.replace(/^\//, "");
  const v = mergedMap()[key];
  if (typeof v === "string" && v.trim()) return v.trim();
  return publicAsset(path);
}

/**
 * @param {string} key Palmerg asset key matching exports (e.g. "heroFillingStation", "palmergLogo")
 * @param {string} bundledUrl Vite resolved URL from an import
 */
export function resolvePalmergKey(key, bundledUrl) {
  const k = `palmerg.${key}`;
  const v = mergedMap()[k];
  if (typeof v === "string" && v.trim()) return v.trim();
  return bundledUrl;
}
