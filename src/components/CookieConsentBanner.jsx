import { useEffect, useState } from "react";
import {
  getSavedConsent,
  saveCookieConsent,
  clearCookieConsent,
  applyCookieConsent,
} from "@/utils/cookieConsent";

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSavedConsent, setHasSavedConsent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shouldReset = params.get("resetCookies") === "1";

    if (shouldReset) {
      clearCookieConsent();
    }

    const savedConsent = getSavedConsent();
    const hasConsent = Boolean(savedConsent);
    setHasSavedConsent(hasConsent);
    setIsVisible(!hasConsent);

    if (savedConsent) {
      applyCookieConsent(savedConsent);
    }
  }, []);

  const saveConsent = (type) => {
    saveCookieConsent(type);
    setIsVisible(false);
    setHasSavedConsent(true);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-x-0 bottom-0 z-[1100] px-3 pb-3 sm:px-4 sm:pb-4">
          <div className="mx-auto max-w-5xl rounded-xl border border-border bg-white shadow-2xl">
            <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <p className="text-sm text-foreground">
                We use cookies to improve site performance and your experience. By clicking
                <span className="font-semibold"> Accept all</span>, you agree to optional analytics cookies.
              </p>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => saveConsent("necessary")}
                  className="rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
                >
                  Necessary only
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent("accepted")}
                  className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {hasSavedConsent && !isVisible && (
        <button
          type="button"
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 left-4 z-[1090] rounded-md border border-border bg-white px-3 py-2 text-xs font-medium text-foreground shadow-md hover:bg-muted transition-colors"
        >
          Cookie settings
        </button>
      )}
    </>
  );
}
