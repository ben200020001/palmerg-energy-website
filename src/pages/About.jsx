import React, { useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, CheckCircle, ChevronRight, Flame, Zap, Globe, Shield, MapPin, Phone, Info } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { TEAM_MEMBERS } from "@/data/teamMembers";

const coreValues = [
{ icon: Shield, title: "Integrity", description: "We operate with absolute transparency, honesty, and ethical standards in every transaction and relationship." },
{ icon: Flame, title: "Excellence", description: "From fuel quality to customer service, we relentlessly pursue the highest standards across all touchpoints." },
{ icon: Zap, title: "Innovation", description: "We embrace cutting-edge technology and modern practices to deliver smarter, cleaner, and more efficient energy solutions." },
{ icon: Globe, title: "Sustainability", description: "We are committed to responsible environmental stewardship, ensuring our operations benefit both present and future generations." }];


export default function About() {
  const [activeTab, setActiveTab] = useState("mission");
  const teamMembers = TEAM_MEMBERS;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">About Us</h1>
          <div className="text-muted-foreground flex items-center gap-2">
            <a href="/Home" className="text-primary hover:text-accent transition-colors">Home</a>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>

              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Our Overview</span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
               Palmerg Energy & Resources Limited is one of Ghana's fastest-growing downstream petroleum marketing companies, licensed by the National Petroleum Authority (NPA). Founded with a vision to democratize access to quality fuel products, we have expanded to over <strong className="text-foreground">strategically 20 located stations</strong> across multiple regions — from Greater Accra to Western Region to Western North, and from Central Region to Ashanti.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                We pride ourselves on delivering premium petroleum products — petrol, diesel, and LPG — 
                backed by world-class service infrastructure, bulk supply capabilities, and a team of 
                passionate professionals who live and breathe energy.
              </p>

              <div className="border-l-4 border-primary pl-4 mb-8">
                <p className="font-heading font-bold text-sm text-primary uppercase tracking-wider mb-3">Our Core Values</p>
                <ul className="space-y-2">
                  {["Integrity in all operations", "Excellence in service delivery", "Innovation-driven growth", "Safety-first culture", "Community empowerment"].map((v, i) =>
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {v}
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative">

              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/960b6858c_generated_image.png"
                  alt="Palmerg Energy Operations"
                  className="w-full h-[480px] object-cover" />

              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-5 shadow-xl">
                <p className="font-heading font-black text-4xl">19+</p>
                <p className="text-white/80 text-sm font-medium">Stations Nationwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision Tabs Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image with tabs overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative">

              <div className="rounded-xl overflow-hidden shadow-xl h-[420px]">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/fb69c1547_generated_image.png"
                  alt="Palmerg Mission"
                  className="w-full h-full object-cover" />

              </div>
              {/* Tab Buttons Overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {["mission", "vision", "achievements"].map((tab) =>
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab ?
                  "bg-primary text-white shadow-lg" :
                  "bg-white/80 text-primary hover:bg-white"}`
                  }>

                    {tab === "mission" ? "Our Mission" : tab === "vision" ? "Our Vision" : "Achievements"}
                  </button>
                )}
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}>

              {activeTab === "mission" &&
              <div>
                  <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">
                    🎯 Our Mission
                  </span>
                  <h3 className="font-heading font-bold text-3xl text-foreground mb-5">
                    Powering Ghana's Progress, One Station at a Time
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Palmerg Energy & Resources Limited's mission is to be the most trusted, most accessible, and most innovative fuel 
                    marketing company in Ghana — providing clean, quality petroleum products to every corner of the nation 
                    while operating with uncompromising integrity and environmental responsibility.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to empowering communities, enabling businesses, and fueling the economic engine of 
                    Ghana through consistent product availability, competitive pricing, and service excellence.
                  </p>
                </div>
              }
              {activeTab === "vision" &&
              <div>
                  <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">
                    👁 Our Vision
                  </span>
                  <h3 className="font-heading font-bold text-3xl text-foreground mb-5">
                    West Africa's Most Respected Energy Brand by 2030
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Palmerg Energy & Resources Limited envisions a future where it stands as the benchmark for downstream petroleum excellence 
                    across West Africa — a company synonymous with quality, reliability, and innovation in energy services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our vision extends beyond fuel — we see Palmerg as a transformative force in Ghana's energy landscape, 
                    pioneering sustainable practices and driving forward the nation's energy independence.
                  </p>
                </div>
              }
              {activeTab === "achievements" &&
              <div>
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">
                    🏆 Achievements
                  </span>
                  <h3 className="font-heading font-bold text-3xl text-foreground mb-5">
                    A Track Record That Speaks Volumes
                  </h3>
                  <ul className="space-y-3">
                    {[
                  "NPA Licensed & Fully Compliant Downstream Operator",
                  "19+ Operational Stations across 6 Regions of Ghana",
                  "Bulk fuel supply partner for commercial & industrial clients",
                  "4 Million+ litres distributed monthly across our network",
                  "200+ daily customers served with premium Palmerg products",
                  "99% station uptime through robust maintenance protocols"].
                  map((item, i) =>
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                  )}
                  </ul>
                </div>
              }
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>

              <span className="inline-block bg-secondary/20 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Our Story</span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                A Journey of<br />
                <span className="text-primary">Innovation</span><br />
                and Growth
              </h2>
              <p className="text-muted-foreground text-sm italic mb-6">From Humble Beginnings to Nationwide Presence</p>
              <p className="text-muted-foreground leading-relaxed">
                What began as a bold entrepreneurial dream has grown into one of Ghana's most dynamic energy companies. 
                Palmerg Energy & Resources Limited was built on a simple but powerful belief: that every Ghanaian deserves access to 
                quality fuel at fair prices, delivered with a smile.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8">

              <div>
                <h4 className="font-heading font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  License and Accreditation
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Palmerg Energy is fully licensed by the National Petroleum Authority (NPA) of Ghana — 
                  a testament to our commitment to legal compliance, product quality, and operational 
                  transparency. We meet and exceed all regulatory requirements as a downstream petroleum 
                  marketing company, giving our partners and customers complete confidence in every litre 
                  we deliver.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Bulk & Large-Scale Operations
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Beyond retail, Palmerg Energy is a preferred bulk fuel supplier for mining companies, 
                  construction firms, agricultural enterprises, and government institutions. Our bulk 
                  depots in the Western North and Ashanti regions ensure seamless supply chain operations 
                  for large-volume customers across Ghana.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/69b1a3a17a4d9f8b0154b3b3/ca0496e01_Gemini_Generated_Image_6d8u3s6d8u3s6d8u-removebg-preview.png"
                    alt="NPA"
                    className="h-8 w-auto opacity-70"
                    onError={(e) => e.target.style.display = 'none'} />

                  <span className="text-xs text-muted-foreground italic">Licensed by the National Petroleum Authority, Ghana</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14">

            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">What Drives Us</span>
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The unshakeable principles that define who we are and how we serve</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-5 transition-colors">
                  <value.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <span className="inline-block bg-secondary/20 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">The People Behind The Brand</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              Meet <span className="text-primary">everyone</span> who<br />
              made this <span className="text-primary">possible.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Meet the brilliant and passionate people from all over who drive our company forward every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.length === 0 ?
            <div className="col-span-full text-center py-12 text-muted-foreground">
                No team members added yet.
              </div> :
            teamMembers.map((member, i) =>
            <Link
              key={i}
              to={`/TeamMember?id=${member.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group border border-border/50 cursor-pointer h-full">

                <div className="relative mb-4 mx-auto w-24 h-24">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all" />
                  <div className="w-full h-full rounded-full border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={member.photo_url || "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/ca0496e01_Gemini_Generated_Image_6d8u3s6d8u3s6d8u-removebg-preview.png"}
                      alt={member.name}
                      className="w-full h-full object-cover" />

                  </div>
                </div>
                <h4 className="font-heading font-bold text-sm text-foreground leading-tight mb-1 text-center group-hover:text-primary transition-colors">{member.name}</h4>
                <p className="text-primary text-xs font-semibold mb-3 text-center">{member.role}</p>
                <p className="text-muted-foreground text-xs text-center leading-relaxed line-clamp-3">{member.description}</p>
              </motion.div>
            </Link>
            )}
          </div>


        </div>
      </section>

      {/* Location & Cookie Bar */}
      <div className="flex flex-col md:flex-row text-white">
        <div className="bg-purple-700 flex-1 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=No.1+Papaya+Street,+East+Legon,+Accra,+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
              
              <MapPin className="w-4 h-4" />
              <span className="text-sm">No.1 Papaya Street, East Legon</span>
            </a>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">059 222 1997 / 020 511 7212</span>
            </div>
          </div>
        </div>

        <div className="bg-purple-500 py-4 hover:bg-purple-700 flex-1 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
            <Info className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">Our website uses cookies to improve your experience.</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>);

}