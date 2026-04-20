import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE, resolveSeo, resolveCanonicalUrl } from "@/config/seoMeta";

function upsertMeta(attr, key, content) {
  if (content == null || content === "") return;
  const sel =
    attr === "name"
      ? `meta[name="${key}"]`
      : `meta[property="${key}"]`;
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLinkCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Updates document title, meta description, Open Graph, and Twitter Card tags on route change.
 */
export default function SeoHead() {
  const { pathname, search } = useLocation();
  const searchParams = new URLSearchParams(search);

  useEffect(() => {
    const { title, description } = resolveSeo(pathname, searchParams);
    const canonical = resolveCanonicalUrl(pathname, searchParams);
    const pageUrl = canonical;

    document.title = title;

    upsertMeta("name", "description", description);

    upsertMeta("property", "og:site_name", "Palmerg Energy");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "en_GH");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);

    upsertLinkCanonical(canonical);
  }, [pathname, search]);

  return null;
}
