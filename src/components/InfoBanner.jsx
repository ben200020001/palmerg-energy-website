import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Package } from "lucide-react";
import { Link } from "react-router-dom";

export default function InfoBanner() {
  return (
    <div className="bg-muted py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <p className="text-sm text-foreground font-medium">
          Powering Ghana&apos;s progress through dependable oil and gas operations, bulk fuel solutions, and resource-focused
          logistics for businesses and communities. Palmerg Energy &amp; Resources Limited delivers reliable supply today while
          building toward cleaner, more responsible energy systems.
        </p>
        <div className="flex gap-3">
          <Link to="/Stations">
            <Button variant="default" size="sm" className="font-semibold">
              <MapPin className="w-4 h-4 mr-2" />
              Locate Palmerg stations
            </Button>
          </Link>
          <Link to="/Services">
            <Button variant="outline" size="sm" className="font-semibold border-primary text-primary hover:bg-primary hover:text-white">
              <Package className="w-4 h-4 mr-2" />
              View all Palmerg products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}