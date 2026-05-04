import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterLocationBar from "@/components/FooterLocationBar";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What products does Palmerg Energy supply?",
    answer: "Palmerg Energy supplies a wide range of petroleum products including petrol, diesel, LPG, lubricants, and engine oils to both retail and bulk customers across Ghana."
  },
  {
    question: "Where are your fueling stations located?",
    answer: "Our fueling stations are located across Ghana. You can use the 'Locate our stations' feature on our website to find the nearest Palmerg Energy station to you."
  },
  {
    question: "Do you offer bulk fuel supply services?",
    answer: "Yes, we offer bulk fuel supply services to businesses, mining companies, construction firms, and other large-scale consumers. Please contact our sales team for pricing and logistics."
  },
  {
    question: "How long does a typical fuel delivery engagement last?",
    answer: "Delivery timelines depend on the volume and location. Our logistics team will provide a detailed schedule upon confirmation of your order. We are committed to prompt and reliable delivery."
  },
  {
    question: "How do you handle client information and sensitive data?",
    answer: "We take data privacy very seriously. All client information is handled with strict confidentiality and in compliance with applicable data protection regulations. We do not share your information with third parties without your consent."
  },
  {
    question: "Can you share any client testimonials or case studies?",
    answer: "Yes! We have worked with numerous satisfied clients across various industries. Please reach out to us directly and we will be happy to share relevant case studies and testimonials."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a variety of payment methods including mobile money (MTN MoMo, Vodafone Cash, AirtelTigo Money), bank transfers, and major credit/debit cards for seamless transactions."
  },
  {
    question: "How can I contact Palmerg Energy for support?",
    answer: "You can reach us by phone at 0594774032, by email at info@palmergenergy.com, or by visiting our office at No.1 Papaya Street, East Legon, Accra."
  }
];

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="font-semibold text-sm text-foreground pr-4">{faq.question}</span>
        {open ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Faqs() {
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="pt-[140px] pb-8 bg-muted/40 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-2">Faqs</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/Home" className="hover:text-primary transition-colors">Home</Link>
            <span>›</span>
            <span>Faqs</span>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-16 px-4 bg-primary/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6">✦ Have any Questions? We are here to assist you.</span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              {leftFaqs.map((faq, i) => <FaqItem key={i} faq={faq} />)}
            </div>
            <div className="space-y-4 md:mt-16">
              {rightFaqs.map((faq, i) => <FaqItem key={i} faq={faq} />)}
            </div>
          </div>
        </div>
      </section>

      <FooterLocationBar />

      <Footer />
    </div>
  );
}