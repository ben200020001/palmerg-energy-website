import { PALMERG } from "@/assets/palmerg";
import { resolvePublicPath } from "@/config/siteMedia";

/**
 * Single source for “Products & services” cards (home + Services page).
 */
export const productsSectionItems = [
  {
    title: "Gasoline",
    category: "Fuel",
    description:
      "Premium gasoline formulated for everyday motorists and commercial fleets — consistent quality at Palmerg retail and partner outlets.",
    image: resolvePublicPath("/images/products/gasoline-fueling.png"),
    link: "/Gasoline",
  },
  {
    title: "Diesel fuel",
    category: "Fuel",
    description:
      "High-performance diesel for trucks, buses, and equipment — engineered for efficiency and reliability across Ghana.",
    image: resolvePublicPath("/images/products/diesel-fueling.png"),
    link: "/DieselFuel",
  },
  {
    title: "Fuel tankers & haulage",
    category: "Logistics",
    description:
      "Reliable fuel haulage and logistics to keep your supply chain moving — from bulk movements to dedicated delivery schedules.",
    image: resolvePublicPath("/images/products/haulage-palmerg-branded.png"),
    link: "/FuelTankersHaulage",
  },
  {
    title: "Generator sets (10 kVA – 1500 kVA)",
    category: "Products",
    description:
      "Power solutions for homes, businesses, and industry — aligned with our downstream operations and quality focus across Ghana.",
    image: resolvePublicPath("/images/products/fuel-tankers-haulage.jpeg"),
    link: "/GeneratorSets",
  },
  {
    title: "Automotive stations & quality fuel",
    category: "Fueling",
    description:
      "Palmerg Energy is your partner for quality automotive fuels and refined products — supporting motorists and businesses nationwide.",
    image: PALMERG.heroFillingStation,
    link: "/AutomotiveQualityFuel",
  },
  {
    title: "Salt mining & export",
    category: "Resources",
    description:
      "Large-scale salt extraction and processing for food-grade and industrial markets — local supply and export with responsible operations.",
    image: resolvePublicPath("/images/products/salt-mining.png"),
    link: "/SaltMining",
  },
  {
    title: "Renewable energy",
    category: "Sustainability",
    description:
      "Solar and clean-energy pathways for businesses and communities — practical steps toward lower-carbon, resilient power.",
    image: resolvePublicPath("/images/products/renewable-energy.png"),
    link: "/RenewableEnergy",
  },
  {
    title: "General goods",
    category: "Trade",
    description:
      "Sourcing and logistics for general merchandise — structured supply aligned with Palmerg’s trading and haulage strengths.",
    image: resolvePublicPath("/images/products/general-goods.png"),
    link: "/GeneralGoods",
  },
  {
    title: "Farming",
    category: "Agriculture",
    description:
      "Fuel, logistics, and partnerships for agriculture — supporting equipment, transport, and productive value chains.",
    image: resolvePublicPath("/images/products/farming.png"),
    link: "/Farming",
  },
];

/** Homepage “Products & services” strip — generator, diesel, automotive only (Services page uses full `productsSectionItems`). */
const HOME_PRODUCT_LINKS = ["/GeneratorSets", "/DieselFuel", "/AutomotiveQualityFuel"];

export const homeProductsSectionItems = HOME_PRODUCT_LINKS.map((link) =>
  productsSectionItems.find((p) => p.link === link),
).filter(Boolean);
