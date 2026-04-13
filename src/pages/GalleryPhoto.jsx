import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const photos = [
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/14263d9b7_generated_image.png",
    alt: "Palmerg Haulage Operations",
    title: "Palmerg Haulage Operations",
    description: "Our haulage fleet in action, delivering fuel reliably across Ghana's network of roads.",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/7fe1c4481_generated_image.png",
    alt: "Palmerg Fuel Station Network",
    title: "Palmerg Fuel Station Network",
    description: "A glimpse of our nationwide network of premium fuel stations serving motorists across Ghana.",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/1b585e164_generated_image.png",
    alt: "Palmerg Premium Fuel",
    title: "Palmerg Premium Fuel",
    description: "High-quality Palmerg premium fuel engineered for engine performance and longevity.",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/960b6858c_generated_image.png",
    alt: "Palmerg Refinery Operations",
    title: "Palmerg Refinery Operations",
    description: "State-of-the-art refinery and processing facilities ensuring efficient production and distribution.",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/fb69c1547_generated_image.png",
    alt: "Palmerg Mission & Vision",
    title: "Palmerg Mission & Vision",
    description: "Driven by a clear mission and vision to power Ghana's progress and serve every community.",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/efa7f7aa0_generated_image.png",
    alt: "Salt Mining & Export",
    title: "Salt Mining & Export",
    description: "Large-scale salt extraction and processing operations serving local and international markets.",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/3ae778b96_generated_image.png",
    alt: "Event Photo 1",
    title: "Company Event",
    description: "Highlights from one of Palmerg Energy's memorable company events and celebrations.",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/2417e2aab_generated_image.png",
    alt: "Event Photo 2",
    title: "Community Event",
    description: "Palmerg Energy engaging with communities and partners at our outreach events.",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/e0155a9ec_generated_image.png",
    alt: "Event Photo 3",
    title: "Industry Event",
    description: "Palmerg Energy representing excellence at national industry events and exhibitions.",
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b1a3a17a4d9f8b0154b3b3/f289bfe86_generated_image.png",
    alt: "Event Photo 4",
    title: "Award Ceremony",
    description: "Celebrating milestones and recognizing excellence within the Palmerg Energy family.",
  },
];

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