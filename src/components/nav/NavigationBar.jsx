import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navItems = [
  { label: "Operations", id: "operations" },
  { label: "Projects", id: "projects" },
  { label: "Technology", id: "technology" },
  { label: "Contact", id: "contact" },
];

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <>
      {/* Top rail */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-obsidian/90 backdrop-blur-md" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-4 md:px-8 h-14 md:h-16">
          <a href="#" className="font-heading font-black text-foreground text-lg tracking-tighter">
            APEX<span className="text-primary">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-mono text-[11px] text-muted-foreground hover:text-foreground tracking-widest uppercase transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Command button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden font-mono text-[10px] text-cyan tracking-widest uppercase border border-cyan/30 px-3 py-1.5 hover:bg-cyan/10 transition-colors"
            aria-label="Open menu"
          >
            CMD
          </button>
        </div>

        {/* Thin accent line */}
        <div className={`h-px w-full transition-opacity duration-500 ${scrolled ? "bg-border opacity-100" : "opacity-0"}`} />
      </nav>

      {/* Full-screen shutter menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                >
                  <span className="font-heading font-black text-4xl md:text-6xl text-foreground tracking-tighter hover:text-primary transition-colors duration-300">
                    {item.label}
                  </span>
                  <span className="block font-mono text-[10px] text-steel tracking-widest mt-1">
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}