/**
 * Absolute URL for API routes. Use for fetch() so production works when:
 * - Same host serves the SPA + Express (default: path is under site origin + Vite base), or
 * - API is on another origin: set VITE_API_URL to that origin (no trailing slash), e.g. https://palmerg-api.onrender.com
 */
export function apiUrl(path) {
  const p = path.startsWith("/") ? path : `/${path}`;
  const override = import.meta.env.VITE_API_URL;
  if (override) {
    const base = String(override).replace(/\/$/, "");
    return `${base}${p}`;
  }
  const viteBase = import.meta.env.BASE_URL || "/";
  if (viteBase === "/") return p;
  const root = viteBase.replace(/\/$/, "");
  return `${root}${p}`;
}
