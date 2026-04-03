import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Genora Automotive Stations & Quality Fuel",
    category: "Fueling",
    description: "Genora Energy Limited is your preferred energy partner across Ghana. We offer high-quality automotive fuels and refined Genora products that power your journey across the continent.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/1b585e164_generated_image.png",
    link: "/FuelingStations",
  },
  {
    title: "Genora Prestige",
    category: "Premium",
    description: "Our world-class Genora petroleum products are the heart of excellence. From Genora petrol to diesel, our refinement and innovative process makes every mile count in a cleaner, more efficient, and more reliable way.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/91512fa5b_generated_image.png",
    link: "/GenoraPrestige",
  },
  {
    title: "Genora Engine Oils & Lubricants",
    category: "Products",
    description: "Genora oils are more than just lubricants — they are the shield against engine wear and tear, ensuring that your vehicles operate at their peak performance levels with superior Genora protection and reliability in all conditions.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/60d23efae_generated_image.png",
    link: "/EngineOils",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </div>
                </div>
                <CardContent className="flex-1 p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link to={product.link}>
                    <Button variant="link" className="p-0 h-auto text-primary font-semibold group/btn">
                      Keep Reading
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}