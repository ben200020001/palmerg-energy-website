import React from "react";
import { motion } from "framer-motion";
import { Sprout, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const HERO_IMAGE = "/images/products/farming.png";

export default function Farming() {
  return (
    <div className="site-page">
      <Header />

      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="site-container my-1">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Farming</h1>
          <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">
              Products &amp; services
            </Link>
            <span>/</span>
            <span>Farming</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Agriculture
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Supporting productive land and supply chains
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Palmerg engages with the agricultural sector through fuel for machinery, logistics for inputs and outputs,
                and selected initiatives that strengthen rural and commercial farming value chains across Ghana.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From diesel for tractors and trucks to coordinated movement of produce, we aim to be a dependable partner
                for growers, aggregators, and agribusinesses that need reliability season after season.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Fuel supply suited to farm equipment and transport",
                  "Logistics thinking aligned with harvest and distribution windows",
                  "Room to explore partnerships with cooperatives and commercial farms",
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
                  <Sprout className="w-4 h-4" />
                  Talk to our team
                </Link>
               
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border"
            >
              <img src={HERO_IMAGE} alt="Agricultural farming landscape" className="w-full h-[420px] md:h-[520px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
