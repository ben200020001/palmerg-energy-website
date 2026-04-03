import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "GENORA PREMIUM",
    subtitle: "GOES A LONG WAY",
    tagline: "Energy For Extra Miles...",
    description: "Quality Genora fuel that powers your journey. Fueling keeping you on the best track with Genora's clean fueling, engineered for excellence.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/1b585e164_generated_image.png",
    cta: "Find a Genora Station",
    link: "/Stations",
  },
  {
    title: "GENORA QUALITY",
    subtitle: "TRUSTED PERFORMANCE",
    tagline: "Powering Progress...",
    description: "Advanced Genora fuel technology designed for optimal engine performance and longevity. Experience the Genora difference.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/fb69c1547_generated_image.png",
    cta: "Learn More",
    link: "/About",
  },
  {
    title: "GENORA NATIONWIDE",
    subtitle: "SERVICE NETWORK",
    tagline: "Always Within Reach...",
    description: "Over 25+ Genora Energy stations strategically located across the country. Premium Genora service wherever you go.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/14263d9b7_generated_image.png",
    cta: "View All Genora Products",
    link: "/Services",
  },
  {
    title: "OIL & GAS",
    subtitle: "OPERATIONS",
    tagline: "Powering Ghana's Future...",
    description: "State-of-the-art refinery and processing facilities ensuring efficient production and distribution of quality petroleum products across Ghana.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/960b6858c_generated_image.png",
    cta: "Our Operations",
    link: "/About",
  },
  {
    title: "FUEL STATION",
    subtitle: "NETWORK",
    tagline: "Service Excellence Everywhere...",
    description: "Modern, strategically located service stations providing premium fuel and convenience services to motorists nationwide.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/7fe1c4481_generated_image.png",
    cta: "Find Stations",
    link: "/Stations",
  },
  {
    title: "SALT MINING",
    subtitle: "& EXPORT",
    tagline: "Natural Resources, Global Reach...",
    description: "Large-scale salt mining operations with advanced extraction and processing capabilities, serving both local and international markets.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/efa7f7aa0_generated_image.png",
    cta: "Discover More",
    link: "/About",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden mt-[104px] md:mt-[88px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background with gradient overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xl text-white"
            >
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
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-secondary w-8" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}