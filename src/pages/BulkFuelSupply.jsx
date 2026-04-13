import React from "react";
import { motion } from "framer-motion";
import { Package, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function BulkFuelSupply() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Bulk Fuel Supply</h1>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span>Bulk Fuel Supply</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Services</span>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6 leading-tight">
                Large-Volume Fuel Supply <span className="text-primary">For Your Business</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Palmerg Energy is a preferred bulk fuel supplier for mining companies, construction firms, agricultural enterprises, and government institutions. Our depots in the Western North and Ashanti regions ensure seamless supply chain operations for large-volume customers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We offer flexible contract arrangements, dedicated account management, and priority service to ensure your operations never run dry.
              </p>
              <ul className="space-y-3 mb-8">
                {["4 million+ litres distributed monthly", "Dedicated account managers", "Flexible supply contracts", "Western North & Ashanti depots", "Mining, construction & agric sectors"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/Contact">
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                  <Package className="w-4 h-4" /> Get a Bulk Supply Quote
                </button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/960b6858c_generated_image.png"
                alt="Bulk Fuel Supply"
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