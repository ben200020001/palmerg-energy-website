import React from "react";
import { motion } from "framer-motion";
import { Globe, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function SaltMining() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Salt Mining & Export</h1>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span>Salt Mining & Export</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Products</span>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6 leading-tight">
                Natural Resources, <span className="text-primary">Global Reach</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Genora Energy's salt mining division operates large-scale extraction and processing facilities, serving both local and international markets with consistently high-quality salt products. Our operations meet international food-grade and industrial-grade standards.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From coastal harvesting to export-ready packaging, we manage the entire value chain with precision and environmental responsibility.
              </p>
              <ul className="space-y-3 mb-8">
                {["Large-scale coastal mining operations", "Food-grade & industrial-grade salt", "Export to regional & international markets", "Advanced extraction & processing", "Environmentally responsible practices"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/Contact">
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Enquire About Salt Export
                </button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/efa7f7aa0_generated_image.png"
                alt="Salt Mining & Export"
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