import { getCookie, setCookie, deleteCookie } from "@/utils/cookies";

export const CONSENT_COOKIE_NAME = "palmerg_cookie_consent_v1";
export const ANALYTICS_COOKIE_NAME = "palmerg_analytics_enabled";
export const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

export function getSavedConsent() {
  const raw = getCookie(CONSENT_COOKIE_NAME);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (parsed && (parsed.type === "accepted" || parsed.type === "necessary")) {
      return parsed;
    }
  } catch {
    // malformed cookie; ignore
  }

  return null;
}

export function applyCookieConsent(consent) {
  if (!consent || !consent.type) {
    return;
  }

  if (consent.type === "accepted") {
    setCookie(ANALYTICS_COOKIE_NAME, "true", COOKIE_MAX_AGE);
  } else {
    deleteCookie(ANALYTICS_COOKIE_NAME);
  }
}

export function saveCookieConsent(type) {
  const payload = {
    type,
    timestamp: new Date().toISOString(),
  };

  setCookie(CONSENT_COOKIE_NAME, JSON.stringify(payload), COOKIE_MAX_AGE);
  applyCookieConsent(payload);

  return payload;
}

export function clearCookieConsent() {
  deleteCookie(CONSENT_COOKIE_NAME);
  deleteCookie(ANALYTICS_COOKIE_NAME);
}

export function isAnalyticsAllowed() {
  const consent = getSavedConsent();
  return consent?.type === "accepted";
}
