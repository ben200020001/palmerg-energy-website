import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronRight, Briefcase, Award, Target, Globe } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/teamMembers";

export default function TeamMemberDetail() {
  const [searchParams] = useSearchParams();
  const memberId = searchParams.get("id");
  const member = TEAM_MEMBERS.find((m) => m.id === memberId);
  const isLoading = false;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-32">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>);

  }

  if (!member) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Team Member Not Found</h2>
            <Link to="/About#management-profile" className="text-primary hover:underline">← Back to Team</Link>
          </div>
        </div>
        <Footer />
      </div>);

  }

  const skills = [
  { icon: Briefcase, title: "Leadership Excellence", description: "Proven track record in strategic decision-making and team management across energy sector operations." },
  { icon: Target, title: "Industry Expertise", description: "Deep understanding of petroleum marketing, regulatory compliance, and operational efficiency standards." },
  { icon: Award, title: "Professional Growth", description: "Committed to continuous improvement and driving innovation in Ghana's downstream petroleum industry." }];


  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">{member.name}</h1>
          <div className="text-muted-foreground flex items-center gap-2">
            <Link to="/Home" className="text-primary hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/About" className="text-primary hover:text-accent transition-colors">About</Link>
            <ChevronRight className="w-4 h-4" />
            <span>{member.name}</span>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left - Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center sticky top-32">
                <div className="w-56 h-56 sm:w-64 sm:h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-2">
                  <div className="w-full h-full rounded-full border-4 border-white shadow-xl bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={member.photo_url || "/palmerg-logo.png"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={
                        member.photo_object_position ?
                        { objectPosition: member.photo_object_position } :
                        undefined
                      } />
                    
                  </div>
                </div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-2">{member.name}</h2>
                <p className="text-primary font-semibold mb-6">{member.role}</p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>No.1 Papaya Street, East Legon </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{member.email || "info@palmergenergy.com"}</span>
                  </div>
                  <a
                    href="https://www.palmergenergy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-primary hover:text-accent transition-colors cursor-pointer">
                    
                    <Globe className="w-4 h-4 flex-shrink-0" />
                    <span>https://palmergenergy.com</span>
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">Social Networks</p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group">
                      <Facebook className="w-4 h-4 text-primary group-hover:text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group">
                      <Twitter className="w-4 h-4 text-primary group-hover:text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group">
                      <Linkedin className="w-4 h-4 text-primary group-hover:text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group">
                      <Instagram className="w-4 h-4 text-primary group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">About</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{member.description}</p>

              </motion.div>

              {/* Skills & Experience */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Skills & Experience</h3>
                <div className="space-y-4">
                  {skills.map((skill, i) =>
                  <div key={i} className="flex gap-4 p-5 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <skill.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{skill.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Back Link */}
              <div className="pt-6 border-t">
                <Link
                  to="/About#management-profile"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold">
                  ← Back to Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}