import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Flame, Ship } from "lucide-react";

const energyTypes = [
  {
    id: "oil",
    label: "Crude Oil",
    icon: Droplets,
    color: "amber",
    metrics: {
      throughput: "2.4M bbl/day",
      pressure: "2,847 PSI",
      temperature: "187°F",
      efficiency: "99.2%",
      destinations: "42 Countries",
      reserves: "18.7B bbl",
    },
    pulseSpeed: "2s",
  },
  {
    id: "gas",
    label: "Natural Gas",
    icon: Flame,
    color: "cyan",
    metrics: {
      throughput: "8.2 BCF/day",
      pressure: "1,420 PSI",
      temperature: "-260°F",
      efficiency: "99.8%",
      destinations: "28 Countries",
      reserves: "42.3 TCF",
    },
    pulseSpeed: "1.2s",
  },
  {
    id: "lng",
    label: "LNG",
    icon: Ship,
    color: "cyan",
    metrics: {
      throughput: "12 MTPA",
      pressure: "890 PSI",
      temperature: "-162°C",
      efficiency: "98.9%",
      destinations: "18 Routes",
      reserves: "38 Cargoes/mo",
    },
    pulseSpeed: "1.6s",
  },
];

export default function FlowCalculator({ bgImage }) {
  const [active, setActive] = useState("oil");
  const current = energyTypes.find((e) => e.id === active);
  const accentClass = current.color === "amber" ? "text-amber" : "text-cyan";
  const borderClass = current.color === "amber" ? "border-amber/30" : "border-cyan/30";
  const bgAccent = current.color === "amber" ? "bg-amber/10" : "bg-cyan/10";

  return (
    <section id="technology" className="relative min-h-screen bg-obsidian py-24 md:py-40 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <span className="font-mono text-[10px] text-cyan tracking-[0.3em] uppercase">
            03 // Flow Technology
          </span>
          <h2 className="font-heading font-black text-4xl md:text-7xl text-foreground tracking-tighter mt-4 leading-[0.9]">
            The Flow<br />Calculator
          </h2>
          <div className="w-16 h-px bg-cyan mt-6" />
        </motion.div>

        {/* Energy type selector */}
        <div className="flex gap-2 md:gap-4 mb-12">
          {energyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActive(type.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 border font-mono text-[11px] tracking-widest uppercase transition-all duration-300 ${
                active === type.id
                  ? `${borderClass} ${bgAccent} ${accentClass}`
                  : "border-border text-muted-foreground hover:border-steel hover:text-foreground"
              }`}
              aria-pressed={active === type.id}
            >
              <type.icon className="w-4 h-4" />
              <span className="hidden md:inline">{type.label}</span>
              <span className="md:hidden">{type.id.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Pipeline visualization + metrics */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Pipeline visualization */}
            <div className={`relative border ${borderClass} p-8 md:p-12 bg-obsidian/50 backdrop-blur-md`}>
              {/* Animated flow bars */}
              <div className="space-y-4 mb-8">
                {[1, 2, 3, 4, 5].map((bar) => (
                  <div key={bar} className="relative h-2 bg-muted/30 overflow-hidden rounded-full">
                    <motion.div
                      className={`absolute inset-y-0 left-0 ${current.color === "amber" ? "bg-amber/60" : "bg-cyan/60"} rounded-full`}
                      style={{
                        animation: `flowPulse ${current.pulseSpeed} ease-in-out infinite`,
                        animationDelay: `${bar * 0.2}s`,
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${60 + bar * 8}%` }}
                      transition={{ duration: 1, delay: bar * 0.1 }}
                    />
                  </div>
                ))}
              </div>

              <div className="text-center">
                <span className={`font-heading font-black text-5xl md:text-7xl ${accentClass}`}>
                  {current.metrics.throughput.split(" ")[0]}
                </span>
                <span className="block font-mono text-[10px] text-steel tracking-widest uppercase mt-2">
                  {current.metrics.throughput.split(" ").slice(1).join(" ")} throughput
                </span>
              </div>

              {/* Corner accents */}
              <div className={`absolute top-0 left-0 w-8 h-8 border-l border-t ${borderClass}`} />
              <div className={`absolute top-0 right-0 w-8 h-8 border-r border-t ${borderClass}`} />
              <div className={`absolute bottom-0 left-0 w-8 h-8 border-l border-b ${borderClass}`} />
              <div className={`absolute bottom-0 right-0 w-8 h-8 border-r border-b ${borderClass}`} />
            </div>

            {/* Metrics panel */}
            <div className="grid grid-cols-2 gap-px bg-border/30">
              {Object.entries(current.metrics).slice(1).map(([key, value], i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-obsidian p-6 md:p-8 group hover:bg-muted/20 transition-colors duration-300"
                >
                  <span className="font-mono text-[9px] text-steel tracking-widest uppercase block mb-3">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className={`font-heading font-bold text-xl md:text-2xl ${accentClass}`}>
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}