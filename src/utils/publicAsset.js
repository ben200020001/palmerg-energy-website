/**
 * URLs for files from `public/` (copied to `dist/` root by Vite).
 * Use this instead of hard-coded `/images/...` so `base` (subpath deploys) works.
 */
export function publicAsset(path) {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${clean}`;
}
