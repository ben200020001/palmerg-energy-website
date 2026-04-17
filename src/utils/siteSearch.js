import { SEARCH_INDEX } from "@/data/searchIndex";

/**
 * Client-side search over SEARCH_INDEX. Returns the same shape as the legacy /api/search response.
 * @param {string} rawQuery
 * @returns {{ summary: string, did_you_mean: null, results: Array<{ title: string, description: string, page_path: string, category: string }> }}
 */
export function searchSite(rawQuery) {
  const query = String(rawQuery ?? "").trim();
  if (!query) {
    return {
      summary: "",
      did_you_mean: null,
      results: [],
    };
  }

  const qLower = query.toLowerCase();
  const words = qLower.split(/\s+/).filter((w) => w.length > 1);

  const scored = SEARCH_INDEX.map((item) => {
    const title = item.title.toLowerCase();
    const desc = item.description.toLowerCase();
    const kw = (item.keywords || "").toLowerCase();
    let score = 0;

    if (title.includes(qLower)) score += 12;
    if (desc.includes(qLower)) score += 6;
    if (kw.includes(qLower)) score += 8;

    for (const w of words) {
      if (title.includes(w)) score += 4;
      if (desc.includes(w)) score += 2;
      if (kw.includes(w)) score += 3;
    }

    return { item, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);

  let results = scored.map(({ item }) => ({
    title: item.title,
    description: item.description,
    page_path: item.page_path,
    category: item.category,
  }));

  let summary;
  if (results.length === 0) {
    summary = `No pages matched "${query}" exactly. Try keywords like fuel, stations, LPG, haulage, bulk, contact, or about. Below are suggested pages to explore.`;
    results = [
      {
        title: "Products & Services",
        description: "Browse all product and service categories.",
        page_path: "/Services",
        category: "Services",
      },
      {
        title: "Contact",
        description: "Reach our team for help with your enquiry.",
        page_path: "/Contact",
        category: "Support",
      },
    ];
  } else {
    summary = `Showing ${results.length} page${results.length === 1 ? "" : "s"} that match your search. Select a result to learn more about Palmerg Energy services and information.`;
  }

  return {
    summary,
    did_you_mean: null,
    results,
  };
}
