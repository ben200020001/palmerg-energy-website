import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterLocationBar from "@/components/FooterLocationBar";
import { Link } from "react-router-dom";
import { PALMERG } from "@/assets/palmerg";
import { resolvePublicPath } from "@/config/siteMedia";

const services = [
{
  title: "Nationwide Access to Quality Fuel",
  description: "With a growing network of 20 strategically located stations across Ghana, Palmerg Energy ensures premium fuel is always within reach for every motorist.",
  image: PALMERG.heroFillingStation,
  category: "Services",
  link: "/NationwideFuel"
},
{
  title: "Palmerg Haulage",
  description: "We provide tailored fuel supply solutions for businesses of all sizes. From transportation companies to industrial clients, our haulage services ensure timely delivery.",
  image: PALMERG.haulage,
  category: "Services",
  link: "/PalmergHaulage"
},
{
  title: "Engine Oils & Lubricants",
  description: "Explore our range of high-performance engine oils and lubricants designed for cars, motorcycles, trucks, and heavy machinery. Quality you can trust.",
  image: PALMERG.oils,
  category: "Products",
  link: "/EngineOils"
},
{
  title: "LPG & Gas Services",
  description: "Safe, reliable LPG supply for homes, restaurants, and industries. Our certified gas stations offer convenient cylinder refilling and bulk gas supply solutions.",
  image: PALMERG.lpg,
  category: "Services",
  link: "/LPGServices"
},
{
  title: "Bulk Fuel Supply",
  description: "Reliable bulk fuel supply for mining companies, construction firms, agricultural enterprises, and government institutions. Our depots ensure seamless large-volume operations.",
  image: PALMERG.bulk,
  category: "Services",
  link: "/BulkFuelSupply"
},
{
  title: "Salt Mining & Export",
  description: "Large-scale salt mining operations with advanced extraction and processing capabilities, serving both local and international markets with consistent quality.",
  image: PALMERG.salt,
  category: "Products",
  link: "/SaltMining"
},
{
  title: "Renewable Energy",
  description:
    "Solar and clean-energy pathways for businesses and communities — practical steps toward lower-carbon, resilient power.",
  image: resolvePublicPath("/images/products/renewable-energy.png"),
  category: "Sustainability",
  link: "/RenewableEnergy",
},
{
  title: "Farming",
  description:
    "Fuel, logistics, and partnerships for agriculture — supporting equipment, transport, and productive value chains.",
  image: resolvePublicPath("/images/products/farming.png"),
  category: "Agriculture",
  link: "/Farming",
},
{
  title: "General Goods",
  description:
    "Sourcing and logistics for general merchandise — structured supply aligned with Palmerg’s trading and haulage strengths.",
  image: resolvePublicPath("/images/products/general-goods.png"),
  category: "Trade",
  link: "/GeneralGoods",
}];


export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Services</h1>
          <div className="text-muted-foreground flex items-center gap-2">
            <a href="/Home" className="text-primary hover:text-accent transition-colors">Home</a>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-3">Services</h2>
            <p className="text-muted-foreground">Explore our products and services</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) =>
            <Link key={i} to={service.link} className="group cursor-pointer block">
                <div className="rounded-lg overflow-hidden mb-4 h-52">
                  <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                
                </div>
                <div>
                  <span className="inline-block border border-border text-xs text-muted-foreground px-3 py-1 rounded-full mb-3">
                    {service.category}
                  </span>
                  <h3 className="font-heading font-bold text-base text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{service.description}</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <FooterLocationBar />

      <Footer />
    </div>);

}