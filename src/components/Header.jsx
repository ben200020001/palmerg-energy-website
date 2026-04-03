import React, { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, Mail, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
  { label: "Contact", to: "/Contact" }];

  const suggestions = ["Startup", "Agency", "Creative", "Consulting", "IT services", "Pricing"];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchOpen(false);
      setSearchQuery("");
      navigate(`/SearchResults?q=${encodeURIComponent(searchQuery)}`);
    }
  };


  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"}`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r text-white px-4 py-5 text-xs from-primary to-accent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="https://www.google.com/maps/place/Accra,+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">

              <MapPin className="w-3 h-3" />
              <span className="text-sm font-light hidden sm:inline">No.1 Papaya Street, East Legon </span>
            </a>
            <a href="mailto:info@genoraenergy.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-3 h-3" />
              <span className="text-sm font-light hidden sm:inline">info@genoraenergy.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-1 py-2 hidden md:flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-3 h-3" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="w-3 h-3" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="w-3 h-3" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-3 h-3" />
              </a>
            </div>
            <Link to="/Stations">
              <UIButton
                size="sm"
                variant="secondary"
                className="bg-secondary text-secondary-foreground px-3 text-xs font-medium rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:bg-secondary/80 h-7">
                <MapPin className="w-3 h-3 mr-1" />
                Locate our stations
              </UIButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-[#FFFFFF] px-4 py-2 rounded-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/Home" className="flex flex-col items-center gap-0.5">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/ca0496e01_Gemini_Generated_Image_6d8u3s6d8u3s6d8u-removebg-preview.png"

              alt="Genora Energy" className="h-16 w-auto" />
              <div className="flex flex-col items-center -mt-1">
                <span className="text-lg font-heading font-bold text-primary leading-none">GENORA</span>
                <span className="text-xs font-heading font-semibold text-primary leading-none">ENERGY LIMITED</span>
              </div>
            </Link>
          
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-4">
            <nav className="my-3 px-5 py-1 rounded-md flex items-center gap-8">
              {navItems.map((item) =>
              item.to ?
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-semibold text-primary hover:text-accent transition-colors">

                    {item.label}
                  </Link> :

              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-primary hover:text-accent transition-colors">

                    {item.label}
                  </a>

              )}
            </nav>
            <button
              onClick={() => setSearchOpen(true)}
              className="ml-6 p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Search">
              <Search className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-md"
            aria-label="Toggle menu">

            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen &&
      <div className="lg:hidden border-t bg-white">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) =>
          item.to ?
          <Link
            key={item.label}
            to={item.to}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-primary hover:text-accent transition-colors">

                  {item.label}
                </Link> :

          <a
            key={item.label}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-primary hover:text-accent transition-colors">

                  {item.label}
                </a>

          )}
          </nav>
        </div>
      }

      {/* Search Modal */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <UIDialogContent className="max-w-2xl p-8">
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
            aria-label="Close">
            <X className="h-4 w-4" />
          </button>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">What are you looking for?</h2>
              <p className="text-sm text-muted-foreground">
                Explore our services and discover how we can help you achieve your goals
              </p>
            </div>
            
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search..."
                className="w-full px-4 py-3 pr-12 bg-muted border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus />
              <button onClick={handleSearch} className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-md hover:bg-primary/90">
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                <span className="font-semibold">Suggest:</span>{" "}
                {suggestions.map((suggestion, index) =>
                <span key={index}>
                    <button
                    onClick={() => setSearchQuery(suggestion)}
                    className="text-foreground hover:text-primary transition-colors">
                      {suggestion}
                    </button>
                    {index < suggestions.length - 1 && " · "}
                  </span>
                )}
              </p>
            </div>
          </div>
        </UIDialogContent>
      </Dialog>

    </header>
  );
}




