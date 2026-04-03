import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Package } from "lucide-react";
import { Link } from "react-router-dom";

export default function InfoBanner() {
  return (
    <div className="bg-muted py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <p className="text-sm text-foreground font-medium">Powering Ghana's progress through excellence in energy solutions, premium fuel services, and sustainable resource management for a brighter future.
          Genora Energy: Fueling today's journeys with precision and reliability — while building toward a cleaner, greener energy solution.
        </p>
        <div className="flex gap-3">
          <Link to="/Stations">
            <Button variant="default" size="sm" className="font-semibold">
              <MapPin className="w-4 h-4 mr-2" />
              Locate Genora stations
            </Button>
          </Link>
          <Link to="/Services">
            <Button variant="outline" size="sm" className="font-semibold border-primary text-primary hover:bg-primary hover:text-white">
              <Package className="w-4 h-4 mr-2" />
              View all Genora Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}