import React from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function NationwideFuel() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Nationwide Access to Quality Fuel</h1>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span>Nationwide Fuel</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Services</span>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6 leading-tight">
                Quality Fuel, <span className="text-primary">Everywhere You Go</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a growing network of over 19 strategically located stations across Ghana, Palmerg Energy ensures premium fuel is always within reach for every motorist. From the Western North to the Upper West, and from the Central Region to Ashanti, we've got you covered.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every Palmerg station is staffed with trained professionals and equipped with modern pumping infrastructure to guarantee speed, accuracy, and safety in every transaction.
              </p>
              <ul className="space-y-3 mb-8">
                {["19+ stations nationwide", "Premium petrol and diesel", "Trained and courteous attendants", "Modern pumping equipment", "Safety-compliant facilities"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/Stations">
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Find a Station Near You
                </button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/7fe1c4481_generated_image.png"
                alt="Nationwide Fuel Stations"
                className="w-full h-[480px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}