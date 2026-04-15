import L from "leaflet";

const markerSrc = `${import.meta.env.BASE_URL}images/map/palmerg-map-marker.svg`;

/** Palmerg-branded map pin (matches public/images/map/palmerg-map-marker.svg). */
export const palmergStationIcon = L.icon({
  iconUrl: markerSrc,
  iconRetinaUrl: markerSrc,
  iconSize: [48, 60],
  iconAnchor: [24, 60],
  popupAnchor: [0, -56],
  tooltipAnchor: [24, 28],
  className: "palmerg-leaflet-marker-icon",
});
