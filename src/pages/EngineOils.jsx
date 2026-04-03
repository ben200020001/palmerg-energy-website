import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EngineOils() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Engine Oils & Lubricants</h1>
          <div className="text-muted-foreground flex items-center gap-2">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">Products & Services</Link>
            <span>/</span>
            <span>Engine Oils & Lubricants</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Products</span>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6 leading-tight">
                More Than Lubricants — A Shield for Your Engine
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Genora oils are more than just lubricants — they are the shield against engine wear and tear, ensuring
                that your vehicles operate at their peak performance levels with superior Genora protection and reliability
                in all conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're running a single vehicle or managing a commercial fleet, Genora Engine Oils are formulated
                to extend engine life, reduce maintenance costs, and keep your machines running at optimal efficiency.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/60d23efae_generated_image.png"
                  alt="Genora Engine Oils"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="font-heading font-bold text-3xl text-center mb-12">Our Lubricants Range</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Engine Oils", desc: "Full synthetic, semi-synthetic, and mineral oils for petrol and diesel engines of all sizes." },
              { title: "Transmission Fluids", desc: "Automatic and manual transmission fluids engineered for smooth gear changes and long service life." },
              { title: "Gear Oils", desc: "Heavy-duty gear lubricants for differentials, gearboxes, and axles in industrial and commercial vehicles." },
              { title: "Hydraulic Oils", desc: "High-performance hydraulic fluids for industrial machinery, agricultural equipment, and construction vehicles." },
              { title: "Grease & Specialities", desc: "Multi-purpose greases and specialty lubricants for industrial, automotive, and marine applications." },
              { title: "Fleet Solutions", desc: "Tailored lubricant packages and bulk supply for commercial fleets and industrial operations nationwide." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <Shield className="w-8 h-8 text-primary mb-4" />
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