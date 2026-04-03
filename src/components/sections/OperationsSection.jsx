import React from "react";
import { motion } from "framer-motion";
import { Droplets, Flame, Ship, Gauge } from "lucide-react";

const operations = [
  {
    icon: Droplets,
    title: "Upstream Exploration",
    stat: "2.4M",
    statLabel: "Barrels/Day",
    description: "Deep-water and onshore exploration across 14 basins worldwide, utilizing advanced seismic imaging and AI-driven reservoir analysis.",
    accent: "cyan",
  },
  {
    icon: Flame,
    title: "Refining & Processing",
    stat: "847K",
    statLabel: "bbl Capacity",
    description: "State-of-the-art refinery operations converting crude into high-value products with 99.7% operational uptime.",
    accent: "amber",
  },
  {
    icon: Ship,
    title: "LNG Transport",
    stat: "38",
    statLabel: "Active Vessels",
    description: "Global liquefied natural gas logistics network spanning 42 trade routes with real-time fleet monitoring systems.",
    accent: "cyan",
  },
  {
    icon: Gauge,
    title: "Pipeline Networks",
    stat: "12,400",
    statLabel: "Miles of Pipeline",
    description: "Transcontinental pipeline infrastructure with automated pressure management and predictive maintenance.",
    accent: "amber",
  },
];

export default function OperationsSection() {
  return (
    <section id="operations" className="relative bg-obsidian py-24 md:py-40 overflow-hidden">
      {/* Strata background lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[15, 40, 60, 85].map((pos, i) => (
          <div key={i} className="absolute left-0 right-0 h-px bg-border/30" style={{ top: `${pos}%` }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-[10px] text-cyan tracking-[0.3em] uppercase">
            01 // Core Operations
          </span>
          <h2 className="font-heading font-black text-4xl md:text-7xl text-foreground tracking-tighter mt-4 leading-[0.9]">
            Engineered<br />for Scale
          </h2>
          <div className="w-16 h-px bg-primary mt-6" />
        </motion.div>

        {/* Operations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/30">
          {operations.map((op, i) => (
            <motion.div
              key={op.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-obsidian p-8 md:p-12 group hover:bg-muted/30 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <op.icon
                  className={`w-6 h-6 ${op.accent === "cyan" ? "text-cyan" : "text-amber"}`}
                />
                <span className="font-mono text-[10px] text-steel">0{i + 1}</span>
              </div>

              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground tracking-tight mb-3">
                {op.title}
              </h3>

              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8" style={{ lineHeight: "1.6" }}>
                {op.description}
              </p>

              <div className="border-t border-border/50 pt-6">
                <span
                  className={`font-heading font-black text-3xl md:text-4xl ${
                    op.accent === "cyan" ? "text-cyan" : "text-amber"
                  }`}
                >
                  {op.stat}
                </span>
                <span className="block font-mono text-[10px] text-steel tracking-widest uppercase mt-1">
                  {op.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}