import React from "react";
import { motion } from "framer-motion";
import { Package, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { resolvePublicPath } from "@/config/siteMedia";

const HERO_IMAGE = resolvePublicPath("/images/products/general-goods.png");

export default function GeneralGoods() {
  return (
    <div className="site-page">
      <Header />

      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="site-container my-1">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">General goods</h1>
          <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">
              Products &amp; services
            </Link>
            <span>/</span>
            <span>General goods</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Trade &amp; logistics
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Sourcing and movement of general merchandise
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beyond fuels, Palmerg supports clients with general goods linked to our trading and logistics strengths —
                from structured sourcing to dependable handling where our network adds value.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tell us your category, volumes, and timelines; we can explore how our supply discipline and haulage
                capabilities support your procurement and distribution needs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Structured approach to product categories and partner channels",
                  "Coordination with Palmerg haulage and bulk movements where relevant",
                  "Single point of contact through our commercial team",
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
                  <Package className="w-4 h-4" />
                  Request a quote
                </Link>
                <Link
                  to="/FuelTankersHaulage"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Haulage services
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
                alt="General goods warehousing and logistics"
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
