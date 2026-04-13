import React from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import InfoBanner from "@/components/InfoBanner";
import ProductsSection from "@/components/ProductsSection";
import PaymentSection from "@/components/PaymentSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";
import { MapPin, Phone, Info } from "lucide-react";
import { palmergLogo } from "@/assets/palmerg";

export default function Home() {
  return (
    <div className="site-page relative">
      <img
        src={palmergLogo}
        alt="Palmerg brand watermark"
        className="pointer-events-none absolute right-4 top-28 z-0 hidden h-44 w-auto opacity-10 lg:block"
      />
      <Header />
      <HeroCarousel />
      <main className="relative z-10 mx-auto w-full max-w-[1600px] px-0 sm:px-4 lg:px-8">
        <ProductsSection />
        <InfoBanner />
        <PaymentSection />
        <LocationsSection />
      </main>

      <div className="flex flex-col text-white md:flex-row">
        <div className="bg-primary flex-1 py-4">
          <div className="site-container flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.google.com/maps/search/?api=1&query=No.1+Papaya+Street,+East+Legon,+Accra,+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 transition-colors hover:text-secondary"
            >
              <MapPin className="h-4 w-4" />
              <span className="text-sm">No.1 Papaya Street, East Legon</span>
            </a>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">059 222 1997 / 020 511 7212</span>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-accent py-4 transition-colors duration-300 hover:bg-primary">
          <div className="site-container flex items-center justify-center gap-2">
            <Info className="h-5 w-5 shrink-0" />
            <span className="text-sm">Our website uses cookies to improve your experience.</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
