import React from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Fuel, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FuelingStations() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Automotive Stations & Quality Fuel</h1>
          <div className="text-muted-foreground flex items-center gap-2">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">Products & Services</Link>
            <span>/</span>
            <span>Automotive Stations</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Fueling</span>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6 leading-tight">
                Your Preferred Energy Partner Across Ghana
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Genora Energy Limited is your preferred energy partner across Ghana. We offer high-quality automotive fuels
                and refined Genora products that power your journey across the continent. With over 19+ strategically located
                stations nationwide, we ensure you're never far from premium fuel.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our stations are equipped with modern dispensing technology, trained attendants, and strict quality control
                measures — giving you confidence in every litre you pump.
              </p>
              <Link to="/Stations">
                <Button size="lg" className="font-semibold">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find a Station Near You
                </Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/1b585e164_generated_image.png"
                  alt="Genora Fuel Station"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="font-heading font-bold text-3xl text-center mb-12">What We Offer</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Premium Petrol", desc: "High-octane petrol designed for optimal engine performance and fuel efficiency." },
              { title: "Quality Diesel", desc: "Ultra-low sulphur diesel for heavy-duty vehicles and commercial fleets." },
              { title: "LPG Gas", desc: "Safe, clean, and affordable liquefied petroleum gas for domestic and commercial use." },
              { title: "19+ Stations Nationwide", desc: "Strategically located across multiple regions from Western North to Upper West." },
              { title: "Quality Assurance", desc: "Every litre undergoes rigorous quality control to meet NPA standards." },
              { title: "Trained Attendants", desc: "Professional, courteous staff dedicated to excellent customer service." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
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