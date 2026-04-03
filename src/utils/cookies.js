export function setCookie(name, value, maxAgeSeconds = 31536000, path = "/") {
  if (typeof document === "undefined") return;
  const encodedValue = encodeURIComponent(value);
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  const sameSite = "; SameSite=Lax";
  document.cookie = `${name}=${encodedValue}; path=${path}; max-age=${maxAgeSeconds}${sameSite}${secure}`;
}

export function getCookie(name) {
  if (typeof document === "undefined") return null;
  const cookies = document.cookie ? document.cookie.split(";") : [];
  const prefix = `${name}=`;

  for (const raw of cookies) {
    const cookie = raw.trim();
    if (cookie.startsWith(prefix)) {
      return decodeURIComponent(cookie.substring(prefix.length));
    }
  }

  return null;
}

export function deleteCookie(name, path = "/") {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; path=${path}; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
}
