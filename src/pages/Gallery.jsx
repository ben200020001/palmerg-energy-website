import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X, MapPin, Phone, Info } from "lucide-react";
import { Link } from "react-router-dom";

const photos = [
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/14263d9b7_generated_image.png",
    alt: "Genora Haulage Operations",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/7fe1c4481_generated_image.png",
    alt: "Genora Fuel Station Network",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/1b585e164_generated_image.png",
    alt: "Genora Premium Fuel",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/960b6858c_generated_image.png",
    alt: "Genora Refinery Operations",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/fb69c1547_generated_image.png",
    alt: "Genora Mission & Vision",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/efa7f7aa0_generated_image.png",
    alt: "Salt Mining & Export",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/3ae778b96_generated_image.png",
    alt: "Event Photo 1",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/2417e2aab_generated_image.png",
    alt: "Event Photo 2",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/e0155a9ec_generated_image.png",
    alt: "Event Photo 3",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/f289bfe86_generated_image.png",
    alt: "Event Photo 4",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">Galleries</h1>
          <div className="text-muted-foreground flex items-center gap-2">
            <a href="/Home" className="text-primary hover:text-accent transition-colors">Home</a>
            <span>/</span>
            <span>Galleries</span>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
              Media & Event Photo Gallery
            </h2>
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <Link
                key={i}
                to={`/GalleryPhoto?id=${i}`}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg group block"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-4xl max-h-[85vh] w-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Location & Cookie Bar */}
      <div className="flex flex-col md:flex-row text-white">
        <div className="bg-purple-700 flex-1 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=No.1+Papaya+Street,+East+Legon,+Accra,+Ghana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer"
            >
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
    </div>
  );
}