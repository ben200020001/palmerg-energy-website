import React, { useState, useEffect } from "react";
import { Menu, X, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { palmergLogo } from "@/assets/palmerg";

export default function Header() {
  const UIButton = /** @type {any} */ (Button);
  const UIDialogContent = /** @type {any} */ (DialogContent);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "/Home" },
    { label: "About Us", to: "/About" },
    { label: "Products & Services", to: "/Services" },
    { label: "Photo Gallery", to: "/Gallery" },
    { label: "Contact", to: "/Contact" },
  ];

  const suggestions = ["Fuel", "Stations", "Haulage", "LPG", "Salt mining", "Contact"];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchOpen(false);
      setSearchQuery("");
      navigate(`/SearchResults?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1200] transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-primary/10" : ""
      }`}
    >
      <div className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="site-max flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2.5 text-[11px] sm:text-xs md:text-sm">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href="https://www.google.com/maps/place/Accra,+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <MapPin className="h-3 w-3 shrink-0" />
              <span className="hidden sm:inline">No.1 Papaya Street, East Legon</span>
            </a>
            <a href="mailto:info@palmergenergy.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Mail className="h-3 w-3 shrink-0" />
              <span className="hidden sm:inline">info@palmergenergy.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2.5 md:flex">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="h-3.5 w-3.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
            <Link to="/Stations">
              <UIButton
                size="sm"
                variant="secondary"
                className="h-7 bg-secondary px-3 text-[11px] font-semibold text-secondary-foreground shadow-sm hover:bg-secondary/90"
              >
                <MapPin className="mr-1 h-3 w-3" />
                Stations
              </UIButton>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-primary/10 bg-white/95 backdrop-blur-md transition-colors ${
          scrolled ? "bg-white" : ""
        }`}
      >
        <div className="site-max grid grid-cols-[auto_1fr_auto] items-center gap-3 py-3 lg:gap-6 lg:py-3.5">
          <Link to="/Home" className="flex shrink-0 items-center">
            <img src={palmergLogo} alt="Palmerg Energy and Resources Limited" className="h-12 w-auto sm:h-14" />
          </Link>

          <nav className="hidden min-w-0 justify-self-center lg:flex">
            <div className="inline-flex flex-wrap items-center justify-center gap-0.5 rounded-full border border-primary/15 bg-muted/50 px-1.5 py-1 shadow-inner">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-full px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:px-4 sm:text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center justify-end gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="rounded-full p-2.5 text-primary transition-colors hover:bg-primary/10"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2.5 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-b border-border bg-white shadow-lg lg:hidden">
          <nav className="site-container flex flex-col gap-0.5 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-primary hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/Stations"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-lg border border-primary/20 px-3 py-3 text-center text-sm font-semibold text-primary"
            >
              Locate our stations
            </Link>
          </nav>
        </div>
      )}

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <UIDialogContent className="max-w-2xl p-8">
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="space-y-6">
            <div>
              <h2 className="mb-2 font-heading text-3xl font-bold">Search Palmerg</h2>
              <p className="text-sm text-muted-foreground">Find pages, services, and topics across our site.</p>
            </div>

            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search…"
                className="w-full rounded-md border-0 bg-muted px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-primary p-2 text-primary-foreground hover:bg-primary/90"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            <div>
              <p className="mb-3 text-sm text-muted-foreground">
                <span className="font-semibold">Try:</span>{" "}
                {suggestions.map((suggestion, index) => (
                  <span key={suggestion}>
                    <button
                      type="button"
                      onClick={() => setSearchQuery(suggestion)}
                      className="text-foreground hover:text-primary"
                    >
                      {suggestion}
                    </button>
                    {index < suggestions.length - 1 && " · "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </UIDialogContent>
      </Dialog>
    </header>
  );
}
