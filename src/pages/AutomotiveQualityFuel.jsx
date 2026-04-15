import React from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterLocationBar from "@/components/FooterLocationBar";
import { Link } from "react-router-dom";
import { PALMERG } from "@/assets/palmerg";

export default function AutomotiveQualityFuel() {
  return (
    <div className="site-page">
      <Header />

      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="site-container my-1">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Automotive stations &amp; quality fuel</h1>
          <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">
              Products &amp; services
            </Link>
            <span>/</span>
            <span>Automotive stations</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Fueling
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Retail fuel with Palmerg standards
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Palmerg Energy is your partner for quality automotive fuels and refined products at the pump. We support
                motorists, fleets, and businesses that rely on consistent product quality, fair dispensing practices, and a
                growing retail footprint across Ghana.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Where we manage or support filling stations, we focus on operational discipline — from stock management
                and equipment upkeep to staff training and customer experience — so every visit reflects the Palmerg brand.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This offering connects directly to our vision: to be a key player in the downstream sector through quality
                products and superior services, with community and environmental stewardship in mind.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Quality-focused automotive fuels for everyday and commercial drivers",
                  "Station operations and consultancy where sites need practical improvement",
                  "Nationwide growth aligned with our licensed OMC journey",
                  "Easy next step: find a Palmerg location or explore our station network",
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
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border"
            >
              <img
                src={PALMERG.heroFillingStation}
                alt="Palmerg filling station"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <FooterLocationBar />

      <Footer />
    </div>
  );
}
