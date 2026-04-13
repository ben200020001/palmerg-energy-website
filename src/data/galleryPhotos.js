import { PALMERG } from "@/assets/palmerg";
import { resolvePublicPath } from "@/config/siteMedia";

/**
 * Media gallery — single source for Gallery grid, GalleryPhoto detail, and Footer thumbnails.
 */
export const galleryPhotos = [
  {
    src: PALMERG.haulage,
    alt: "Palmerg Haulage Operations",
    title: "Palmerg Haulage Operations",
    description:
      "Our haulage fleet in action, delivering fuel reliably across Ghana's network of roads.",
  },
  {
    src: PALMERG.stations,
    alt: "Palmerg Fuel Station Network",
    title: "Palmerg Fuel Station Network",
    description: "A glimpse of our nationwide network of premium fuel stations serving motorists across Ghana.",
  },
  {
    src: PALMERG.operations,
    alt: "Palmerg Refinery Operations",
    title: "Palmerg Refinery Operations",
    description:
      "State-of-the-art refinery and processing facilities ensuring efficient production and distribution.",
  },
  {
    src: PALMERG.lpg,
    alt: "Palmerg Mission & Vision",
    title: "Palmerg Mission & Vision",
    description: "Driven by a clear mission and vision to power Ghana's progress and serve every community.",
  },
  {
    src: PALMERG.salt,
    alt: "Salt Mining & Export",
    title: "Salt Mining & Export",
    description: "Large-scale salt extraction and processing operations serving local and international markets.",
  },
  {
    src: resolvePublicPath("/images/palmerg/palmerg-gallery-station.png"),
    alt: "Palmerg retail fuel station",
    title: "Retail fuel & service",
    description:
      "Modern station experience—quality fuels and professional service for motorists and businesses across our network.",
  },
  {
    src: resolvePublicPath("/images/palmerg/palmerg-gallery-logistics.png"),
    alt: "Palmerg fuel logistics fleet",
    title: "Logistics & bulk delivery",
    description:
      "Reliable tanker and logistics capacity moving product safely from depots to stations and industrial customers.",
  },
];
