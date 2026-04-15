import React from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import InfoBanner from "@/components/InfoBanner";
import ProductsSection from "@/components/ProductsSection";
import PaymentSection from "@/components/PaymentSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";
import FooterLocationBar from "@/components/FooterLocationBar";
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

      <FooterLocationBar containerClassName="site-container" />

      <Footer />
    </div>
  );
}
