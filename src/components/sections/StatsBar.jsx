import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "47", label: "Countries", suffix: "+" },
  { value: "2.4", label: "Million bbl/day", suffix: "M" },
  { value: "12,400", label: "Miles of Pipeline", suffix: "" },
  { value: "99.7", label: "Operational Uptime", suffix: "%" },
];

export default function StatsBar() {
  return (
    <section className="relative bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="py-10 md:py-16 text-center"
            >
              <span className="font-heading font-black text-3xl md:text-5xl text-foreground">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span>
              </span>
              <span className="block font-mono text-[10px] text-steel tracking-widest uppercase mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}