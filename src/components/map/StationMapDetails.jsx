import { memo } from "react";
import { MapPin, Phone, Fuel, Clock } from "lucide-react";

const DEFAULTS = {
  phoneLabel: "0594774032",
  phoneHref: "tel:+233594774032",
  fuelTypes: "Petrol, Diesel",
  hours: "24/7",
};

/**
 * Rich station card for Leaflet Popup (marker click).
 */
export const StationMapDetails = memo(function StationMapDetails({
  name,
  location,
  phoneLabel = DEFAULTS.phoneLabel,
  phoneHref = DEFAULTS.phoneHref,
  fuelTypes = DEFAULTS.fuelTypes,
  hours = DEFAULTS.hours,
}) {
  return (
    <div className="palmerg-station-map-details box-border w-full min-w-0 max-w-full overflow-hidden p-3 text-left [overflow-wrap:anywhere] [word-break:break-word]">
      <h3 className="font-heading mb-3 border-b border-border pb-2 text-base font-bold leading-snug text-foreground">
        {name}
      </h3>
      <ul className="space-y-2.5 text-xs text-muted-foreground">
        <li className="flex min-w-0 gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
          <span className="min-w-0 flex-1 leading-snug">{location}</span>
        </li>
        <li className="flex min-w-0 gap-2">
          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
          <a href={phoneHref} className="min-w-0 flex-1 font-medium text-primary hover:underline">
            {phoneLabel}
          </a>
        </li>
        <li className="flex min-w-0 gap-2">
          <Fuel className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
          <span className="min-w-0 flex-1">
            <span className="font-semibold text-foreground">Fuel types:</span> {fuelTypes}
          </span>
        </li>
        <li className="flex min-w-0 gap-2">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
          <span className="min-w-0 flex-1">
            <span className="font-semibold text-foreground">Hours:</span> {hours}
          </span>
        </li>
      </ul>
    </div>
  );
});
