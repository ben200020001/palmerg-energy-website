import { apiUrl } from "@/utils/apiUrl";

/** Baked in at `vite build`; may be empty in production if only runtime env is set. */
const BUILD_SITE_KEY = String(import.meta.env.VITE_RECAPTCHA_SITE_KEY || "").trim();

let runtimeSiteKey;
let runtimeFetchPromise;

async function fetchRuntimeSiteKey() {
  if (runtimeSiteKey !== undefined) return runtimeSiteKey;
  if (!runtimeFetchPromise) {
    runtimeFetchPromise = (async () => {
      try {
        const res = await fetch(apiUrl("/api/public-config"));
        if (!res.ok) return null;
        const data = await res.json();
        const key = String(data?.recaptchaSiteKey ?? "").trim();
        return key || null;
      } catch {
        return null;
      }
    })();
  }
  runtimeSiteKey = await runtimeFetchPromise;
  return runtimeSiteKey;
}

/** Resolves build-time key first, then `/api/public-config` (Render runtime env). */
export async function getRecaptchaSiteKey() {
  if (BUILD_SITE_KEY) return BUILD_SITE_KEY;
  return fetchRuntimeSiteKey();
}

export async function isRecaptchaConfigured() {
  return Boolean(await getRecaptchaSiteKey());
}

function scriptAlreadyQueued() {
  return typeof document !== "undefined" && document.querySelector('script[src*="google.com/recaptcha/api.js"]');
}

/** Loads api.js?render=KEY once and resolves when grecaptcha is usable. */
export async function loadRecaptchaScript() {
  const siteKey = await getRecaptchaSiteKey();
  if (!siteKey) return;
  if (typeof window !== "undefined" && window.grecaptcha?.execute) {
    return;
  }
  return new Promise((resolve, reject) => {
    if (scriptAlreadyQueued()) {
      const deadline = Date.now() + 15000;
      const t = setInterval(() => {
        if (window.grecaptcha?.execute) {
          clearInterval(t);
          resolve();
        } else if (Date.now() > deadline) {
          clearInterval(t);
          reject(new Error("reCAPTCHA script timed out"));
        }
      }, 50);
      return;
    }
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Could not load reCAPTCHA"));
    document.head.appendChild(s);
  });
}

/** Returns an action-specific token for POST body `recaptchaToken`. */
export async function executeRecaptcha(action = "contact") {
  const siteKey = await getRecaptchaSiteKey();
  if (!siteKey) return null;
  await loadRecaptchaScript();
  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(siteKey, { action });
        resolve(token);
      } catch (e) {
        reject(e instanceof Error ? e : new Error("reCAPTCHA execute failed"));
      }
    });
  });
}
