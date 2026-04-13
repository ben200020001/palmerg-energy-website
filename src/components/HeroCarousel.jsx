import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PALMERG } from "@/assets/palmerg";

const slides = [
  {
    title: "PALMERG ENERGY",
    subtitle: "VISION & VALUES",
    tagline: "Quality products. Superior services.",
    description:
      "Our vision is to be a key player in Ghana’s downstream oil sector through quality products and superior services. We are a wholly Ghanaian company—future-focused, professional, and aligned with partners, regulators, and the communities where we work.",
    image: PALMERG.heroFillingStation,
    cta: "About Palmerg",
    link: "/About",
  },
  {
    title: "BROKERAGE",
    subtitle: "BDCs → OMCs",
    tagline: "Supply you can stand behind.",
    description:
      "We broker fuel supply from Bulk Distribution Companies (BDCs) to Oil Marketing Companies (OMCs), delivering consistent quality products and dependable service to loyal clients across the downstream value chain.",
    image: PALMERG.lpg,
    cta: "View services",
    link: "/Services",
  },
  {
    title: "NATIONWIDE",
    subtitle: "FOOTPRINT & GROWTH",
    tagline: "From regions to retail.",
    description:
      "Palmerg supports filling station operations and regional growth—including Northern Ghana—while working toward a premier licensed oil marketing company: expanding our brand and service reach across the country.",
    image: PALMERG.heroFillingStation,
    cta: "Nationwide fuel",
    link: "/NationwideFuel",
  },
  {
    title: "NPA & STRATEGY",
    subtitle: "LICENSING PATH",
    tagline: "Compliance meets ambition.",
    description:
      "A core objective is becoming a fully fledged oil marketing company. We are advancing through the National Petroleum Authority (NPA) licensing process, backed by leadership with deep regulatory, depot, and financial experience.",
    image: PALMERG.operations,
    cta: "Our story",
    link: "/About",
  },
  {
    title: "STATIONS",
    subtitle: "MANAGEMENT & SUPPORT",
    tagline: "Solutions that keep sites running.",
    description:
      "We manage filling stations with operational challenges—offering practical solutions and consultancy so retailers and partners get the best possible outcomes in a demanding downstream environment.",
    image: PALMERG.heroFillingStation,
    cta: "Automotive stations",
    link: "/FuelingStations",
  },
  {
    title: "POWER & HAULAGE",
    subtitle: "GEN SETS & TANKERS",
    tagline: "Industrial muscle when it counts.",
    description:
      "Our portfolio includes generator sets from 10 kVA to 1500 kVA, plus fuel tankers and haulage services—supporting power, logistics, and bulk fuel movement for businesses that cannot afford downtime.",
    image: PALMERG.haulage,
    cta: "Haulage & logistics",
    link: "/PalmergHaulage",
  },
  {
    title: "SALT MINING",
    subtitle: "EXTRACTION & EXPORT",
    tagline: "From Ghana’s shores to global markets.",
    description:
      "Large-scale salt mining and processing with modern extraction and handling—supplying consistent, quality salt for food-grade, industrial, and export customers while operating responsibly alongside our energy and logistics footprint.",
    image: PALMERG.heroSaltMining,
    cta: "Salt mining & export",
    link: "/SaltMining",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden mt-[112px] md:mt-[96px]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

        <div className="relative h-full site-container flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="font-heading font-black text-5xl md:text-7xl leading-tight mb-4">
              {slides[current].title}
              <br />
              <span className="text-secondary">{slides[current].subtitle}</span>
            </h1>
            <p className="text-secondary font-semibold text-xl md:text-2xl italic mb-4">
              {slides[current].tagline}
            </p>
            <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
              {slides[current].description}
            </p>
            <div className="flex flex-wrap gap-4">
              {slides[current].link ? (
                <Link to={slides[current].link}>
                  <Button size="lg" variant="secondary" className="font-semibold">
                    {slides[current].cta}
                  </Button>
                </Link>
              ) : (
                <Button size="lg" variant="secondary" className="font-semibold">
                  {slides[current].cta}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full ${i === current ? "bg-secondary w-8" : "bg-white/40 w-3"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
