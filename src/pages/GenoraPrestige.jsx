import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GenoraPrestige() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Genora Prestige</h1>
          <div className="text-muted-foreground flex items-center gap-2">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">Products & Services</Link>
            <span>/</span>
            <span>Genora Prestige</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-secondary/20 text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Premium</span>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6 leading-tight">
                World-Class Petroleum Products — The Heart of Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Genora Prestige represents the pinnacle of our petroleum product line. From Genora petrol to diesel,
                our advanced refinement and innovative processes make every mile count — in a cleaner, more efficient,
                and more reliable way.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Crafted for the discerning driver and performance-focused operator, Genora Prestige fuel delivers
                superior combustion efficiency, reduced engine deposits, and a noticeably smoother driving experience.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/91512fa5b_generated_image.png"
                  alt="Genora Prestige"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="font-heading font-bold text-3xl text-center mb-12">The Genora Prestige Difference</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Advanced Refining Process", desc: "Our state-of-the-art refining process removes impurities for a cleaner, purer fuel product." },
              { title: "Engine Protection", desc: "Special additives that actively clean and protect your engine internals over time." },
              { title: "Higher Octane Rating", desc: "Improved octane levels for better acceleration, less knocking, and more power." },
              { title: "Fuel Efficiency", desc: "Get more kilometres per litre with Genora Prestige's optimised combustion formula." },
              { title: "Reduced Emissions", desc: "Lower carbon output per combustion cycle — better for your engine and the environment." },
              { title: "Available Nationwide", desc: "Genora Prestige products are available at all our 19+ stations across Ghana." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <Star className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-heading font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}