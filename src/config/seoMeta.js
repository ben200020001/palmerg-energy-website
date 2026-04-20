/** Canonical site origin (no trailing slash). */
export const SITE_URL = "https://palmergenergy.com";

/** Default image for social previews (512×512 in /public). */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/palmerg-logo.png`;

const DEFAULT = {
  title: "Palmerg Energy & Resources Limited",
  description:
    "Palmerg Energy & Resources Limited — fuel stations, bulk supply, LPG, haulage, salt mining, and downstream energy services across Ghana.",
};

/**
 * Per-route SEO. Keys must match React Router `location.pathname` (e.g. /Home).
 */
export const ROUTE_SEO = {
  "/Home": {
    title: "Palmerg Energy | Quality fuel & energy services in Ghana",
    description:
      "Palmerg Energy & Resources Limited — vision, values, retail stations, brokerage, haulage, LPG, and growth toward a full oil marketing company in Ghana.",
  },
  "/About": {
    title: "About Us | Palmerg Energy",
    description:
      "Company profile, governance, mission, vision, and management team for Palmerg Energy & Resources Limited in Ghana’s downstream energy sector.",
  },
  "/Services": {
    title: "Products & Services | Palmerg Energy",
    description:
      "Explore Palmerg fuels, haulage, LPG, bulk supply, engine oils, salt mining, renewables, and related products and services.",
  },
  "/Contact": {
    title: "Contact | Palmerg Energy",
    description:
      "Contact Palmerg Energy in East Legon, Accra — phone, email, map, and enquiry form for sales and support.",
  },
  "/Stations": {
    title: "Locate Stations | Palmerg Energy",
    description:
      "Find Palmerg and partner filling stations, forecourts, and retail fuel locations across Ghana.",
  },
  "/Gallery": {
    title: "Photo Gallery | Palmerg Energy",
    description:
      "Photos from Palmerg operations — logistics, stations, bulk supply, salt mining, and events.",
  },
  "/FuelingStations": {
    title: "Fueling Stations | Palmerg Energy",
    description:
      "Retail fueling stations, quality petrol and diesel, LPG, and customer service across our network.",
  },
  "/BulkFuelSupply": {
    title: "Bulk Fuel Supply | Palmerg Energy",
    description:
      "Bulk fuel supply and contract arrangements for businesses, industry, and commercial customers in Ghana.",
  },
  "/LPGServices": {
    title: "LPG & Gas Services | Palmerg Energy",
    description:
      "Safe LPG supply — cylinder refilling, bulk gas, and gas station services for homes and businesses.",
  },
  "/PalmergHaulage": {
    title: "Palmerg Haulage | Fuel transport & logistics",
    description:
      "Fuel haulage, road transport, and logistics — Palmerg tankers and delivery capacity across Ghana.",
  },
  "/SaltMining": {
    title: "Salt Mining & Export | Palmerg Energy",
    description:
      "Salt extraction, processing, and export — industrial salt operations aligned with Palmerg’s resources portfolio.",
  },
  "/EngineOils": {
    title: "Engine Oils & Lubricants | Palmerg Energy",
    description:
      "Engine oils, transmission fluids, greases, and fleet lubricant solutions from Palmerg Energy.",
  },
  "/DieselFuel": {
    title: "Diesel Fuel | Palmerg Energy",
    description:
      "Quality diesel for trucks, buses, equipment, and commercial fleets — Palmerg Energy Ghana.",
  },
  "/Gasoline": {
    title: "Gasoline | Palmerg Energy",
    description:
      "Premium gasoline and petrol for motorists and commercial fleets at Palmerg retail and partner outlets.",
  },
  "/NationwideFuel": {
    title: "Nationwide Fuel Access | Palmerg Energy",
    description:
      "National footprint and access to quality fuel — Palmerg Energy’s growing network across Ghana.",
  },
  "/PalmergPrestige": {
    title: "Palmerg Prestige | Premium fuel",
    description:
      "Palmerg Prestige premium refined fuel — performance, efficiency, and availability at select outlets.",
  },
  "/GeneratorSets": {
    title: "Generator Sets | Palmerg Energy",
    description:
      "Generator sets from 10 kVA to 1500 kVA — power solutions for homes, businesses, and industry.",
  },
  "/RenewableEnergy": {
    title: "Renewable Energy | Palmerg Energy",
    description:
      "Renewable energy pathways including solar — aligned with Palmerg’s operations and sustainability focus.",
  },
  "/Farming": {
    title: "Farming & Agriculture | Palmerg Energy",
    description:
      "Agriculture and rural value chain support — part of Palmerg Energy’s broader trade and supply activities.",
  },
  "/GeneralGoods": {
    title: "General Goods & Trade | Palmerg Energy",
    description:
      "General goods import, export, and trade support from Palmerg Energy & Resources Limited.",
  },
  "/AutomotiveQualityFuel": {
    title: "Automotive Quality Fuel | Palmerg Energy",
    description:
      "Quality automotive fuels and refined products for motorists and businesses — Palmerg Energy.",
  },
  "/FuelTankersHaulage": {
    title: "Fuel Tankers & Haulage | Palmerg Energy",
    description:
      "Dedicated fuel tankers and haulage capacity for reliable bulk and retail supply logistics.",
  },
  "/Faqs": {
    title: "FAQs | Palmerg Energy",
    description:
      "Frequently asked questions about Palmerg Energy products, services, stations, and contact options.",
  },
  "/SearchResults": {
    title: "Search | Palmerg Energy",
    description:
      "Search Palmerg Energy pages for services, products, stations, haulage, LPG, and contact information.",
  },
  "/GalleryPhoto": {
    title: "Gallery | Palmerg Energy",
    description:
      "Palmerg Energy gallery image — operations, logistics, stations, and company highlights.",
  },
  "/TeamMember": {
    title: "Management team | Palmerg Energy",
    description:
      "Palmerg Energy board and executive leadership — governance, operations, and company profile.",
  },
};

/**
 * @param {string} pathname
 * @param {URLSearchParams} searchParams
 * @returns {{ title: string, description: string }}
 */
export function resolveSeo(pathname, searchParams) {
  const path = pathname === "/" ? "/Home" : pathname;

  if (path === "/SearchResults") {
    const q = searchParams.get("q")?.trim();
    if (q) {
      return {
        title: `Search: ${q} | Palmerg Energy`,
        description: `Search results for “${q}” on Palmerg Energy — pages, services, and contact details.`,
      };
    }
  }

  return ROUTE_SEO[path] || DEFAULT;
}

/**
 * Absolute URL for canonical / og:url (no hash; optional query for search).
 */
export function resolveCanonicalUrl(pathname, searchParams) {
  const path = pathname === "/" ? "/Home" : pathname || "/Home";
  if (path === "/SearchResults") {
    const q = searchParams.get("q")?.trim();
    if (q) {
      return `${SITE_URL}/SearchResults?q=${encodeURIComponent(q)}`;
    }
  }
  return `${SITE_URL}${path}`;
}
