import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function FooterSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Message sent. Our team will reach out shortly.");
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <footer id="contact" className="relative min-h-screen bg-obsidian flex flex-col">
      {/* Main contact area */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8 w-full py-24 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] text-amber tracking-[0.3em] uppercase">
            04 // Contact
          </span>
          <h2 className="font-heading font-black text-5xl md:text-8xl lg:text-[9rem] text-foreground tracking-tighter mt-4 leading-[0.85]">
            Let's Build<br />
            <span className="text-primary">Together</span>
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
        >
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-steel tracking-widest uppercase" htmlFor="name">
              Name
            </label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-transparent border-border/50 text-foreground font-body text-base h-12 focus:border-cyan rounded-none"
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-steel tracking-widest uppercase" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-transparent border-border/50 text-foreground font-body text-base h-12 focus:border-cyan rounded-none"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="md:col-span-2 space-y-1">
            <label className="font-mono text-[10px] text-steel tracking-widest uppercase" htmlFor="message">
              Message
            </label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-transparent border-border/50 text-foreground font-body text-base focus:border-cyan rounded-none min-h-[120px]"
              placeholder="Tell us about your project or inquiry..."
              required
            />
          </div>
          <div className="md:col-span-2">
            <Button
              type="submit"
              disabled={sending}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-[11px] tracking-widest uppercase px-8 py-6 rounded-none group"
            >
              {sending ? "Sending..." : "Send Message"}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.form>
      </div>

      {/* Seismic wave footer */}
      <div className="relative h-32 md:h-48 overflow-hidden">
        {/* Seismic waves */}
        <svg
          className="absolute bottom-0 w-[200%] h-full opacity-20"
          style={{ animation: "seismicWave 8s linear infinite" }}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C120,20 240,100 360,60 C480,20 600,100 720,60 C840,20 960,100 1080,60 C1200,20 1320,100 1440,60"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1"
          />
          <path
            d="M0,70 C120,40 240,100 360,70 C480,40 600,100 720,70 C840,40 960,100 1080,70 C1200,40 1320,100 1440,70"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="0.5"
          />
        </svg>

        <svg
          className="absolute bottom-0 w-[200%] h-full opacity-10"
          style={{ animation: "seismicWave 12s linear infinite reverse" }}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C180,90 360,10 540,50 C720,90 900,10 1080,50 C1260,90 1440,10 1440,50"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="1"
          />
        </svg>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border/30 px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="font-mono text-[9px] text-steel tracking-widest">
            © 2026 APEX ENERGY GROUP. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-[9px] text-steel hover:text-foreground tracking-widest transition-colors">
              PRIVACY
            </a>
            <a href="#" className="font-mono text-[9px] text-steel hover:text-foreground tracking-widest transition-colors">
              TERMS
            </a>
            <a href="#" className="font-mono text-[9px] text-steel hover:text-foreground tracking-widest transition-colors">
              ESG REPORT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}