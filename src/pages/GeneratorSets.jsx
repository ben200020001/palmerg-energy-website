import React from "react";
import { motion } from "framer-motion";
import { Zap, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { productsSectionItems } from "@/data/productsSectionItems";
import { publicAsset } from "@/utils/publicAsset";

const generatorHeroImage =
  productsSectionItems.find((p) => p.link === "/GeneratorSets")?.image ??
  publicAsset("/images/products/fuel-tankers-haulage.jpeg");

export default function GeneratorSets() {
  return (
    <div className="site-page">
      <Header />

      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="site-container my-1">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Generator sets (10 kVA – 1500 kVA)</h1>
          <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">
              Products &amp; services
            </Link>
            <span>/</span>
            <span>Generator sets</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Products
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Power from 10 kVA to 1500 kVA
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Palmerg offers generator sets spanning a wide range — from compact units suitable for shops and offices up
                to large industrial packages for factories, estates, and critical infrastructure. Selecting the right kVA,
                fuel strategy, and maintenance approach helps you avoid downtime and control operating costs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need standby backup, prime power on a project site, or a phased rollout across locations, our
                team can align equipment options with your load profile and timelines, consistent with our focus on
                quality products and dependable service in Ghana&apos;s energy sector.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Range coverage from smaller sets through high-capacity industrial gensets",
                  "Application support: commercial, industrial, and institutional users",
                  "Advice on sizing, deployment, and integration with your operations",
                  "Aligned with Palmerg’s broader downstream and logistics capabilities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/Contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Zap className="w-4 h-4" />
                Enquire about generator sets
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border"
            >
              <img
                src={generatorHeroImage}
                alt="Industrial generator set"
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
