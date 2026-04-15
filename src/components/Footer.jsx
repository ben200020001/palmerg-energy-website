import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-gradient-to-b from-primary to-[hsl(221_83%_28%)] text-primary-foreground shadow-[0_-4px_24px_-8px_hsl(221_83%_20%/0.35)]">
      <div className="site-container py-12 lg:py-16">
        <div className="mb-12 grid gap-10 border-b border-white/20 pb-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-heading mb-4 text-lg font-bold">About us</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/About" className="transition-colors hover:text-secondary">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/About#management-profile" className="transition-colors hover:text-secondary">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link to="/About#management-profile" className="transition-colors hover:text-secondary">
                  Executive Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/About" className="transition-colors hover:text-secondary">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link to="/About" className="transition-colors hover:text-secondary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/About" className="transition-colors hover:text-secondary">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/About" className="transition-colors hover:text-secondary">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link to="/About" className="transition-colors hover:text-secondary">
                  Advertising
                </Link>
              </li>
              <li>
                <Link to="/About" className="transition-colors hover:text-secondary">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading mb-4 text-lg font-bold">Explore</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/Services" className="transition-colors hover:text-secondary">
                  Products &amp; services
                </Link>
              </li>
              <li>
                <Link to="/Gallery" className="transition-colors hover:text-secondary">
                  Photo gallery
                </Link>
              </li>
              <li>
                <Link to="/Stations" className="transition-colors hover:text-secondary">
                  Station locations
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="transition-colors hover:text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:flex-wrap">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-sm text-white/85">Palmerg Energy & Resources Limited</span>
            <span className="text-xs text-white/60">© {new Date().getFullYear()} All Rights Reserved</span>
          </div>

          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/90"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
