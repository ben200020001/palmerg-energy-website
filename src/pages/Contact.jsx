import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterLocationBar from "@/components/FooterLocationBar";
import { MapPin, Phone, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", address: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Send failed");

      setSubmitted(true);
      setForm({ name: "", email: "", address: "", phone: "", subject: "", message: "" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Map Section - Full width, matches Viggo proportions */}
      <div className="w-full pt-[120px]">
        <iframe
          title="Palmerg Energy Locations"
          src="https://www.google.com/maps?q=No.1+Papaya+Street,+East+Legon&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" className="mt-16 mb-6" />
        
      </div>

      {/* Contact Us Badge */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4">→ Contact Us</span>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">Get in touch with us.</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Please let us know if you have a question, want to leave a comment, or would like further information about Palmerg Energy & Resources Limited.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Form */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Get in touch</h2>

              {submitted ?
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600 text-sm">Thank you for reaching out. We'll respond within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-primary text-sm underline">Send another message</button>
                </div> :

              <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
                  
                    <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
                  
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="Your Address"
                    className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
                  
                    <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
                  
                  </div>
                  <input
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
                
                  <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none" />
                
                  
                
                  <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-semibold"
                  disabled={sending}>
                  
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              }
            </div>

            {/* Right - Contact Info */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Do you want to know more or contact our sales department?
              </h2>
              
              <div className="space-y-8">
                {/* Chat with us */}
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Chat With us</h3>
                  <p className="text-muted-foreground text-sm mb-3">You can call us or WhatsApp us at</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-foreground">
                      <Phone className="w-4 h-4 text-primary" />
                      <a href="tel:+233594774032" className="hover:text-primary transition-colors">059 477 4032</a>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Phone className="w-4 h-4 text-primary" />
                      <a href="tel:+233205117212" className="hover:text-primary transition-colors">020 511 7212</a>
                    </div>
                  </div>
                </div>

                {/* Send us an email */}
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Send us an email</h3>
                  <p className="text-muted-foreground text-sm mb-3">Our team is committed to responding promptly to your inquiries.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-foreground">
                      <Mail className="w-4 h-4 text-primary" />
                      <a href="mailto:info@palmergenergy.com" className="hover:text-primary transition-colors">info@palmergenergy.com</a>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Mail className="w-4 h-4 text-primary" />
                      <a href="mailto:graham@palmergenergy.com" className="hover:text-primary transition-colors">graham@palmergenergy.com</a>
                    </div>
                    
                  </div>
                </div>

                {/* Visit the Knowledge Base */}
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Visit the Knowledge Base</h3>
                  <p className="text-muted-foreground text-sm mb-3">Have any questions? Find all answers on our FAQ section.</p>
                  <a href="/Faqs" className="text-primary hover:underline text-sm font-medium">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterLocationBar />

      <Footer />
    </div>);

}