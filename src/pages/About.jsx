import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Compass, BadgeCheck, Handshake, Building2, Leaf, FileDown } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterLocationBar from "@/components/FooterLocationBar";
import { Link } from "react-router-dom";
import { TEAM_MEMBERS } from "@/data/teamMembers";

const coreValues = [
  { icon: Compass, title: "Future-Focused Planning", description: "We don't just react to the present; we prepare for the future. Anticipating what's next is how we stay ahead." },
  { icon: BadgeCheck, title: "Relentless Professionalism", description: "Excellence is our daily standard—sharp, accurate, and timely, with total responsibility on every task." },
  { icon: Handshake, title: "Shared Success", description: "We align our interests with partners, employees, and regulators to turn common goals into reality." },
  { icon: Building2, title: "Community Impact", description: "We strengthen the energy sector and the communities where we live and work—not only the bottom line." },
  { icon: Leaf, title: "Environmental Stewardship", description: "We conserve energy and safeguard the environment wherever our operations touch the value chain." },
];


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
                Palmerg Energy &amp; Resources Limited is a private, wholly Ghanaian company engaged in filling station management, oil and gas brokerage and supply, fuel haulage, and general consultancy in the downstream sector. A strategic objective is to become a fully fledged oil marketing company; we are{" "}
                <strong className="text-foreground">advancing through the National Petroleum Authority (NPA) licensing process</strong>.
                We broker fuel supply from Bulk Distribution Companies (BDCs) to Oil Marketing Companies (OMCs), and we manage filling stations facing operational challenges—delivering practical solutions and consultancy alongside consistent quality products and superior service to loyal clients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                Our leadership brings deep experience across market dynamics, station management, haulage and logistics, and downstream consultancy—supporting partners, regulators, and communities as we grow.
              </p>
            

              <div className="mb-8">
                <p className="font-heading font-bold text-sm text-primary uppercase tracking-wider mb-4 border-l-4 border-primary pl-4">
                  At a glance
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.07] to-transparent p-4 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-primary/90">Heritage</p>
                    <p className="font-heading mt-2 text-lg font-bold leading-tight text-foreground sm:text-xl">
                      In business since 2010
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Serving Ghana&apos;s downstream energy market with consistent quality and service.
                    </p>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-white p-4 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-primary/90">Governance</p>
                    <p className="font-heading mt-2 text-lg font-bold leading-tight text-foreground sm:text-xl">
                      Five-member board
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Strategic oversight and direction for the Palmerg group.
                    </p>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-white p-4 shadow-sm sm:col-span-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-primary/90">Scale</p>
                    <p className="font-heading mt-2 text-lg font-bold leading-tight text-foreground sm:text-xl">
                      Over 8.5 million litres traded to date
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Across our network and partnerships, with volumes continuing to grow.
                    </p>
                  </div>
                </div>
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
                  src="/images/palmerg/palmerg-gallery-station.png"
                  alt="Palmerg Energy fuel station operations"
                  className="w-full h-[480px] object-cover" />

              </div>
              {/* Floating stats — company profile */}
              <div className="absolute -bottom-6 -left-6 right-4 max-w-[min(100%,24rem)] rounded-2xl border border-white/15 bg-primary p-1 shadow-2xl shadow-primary/25 sm:right-auto">
                <div className="flex divide-x divide-white/20 rounded-xl bg-primary/95 px-1 py-4 sm:py-5">
                  <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 px-2 text-center sm:px-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      Heritage
                    </span>
                    <span className="text-[10px] font-medium leading-tight text-white/90 sm:text-[11px]">
                      In business since
                    </span>
                    <span className="font-heading text-2xl font-black tabular-nums leading-none text-white sm:text-3xl">
                      2010
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 px-2 text-center sm:px-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      Governance
                    </span>
                    <span className="text-[10px] font-medium leading-tight text-white/90 sm:text-[11px]">
                      Our board comprises
                    </span>
                    <span className="font-heading text-2xl font-black tabular-nums leading-none text-white sm:text-3xl">
                      5
                    </span>
                    <span className="text-[10px] font-medium leading-snug text-white/85 sm:text-xs">members</span>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 px-2 text-center sm:px-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      Scale
                    </span>
                    <span className="text-[10px] font-medium leading-tight text-white/90 sm:text-[11px]">
                      Over
                    </span>
                    <span className="font-heading text-2xl font-black leading-none text-white sm:text-3xl">
                      8.5M+
                    </span>
                    <span className="max-w-[7rem] text-[10px] font-medium leading-snug text-white/85 sm:text-xs">
                      litres traded to date
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision Tabs Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-primary/[0.06] relative overflow-hidden">
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
                  src="/images/palmerg/palmerg-gallery-logistics.png"
                  alt="Palmerg logistics and distribution"
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
                    Our mission
                  </span>
                  <h3 className="font-heading font-bold text-3xl text-foreground mb-5">
                    Quality products. Superior services.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At Palmerg Energy, our core values are the heartbeat of what we do: future-focused planning, relentless professionalism,
                    shared success with partners and regulators, community impact, and environmental stewardship. We prepare for what is next,
                    execute with accuracy, and align our interests with those who depend on reliable energy and honest dealing.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Operationally, we focus on brokerage (BDCs to OMCs), station management where sites need support, haulage and logistics,
                    and consultancy—always with the aim of becoming a fully fledged oil marketing company under NPA oversight.
                  </p>
                </div>
              }
              {activeTab === "vision" &&
              <div>
                  <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">
                    Our vision
                  </span>
                  <h3 className="font-heading font-bold text-3xl text-foreground mb-5">
                    A key player in Ghana&apos;s downstream sector
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-lg font-medium text-foreground/90">
                    To be a key player in the downstream sector of the oil industry in Ghana through the provision of quality products and superior services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We combine regulatory awareness, financial discipline, and operational grit so Palmerg can grow responsibly alongside Ghana&apos;s energy needs.
                  </p>
                </div>
              }
              {activeTab === "achievements" &&
              <div>
                  <span className="inline-flex items-center gap-2 bg-primary/15 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">
                    Strategic direction
                  </span>
                  <h3 className="font-heading font-bold text-3xl text-foreground mb-5">
                    Highlights from our company profile
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Wholly Ghanaian ownership — in business since 2010",
                      "Governance through a five-member board directing group strategy",
                      "8,504,118 litres traded to date, per our company profile",
                      "Consistent BDC-to-OMC brokerage and long-standing client relationships",
                      "Northern regional operations and nationwide brand growth, including marketing leadership from 2020",
                      "Advancing through NPA licensing toward a full oil marketing company (OMC) mandate",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
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
                Palmerg Energy is building toward a premier licensed oil marketing footprint—grounded in brokerage, station support,
                haulage, and consultancy, with leadership that understands both regulation and the realities of retail and logistics in Ghana&apos;s downstream sector.
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
                  We are advancing through the National Petroleum Authority (NPA) licensing process as we work toward becoming a fully fledged oil marketing company—committed to compliance, product quality, and transparent operations at every step.
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
                  <Shield className="h-8 w-8 text-primary shrink-0 opacity-80" aria-hidden />
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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

      {/* Meet The Team — anchor: Footer links to /About#management-profile */}
      <section id="management-profile" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <span className="inline-block bg-secondary/20 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Management profile</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              Leadership <span className="text-primary">&amp;</span> governance
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Board and executive leadership as described in our company profile—driving strategy, operations, marketing, and special duties across Palmerg Energy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-8 max-w-6xl mx-auto">
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
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 group border border-border/50 cursor-pointer h-full">

                <div className="relative mb-5 mx-auto w-32 h-32 sm:w-36 sm:h-36">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all" />
                  <div className="w-full h-full rounded-full border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={member.photo_url || "/palmerg-logo.png"}
                      alt={member.name}
                      className="w-full h-full object-cover" />

                  </div>
                </div>
                <h4 className="font-heading font-bold text-base text-foreground leading-snug mb-1.5 text-center group-hover:text-primary transition-colors">{member.name}</h4>
                <p className="text-primary text-sm font-semibold mb-3 text-center">{member.role}</p>
                <p className="text-muted-foreground text-sm text-center leading-relaxed line-clamp-4">{member.description}</p>
              </motion.div>
            </Link>
            )}
          </div>


        </div>
      </section>

      <FooterLocationBar />

      <Footer />
    </div>);

}