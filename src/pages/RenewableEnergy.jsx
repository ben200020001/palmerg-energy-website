import React from "react";
import { motion } from "framer-motion";
import { Sun, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { resolvePublicPath } from "@/config/siteMedia";

const HERO_IMAGE = resolvePublicPath("/images/products/renewable-energy.png");

export default function RenewableEnergy() {
  return (
    <div className="site-page">
      <Header />

      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="site-container my-1">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Renewable energy</h1>
          <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">
              Products &amp; services
            </Link>
            <span>/</span>
            <span>Renewable energy</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Sustainability
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Cleaner power for the next chapter
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Palmerg recognises the role of renewables alongside traditional energy. We explore solar and complementary
                solutions that support businesses, communities, and industrial sites seeking lower-carbon options and more
                predictable long-term energy costs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you are scoping on-site generation, hybrid setups, or partnerships, our team can discuss how
                renewable-aligned projects fit your location, load profile, and compliance goals in Ghana.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Solar and distributed generation concepts tailored to commercial needs",
                  "Alignment with environmental stewardship in Palmerg’s broader mission",
                  "Practical pathways from enquiry through feasibility and next steps",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/Contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Sun className="w-4 h-4" />
                  Discuss renewables
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
                src={HERO_IMAGE}
                alt="Solar panels and renewable energy"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
