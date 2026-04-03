import React from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import InfoBanner from "@/components/InfoBanner";
import ProductsSection from "@/components/ProductsSection";
import PaymentSection from "@/components/PaymentSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";
import { MapPin, Phone, Info } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <InfoBanner />
      <ProductsSection />
      <PaymentSection />
      <LocationsSection />

      {/* Location & Cookie Bar */}
      <div className="flex flex-col md:flex-row text-white">
        <div className="bg-purple-700 flex-1 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=No.1+Papaya+Street,+East+Legon,+Accra,+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
              
              <MapPin className="w-4 h-4" />
              <span className="text-sm">No.1 Papaya Street, East Legon</span>
            </a>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">059 222 1997 / 020 511 7212</span>
            </div>
          </div>
        </div>

        <div className="bg-purple-500 py-4 hover:bg-purple-700 flex-1 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
              <Info className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Our website uses cookies to improve your experience.</span>
            </div>
          </div>
      </div>

      <Footer />
    </div>);

}