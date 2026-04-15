import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GALLERY_PHOTOS } from "@/data/galleryPhotos";

const photos = GALLERY_PHOTOS;

export default function GalleryPhoto() {
  const [searchParams] = useSearchParams();
  const index = parseInt(searchParams.get("id") || "0", 10);
  const photo = photos[index] || photos[0];
  const prevIndex = (index - 1 + photos.length) % photos.length;
  const nextIndex = (index + 1) % photos.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold md:text-5xl">{photo.title}</h1>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <a href="/Home" className="text-primary hover:text-accent transition-colors">Home</a>
            <span>/</span>
            <Link to="/Gallery" className="text-primary hover:text-accent transition-colors">Gallery</Link>
            <span>/</span>
            <span>{photo.title}</span>
          </div>
        </div>
      </div>

      {/* Photo Detail */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full object-cover"
            />
          </div>

          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">{photo.title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{photo.description}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <Link
              to={`/GalleryPhoto?id=${prevIndex}`}
              className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Link>
            <Link
              to="/Gallery"
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
            >
              Back to Gallery
            </Link>
            <Link
              to={`/GalleryPhoto?id=${nextIndex}`}
              className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}