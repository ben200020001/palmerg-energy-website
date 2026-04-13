import React from "react";
import { motion } from "framer-motion";
import { Truck, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { PALMERG } from "@/assets/palmerg";

export default function PalmergHaulage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Palmerg Haulage</h1>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/Services" className="text-primary hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span>Palmerg Haulage</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Services</span>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6 leading-tight">
                Reliable Fuel Delivery, <span className="text-primary">On Your Schedule</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Palmerg Haulage provides tailored fuel supply solutions for businesses of all sizes. From transportation companies to industrial clients, our haulage services ensure timely, safe, and accurate delivery of petroleum products directly to your site.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our fleet of modern tankers is GPS-tracked, well-maintained, and operated by experienced drivers who understand the critical nature of fuel logistics.
              </p>
              <ul className="space-y-3 mb-8">
                {["GPS-tracked modern tanker fleet", "On-time delivery guarantee", "Customized supply schedules", "Serving mining, construction & agriculture", "Fully licensed haulage operations"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/Contact">
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                  <Truck className="w-4 h-4" /> Request a Haulage Quote
                </button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={PALMERG.haulage}
                alt="Palmerg Haulage"
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
