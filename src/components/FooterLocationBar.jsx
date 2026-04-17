import React from "react";
import { MapPin, Phone, Info } from "lucide-react";

/**
 * Address + phone strip and cookie notice above the main footer (Palmerg brand bars).
 */
export default function FooterLocationBar({
  addressLine = "No.1 Papaya Street, East Legon",
  phone = "059 477 4032 / 020 511 7212",
  mapQuery = "No.1+Papaya+Street,+East+Legon,+Accra,+Ghana",
  useMapLink = true,
  containerClassName = "max-w-7xl mx-auto px-4",
}) {
  const addressInner = (
    <>
      <MapPin className="w-4 h-4 shrink-0" />
      <span className="text-sm">{addressLine}</span>
    </>
  );

  return (
    <div className="flex flex-col md:flex-row text-white">
      <div className="bg-primary flex-1 py-4">
        <div className={`${containerClassName} flex flex-col sm:flex-row items-center justify-center gap-4`}>
          {useMapLink ? (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer"
            >
              {addressInner}
            </a>
          ) : (
            <div className="flex items-center gap-2">{addressInner}</div>
          )}
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 shrink-0" />
            <span className="text-sm">{phone}</span>
          </div>
        </div>
      </div>

      <div className="bg-accent py-4 hover:bg-primary flex-1 transition-colors duration-300">
        <div className={`${containerClassName} flex items-center justify-center gap-2`}>
          <Info className="w-5 h-5 shrink-0" />
          <span className="text-sm">Our website uses cookies to improve your experience.</span>
        </div>
      </div>
    </div>
  );
}
