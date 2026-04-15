import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { homeProductsSectionItems } from "@/data/productsSectionItems";

export default function ProductsSection() {
  return (
    <section id="products" className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-primary/10 bg-white/85 px-5 py-8 shadow-xl shadow-primary/5 backdrop-blur-sm md:px-10 md:py-12">
        <div className="mb-10 flex flex-col gap-4 md:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-xl border-l-4 border-primary pl-5 text-left">
            <h2 className="font-heading font-bold text-3xl text-foreground md:text-4xl">Products &amp; services</h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Power, fuels, renewable options, agriculture support, and general goods — with the same Palmerg focus on quality
              and dependable service.
            </p>
          </div>
          <p className="text-xs font-medium uppercase tracking-widest text-primary/80 lg:text-right">Palmerg Energy</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {homeProductsSectionItems.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Link
                to={product.link}
                className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300">
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
                    <span className="inline-flex items-center p-0 h-auto text-primary font-semibold text-sm">
                      Keep reading
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center border-t border-border/60 pt-10 md:mt-12 md:pt-12">
          <Button asChild size="lg" className="font-semibold">
            <Link to="/Services">
              View all products &amp; services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
