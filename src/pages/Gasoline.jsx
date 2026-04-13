import React from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const HERO_IMAGE = "/images/products/gasoline-fueling.png";

export default function Gasoline() {
  return (
    <div className="site-page">
      <Header />

      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="site-container my-1">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Gasoline</h1>
          <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">
              Products &amp; services
            </Link>
            <span>/</span>
            <span>Gasoline</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Fuel
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Premium gasoline for cars and fleets
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Palmerg supplies gasoline formulated for reliable performance in everyday driving and commercial use. Our
                focus is consistent quality at the pump — whether you fuel at a Palmerg-affiliated station or through our
                growing retail network in Ghana.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We align dispensing, storage, and handling with operational best practices so motorists and fleet
                operators get fuel they can trust for efficiency and engine care.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Looking for diesel for trucks and heavy equipment? See our{" "}
                <Link to="/DieselFuel" className="text-primary font-semibold hover:underline">
                  diesel fuel
                </Link>{" "}
                page — or explore our full{" "}
                <Link to="/AutomotiveQualityFuel" className="text-primary font-semibold hover:underline">
                  automotive &amp; quality fuel
                </Link>{" "}
                offering.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Suited for passenger vehicles and light commercial use",
                  "Quality focus aligned with Palmerg downstream standards",
                  "Available through our retail and partner outlets where applicable",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/Stations"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Find a station
                </Link>
                <Link
                  to="/Contact"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Enquire about supply
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border"
            >
              <img src={HERO_IMAGE} alt="Gasoline fueling at a service station" className="w-full h-[420px] md:h-[520px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
