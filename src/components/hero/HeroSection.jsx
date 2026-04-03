import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import TelemetryOverlay from "./TelemetryOverlay";

export default function HeroSection({ heroImage }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-obsidian flex items-center justify-center"
      aria-label="Hero section"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          x: mousePos.x * 10,
          y: mousePos.y * 10,
        }}
        transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/40 to-obsidian z-10" />

      {/* Horizontal strata lines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[20, 35, 55, 75, 90].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-steel/20"
            style={{ top: `${pos}%` }}
            animate={{ x: mousePos.x * (10 + i * 5) }}
            transition={{ type: "tween", duration: 1.2, ease: "easeOut" }}
          />
        ))}
      </div>

      <TelemetryOverlay />

      {/* Main heading */}
      <div className="relative z-20 text-center px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[10px] md:text-xs text-cyan tracking-[0.3em] uppercase mb-6 md:mb-8">
            Global Energy Solutions
          </p>
          <h1
            className="font-heading font-black text-foreground leading-[0.85] tracking-tighter"
            style={{ fontSize: "clamp(3rem, 14vw, 12rem)" }}
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: `${mousePos.x * 3}px ${mousePos.y * 3}px 30px rgba(245,158,11,0.15)`,
              }}
              transition={{ type: "tween", duration: 0.6 }}
            >
              APEX
            </motion.span>
          </h1>
          <h2
            className="font-heading font-light text-muted-foreground leading-[0.85] tracking-tighter mt-1"
            style={{ fontSize: "clamp(1.5rem, 5vw, 4.5rem)" }}
          >
            ENERGY GROUP
          </h2>
          <p className="font-mono text-[11px] md:text-sm text-steel mt-6 md:mt-10 tracking-wide max-w-md mx-auto">
            Extracting precision from the earth's core — powering the future of global infrastructure.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-mono text-[9px] text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}