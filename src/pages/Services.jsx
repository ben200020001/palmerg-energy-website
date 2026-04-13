import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { MapPin, Phone, Info } from "lucide-react";

const services = [
{
  title: "Nationwide Access to Quality Fuel",
  description: "With a growing network of over 19 strategically located stations across Ghana, Palmerg Energy ensures premium fuel is always within reach for every motorist.",
  image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/7fe1c4481_generated_image.png",
  category: "Services",
  link: "/NationwideFuel"
},
{
  title: "Palmerg Haulage",
  description: "We provide tailored fuel supply solutions for businesses of all sizes. From transportation companies to industrial clients, our haulage services ensure timely delivery.",
  image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/14263d9b7_generated_image.png",
  category: "Services",
  link: "/PalmergHaulage"
},
{
  title: "Engine Oils & Lubricants",
  description: "Explore our range of high-performance engine oils and lubricants designed for cars, motorcycles, trucks, and heavy machinery. Quality you can trust.",
  image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/3ae778b96_generated_image.png",
  category: "Products",
  link: "/EngineOils"
},
{
  title: "LPG & Gas Services",
  description: "Safe, reliable LPG supply for homes, restaurants, and industries. Our certified gas stations offer convenient cylinder refilling and bulk gas supply solutions.",
  image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/fb69c1547_generated_image.png",
  category: "Services",
  link: "/LPGServices"
},
{
  title: "Bulk Fuel Supply",
  description: "Reliable bulk fuel supply for mining companies, construction firms, agricultural enterprises, and government institutions. Our depots ensure seamless large-volume operations.",
  image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/960b6858c_generated_image.png",
  category: "Services",
  link: "/BulkFuelSupply"
},
{
  title: "Salt Mining & Export",
  description: "Large-scale salt mining operations with advanced extraction and processing capabilities, serving both local and international markets with consistent quality.",
  image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/efa7f7aa0_generated_image.png",
  category: "Products",
  link: "/SaltMining"
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