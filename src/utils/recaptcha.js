/** Google reCAPTCHA v3 — site key is public (VITE_*); secret verifies on the server. */
const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export function isRecaptchaConfigured() {
  return Boolean(SITE_KEY);
}

function scriptAlreadyQueued() {
  return typeof document !== "undefined" && document.querySelector('script[src*="google.com/recaptcha/api.js"]');
}

/** Loads api.js?render=KEY once and resolves when grecaptcha is usable. */
export function loadRecaptchaScript() {
  if (!SITE_KEY) return Promise.resolve();
  if (typeof window !== "undefined" && window.grecaptcha?.execute) {
    return Promise.resolve();
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
    s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(SITE_KEY)}`;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Could not load reCAPTCHA"));
    document.head.appendChild(s);
  });
}

/** Returns an action-specific token for POST body `recaptchaToken`. */
export async function executeRecaptcha(action = "contact") {
  if (!SITE_KEY) return null;
  await loadRecaptchaScript();
  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(SITE_KEY, { action });
        resolve(token);
      } catch (e) {
        reject(e instanceof Error ? e : new Error("reCAPTCHA execute failed"));
      }
    });
  });
}
