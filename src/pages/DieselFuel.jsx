import React from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterLocationBar from "@/components/FooterLocationBar";
import { Link } from "react-router-dom";
import { resolvePublicPath } from "@/config/siteMedia";

const HERO_IMAGE = resolvePublicPath("/images/products/diesel-fueling.png");

export default function DieselFuel() {
  return (
    <div className="site-page">
      <Header />

      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="site-container my-1">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Diesel fuel</h1>
          <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">
              Products &amp; services
            </Link>
            <span>/</span>
            <span>Diesel fuel</span>
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
                Diesel built for haulage, buses, and industry
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Palmerg diesel is aimed at operators who need dependable power: long-haul trucks, public transport,
                generators, and on-site machinery. We emphasize product integrity from receipt through dispensing so your
                equipment runs with fewer surprises.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Whether you manage a fleet or run agricultural and construction assets, our team can discuss how Palmerg
                supply fits your schedule and volume needs across Ghana.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For petrol-engine vehicles, see{" "}
                <Link to="/Gasoline" className="text-primary font-semibold hover:underline">
                  gasoline
                </Link>
                . For bulk and logistics, explore{" "}
                <Link to="/FuelTankersHaulage" className="text-primary font-semibold hover:underline">
                  fuel tankers &amp; haulage
                </Link>
                .
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Heavy-duty and commercial transport applications",
                  "Suited for industrial and off-road equipment where diesel is specified",
                  "Consistent handling aligned with Palmerg operational standards",
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
                  Bulk &amp; fleet enquiries
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border"
            >
              <img src={HERO_IMAGE} alt="Diesel fueling at a service station" className="w-full h-[420px] md:h-[520px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <FooterLocationBar />

      <Footer />
    </div>
  );
}
