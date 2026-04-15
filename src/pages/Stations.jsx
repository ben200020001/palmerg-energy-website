import React, { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterLocationBar from "@/components/FooterLocationBar";
import { PALMERG_STATIONS } from "@/data/stationsLocations";
import { palmergStationIcon } from "@/lib/palmergMapIcon";
import { StationMapDetails } from "@/components/map/StationMapDetails";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const OVERVIEW_CENTER = { lat: 7.9465, lng: -1.0232 };
const OVERVIEW_ZOOM = 7;
const FOCUS_ZOOM = 13;

function MapUpdater({ lat, lng, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], zoom);
  }, [lat, lng, zoom, map]);
  return null;
}

const stations = PALMERG_STATIONS;

export default function Stations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStation, setSelectedStation] = useState(null);

  const filteredStations = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return stations;
    return stations.filter(
      (station) =>
        station.name.toLowerCase().includes(q) ||
        station.location.toLowerCase().includes(q),
    );
  }, [searchTerm]);

  const handleStationClick = (station) => {
    setSelectedStation(station);
  };

  const mapLat = selectedStation?.lat ?? OVERVIEW_CENTER.lat;
  const mapLng = selectedStation?.lng ?? OVERVIEW_CENTER.lng;
  const mapZoom = selectedStation ? FOCUS_ZOOM : OVERVIEW_ZOOM;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-muted text-foreground py-10 pt-[140px]">
        <div className="mx-auto my-1 px-3 max-w-7xl">
          <h1 className="mb-4 pt-10 pb-3 text-3xl font-semibold text-justify md:text-5xl">Stations</h1>
          <div className="text-muted-foreground flex items-center gap-2">
            <a href="/" className="text-primary text-justify hover:text-accent transition-colors">Home</a>
            <span>/</span>
            <span>Stations</span>
          </div>
        </div>
      </div>

      {/* Main Content - Full Width Layout */}
      <div className="flex min-w-0 flex-col lg:flex-row lg:h-[calc(100vh-320px)] lg:min-h-[600px]">
        {/* Stations List - Left Side */}
        <div className="order-2 lg:order-1 flex min-h-0 min-w-0 w-full max-w-full flex-col lg:w-80 lg:max-w-[20rem] bg-white border-b lg:border-b-0 lg:border-r">
          <div className="min-w-0 max-w-full border-b p-4">
            <h2 className="text-xl font-heading font-bold mb-3 break-words">Fuel Stations</h2>
            
            {/* Search */}
            <div className="relative min-w-0 max-w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search by name or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-9" />
            </div>
          </div>

          {/* Station List */}
          <div className="min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden max-h-[45vh] lg:h-[calc(100%-120px)] lg:max-h-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb:hover]:bg-gray-400">
            {filteredStations.map((station) =>
            <div
              key={station.id}
              onClick={() => handleStationClick(station)}
              className={`min-w-0 max-w-full cursor-pointer border-b p-4 transition-colors ${
              selectedStation?.id === station.id ?
              "bg-primary/5 border-l-4 border-l-primary" :
              ""}`
              }>
                <h3 className="break-words font-semibold text-sm mb-1 [overflow-wrap:anywhere]">{station.name}</h3>
                <p className="break-words text-xs leading-snug text-muted-foreground [overflow-wrap:anywhere]">{station.location}</p>
              </div>
            )}
          </div>
        </div>

        {/* Map - Right Side */}
        <div className="order-1 lg:order-2 min-w-0 w-full lg:flex-1 h-[50vh] sm:h-[55vh] lg:h-full relative z-0">
          <MapContainer
            center={[7.9465, -1.0232]}
            zoom={7}
            style={{ height: "100%", width: "100%", zIndex: 0 }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapUpdater lat={mapLat} lng={mapLng} zoom={mapZoom} />
            {stations.map((station) => (
              <Marker
                key={station.id}
                position={[station.lat, station.lng]}
                icon={palmergStationIcon}
              >
                <Popup
                  className="palmerg-station-popup"
                  maxWidth={280}
                  autoPanPadding={L.point(24, 120)}
                >
                  <StationMapDetails name={station.name} location={station.location} />
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      <FooterLocationBar
        addressLine="Okponglo, East Legon"
        phone="059 477 4032 / 024 288 2278"
        mapQuery="Okponglo+East+Legon+Accra+Ghana"
        useMapLink={false}
      />

      <Footer />
    </div>);

}