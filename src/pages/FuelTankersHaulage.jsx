import React from "react";
import { motion } from "framer-motion";
import { Truck, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { publicAsset } from "@/utils/publicAsset";

export default function FuelTankersHaulage() {
  return (
    <div className="site-page">
      <Header />

      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="site-container my-1">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Fuel tankers &amp; haulage</h1>
          <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">
              Products &amp; services
            </Link>
            <span>/</span>
            <span>Fuel tankers &amp; haulage</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Logistics
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Bulk movement you can plan on
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Palmerg Energy &amp; Resources Limited provides fuel tankers and haulage services for clients who need
                dependable bulk petroleum logistics across Ghana. Whether you are moving product between depots, serving
                commercial yards, or supporting project sites, our focus is on safe handling, clear scheduling, and
                consistent delivery performance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our haulage capability sits alongside our downstream brokerage and station support — so supply chain,
                operations, and road transport can be discussed with one partner that understands the full picture.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Dedicated and contracted haulage options for commercial fuel movements",
                  "Modern tanker assets operated with safety and compliance in mind",
                  "Coordination with bulk supply schedules and site requirements",
                  "Support for industrial, logistics, and energy-sector customers",
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
                  <Truck className="w-4 h-4" />
                  Discuss haulage needs
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
                src={publicAsset("/images/products/haulage-palmerg-branded.png")}
                alt="Palmerg branded fuel tanker"
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
