import React, { useState, useEffect } from "react";
import { Search, MapPin, Phone, X, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function MapUpdater({ center }) {
  const map = useMap();
  useEffect(() => { map.setView(center, center[0] === 7.9465 ? 7 : 13); }, [center]);
  return null;
}

const stations = [
{ id: 1, name: "Agona Nkwanta", location: "Agona Nkwanta, Ahanta West Municipal District, Ghana", lat: 5.0167, lng: -1.9833 },
{ id: 2, name: "Wassa Achempin", location: "Wassa Achempin, Wassa Amenfi West Municipal District, Ghana", lat: 5.5500, lng: -2.3167 },
{ id: 3, name: "Nkakaa", location: "Nkakaa, Ashanti Region, Ghana", lat: 6.8000, lng: -1.5500 },
{ id: 4, name: "Mankranso", location: "Mankranso, Ahafo Ano South West District, Ghana", lat: 6.8500, lng: -1.8167 },
{ id: 5, name: "Wa", location: "Wa, Upper West Region, Ghana", lat: 10.0600, lng: -2.5000 },
{ id: 6, name: "Subin", location: "Subin, Kumasi, Ghana", lat: 6.6885, lng: -1.6244 },
{ id: 7, name: "Asankragua", location: "Asankragua, Wassa Amenfi West Municipal District, Ghana", lat: 5.8667, lng: -2.3167 },
{ id: 8, name: "Sefwi Nsawora", location: "Sefwi Nsawora, Bodi District, Ghana", lat: 6.2167, lng: -2.6333 },
{ id: 9, name: "Enchi", location: "Enchi, Western North Region, Ghana", lat: 5.6667, lng: -2.8333 },
{ id: 10, name: "Bulk Site (Western North)", location: "Bulk Site, Western North Region, Ghana", lat: 5.8000, lng: -2.5000 },
{ id: 11, name: "Okyereko", location: "Okyereko, Central Region, Ghana", lat: 5.1333, lng: -0.8000 },
{ id: 12, name: "Kasoa Ofaakor", location: "Kasoa Ofaakor, Central Region, Ghana", lat: 5.5333, lng: -0.4167 },
{ id: 13, name: "Nsuayem", location: "Nsuayem, Central Region, Ghana", lat: 5.6167, lng: -1.3500 },
{ id: 14, name: "Esaase", location: "Esaase, Central Region, Ghana", lat: 5.4500, lng: -1.5000 },
{ id: 15, name: "New Edubiase", location: "New Edubiase, Ashanti Region, Ghana", lat: 6.1833, lng: -1.4667 },
{ id: 16, name: "Obuasi", location: "Obuasi, Ashanti Region, Ghana", lat: 6.2000, lng: -1.6667 },
{ id: 17, name: "Ejura", location: "Ejura, Ashanti Region, Ghana", lat: 7.3833, lng: -1.3667 },
{ id: 18, name: "Bulk Site (Ashanti)", location: "Bulk Site, Ashanti Region, Ghana", lat: 6.7000, lng: -1.6200 },
{ id: 19, name: "Kintampo", location: "Kintampo, Bono Region, Ghana", lat: 8.0500, lng: -1.7333 }];


export default function Stations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStation, setSelectedStation] = useState(null);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const filteredStations = stations.filter(
    (station) =>
    station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    station.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStationClick = (station) => {
    setSelectedStation(station);
  };

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
      <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-320px)] lg:min-h-[600px]">
        {/* Stations List - Left Side */}
        <div className="order-2 lg:order-1 w-full lg:w-80 bg-white border-b lg:border-b-0 lg:border-r">
          <div className="p-4 border-b">
            <h2 className="text-xl font-heading font-bold mb-3">Fuel Stations</h2>
            
            {/* Search */}
            <div className="relative">
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
          <div className="max-h-[45vh] overflow-y-auto lg:h-[calc(100%-120px)] lg:max-h-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb:hover]:bg-gray-400">
            {filteredStations.map((station) =>
            <div
              key={station.id}
              onClick={() => handleStationClick(station)}
              className={`p-4 border-b cursor-pointer transition-all ${
              selectedStation?.id === station.id ?
              "bg-primary/5 border-l-4 border-l-primary" :
              "hover:bg-muted/30"}`
              }>
                <h3 className="font-semibold text-sm mb-1">{station.name}</h3>
                <p className="text-xs text-muted-foreground">{station.location}</p>
              </div>
            )}
          </div>
        </div>

        {/* Map - Right Side */}
        <div className="order-1 lg:order-2 w-full lg:flex-1 h-[50vh] sm:h-[55vh] lg:h-full relative z-0">
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
            <MapUpdater center={selectedStation ? [selectedStation.lat, selectedStation.lng] : [7.9465, -1.0232]} />
            {stations.map((station) => (
              <Marker key={station.id} position={[station.lat, station.lng]}>
                <Popup>
                  <div className="text-center">
                    <h3 className="font-bold text-sm text-primary mb-1">{station.name}</h3>
                    <p className="text-xs text-muted-foreground">{station.location}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Location & Cookie Bar */}
      <div className="flex flex-col md:flex-row text-white">
        {/* Location Bar - Purple */}
        <div className="bg-purple-700 flex-1 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Okponglo, East Legon</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">059 477 4032 / 024 288 2278</span>
            </div>
          </div>
        </div>

        {/* Cookie Banner - Orange */}
        {showCookieBanner &&
        <div className="bg-purple-500 py-4 hover:bg-purple-700 flex-1 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
              <Info className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Our website uses cookies to improve your experience.</span>
            </div>
          </div>
        }
      </div>

      <Footer />
    </div>);

}