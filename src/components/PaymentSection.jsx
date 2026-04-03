import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

export default function PaymentSection() {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative">
            
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/3bed9631f_generated_image.png"
                alt="Mobile Money Payment"
                className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-2xl">Mobile Money & Card Payments</h3>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded text-sm font-semibold">MTN Mobile Money</div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded text-sm font-semibold">Telecel Cash</div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded text-sm font-semibold">Visa</div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded text-sm font-semibold">Mastercard</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6">
            
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
                Pay Your Way at <span className="text-primary">Genora</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Experience seamless transactions at all Genora Energy stations with multiple payment options designed for your convenience.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Instant Processing</h4>
                  <p className="text-muted-foreground text-sm">All transactions are processed instantly with secure encryption</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Multiple Options</h4>
                  <p className="text-muted-foreground text-sm">Cash, mobile money, or card — choose what works best for you</p>
                </div>
              </div>
            </div>

            <Link to="/Services">
              <Button size="lg" className="bg-primary text-primary-foreground mt-2 pt-2 pr-8 pb-2 pl-8 text-sm font-semibold rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-primary/90 h-10">
                Learn More About Genora Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>);

}