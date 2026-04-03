import React from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">About us</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/About" className="hover:text-secondary transition-colors">About us</a></li>
              <li><a href="/About" className="hover:text-secondary transition-colors">Board of Directors</a></li>
              <li><a href="/About" className="hover:text-secondary transition-colors">Executive Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/About" className="hover:text-secondary transition-colors">Mission & Vision</a></li>
              <li><a href="/About" className="hover:text-secondary transition-colors">Our Team</a></li>
              <li><a href="/About" className="hover:text-secondary transition-colors">Careers</a></li>
              <li><a href="/About" className="hover:text-secondary transition-colors">Press & Media</a></li>
              <li><a href="/About" className="hover:text-secondary transition-colors">Advertising</a></li>
              <li><a href="/About" className="hover:text-secondary transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-white/80">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=No.1+Papaya+Street,+East+Legon,+Accra,+Ghana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-secondary transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>No.1 Papaya Street, East Legon</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>0205117212/ 0592221997</span>
              </div>
              <a 
                href="mailto:info@genoraenergy.com"
                className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@genoraenergy.com</span>
              </a>
            </div>
          </div>

          {/* Event Photos */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Event Photos</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="/GalleryPhoto?id=6"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/3ae778b96_generated_image.png" alt="Event 1" className="w-full h-20 rounded object-cover hover:opacity-80 transition-opacity cursor-pointer" /></a>
              <a href="/GalleryPhoto?id=7"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/2417e2aab_generated_image.png" alt="Event 2" className="w-full h-20 rounded object-cover hover:opacity-80 transition-opacity cursor-pointer" /></a>
              <a href="/GalleryPhoto?id=8"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/e0155a9ec_generated_image.png" alt="Event 3" className="w-full h-20 rounded object-cover hover:opacity-80 transition-opacity cursor-pointer" /></a>
              <a href="/GalleryPhoto?id=9"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/f289bfe86_generated_image.png" alt="Event 4" className="w-full h-20 rounded object-cover hover:opacity-80 transition-opacity cursor-pointer" /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-white/80">Genora Energy Limited</span>
            <span className="text-xs text-white/60">© {new Date().getFullYear()} All Rights Reserved</span>
          </div>
          
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-purple-300 text-secondary-foreground text-base font-bold w-8 h-8 flex items-center justify-center hover:bg-secondary/80 transition-colors"

            aria-label="Back to top">

            ↑
          </button>
        </div>
      </div>
    </footer>);

}