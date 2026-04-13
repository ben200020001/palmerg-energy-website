import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function LocationsSection() {
  const stats = [
    { value: "20+", label: "Stations" },

    { value: "19+", label: "Stations" },
    { value: "99%", label: "Uptime" },
    { value: "200+", label: "Daily Customers" },
    { value: "4m+", label: "Litres/Month" },
  ];

  const stations = [
    { name: "Agona Nkwanta", lat: 5.0167, lng: -1.9833, address: "Agona Nkwanta, Ahanta West Municipal District, Ghana" },
    { name: "Wassa Achempin", lat: 5.5500, lng: -2.3167, address: "Wassa Achempin, Wassa Amenfi West Municipal District, Ghana" },
    { name: "Nkakaa", lat: 6.8000, lng: -1.5500, address: "Nkakaa, Ashanti Region, Ghana" },
    { name: "Mankranso", lat: 6.8500, lng: -1.8167, address: "Mankranso, Ahafo Ano South West District, Ghana" },
    { name: "Wa", lat: 10.0600, lng: -2.5000, address: "Wa, Upper West Region, Ghana" },
    { name: "Subin", lat: 6.6885, lng: -1.6244, address: "Subin, Kumasi, Ghana" },
    { name: "Asankragua", lat: 5.8667, lng: -2.3167, address: "Asankragua, Wassa Amenfi West Municipal District, Ghana" },
    { name: "Sefwi Nsawora", lat: 6.2167, lng: -2.6333, address: "Sefwi Nsawora, Bodi District, Ghana" },
    { name: "Enchi", lat: 5.6667, lng: -2.8333, address: "Enchi, Western North Region, Ghana" },
    { name: "Bulk Site (Western North)", lat: 5.8000, lng: -2.5000, address: "Bulk Site, Western North Region, Ghana" },
    { name: "Okyereko", lat: 5.1333, lng: -0.8000, address: "Okyereko, Central Region, Ghana" },
    { name: "Kasoa Ofaakor", lat: 5.5333, lng: -0.4167, address: "Kasoa Ofaakor, Central Region, Ghana" },
    { name: "Nsuayem", lat: 5.6167, lng: -1.3500, address: "Nsuayem, Central Region, Ghana" },
    { name: "Esaase", lat: 5.4500, lng: -1.5000, address: "Esaase, Central Region, Ghana" },
    { name: "New Edubiase", lat: 6.1833, lng: -1.4667, address: "New Edubiase, Ashanti Region, Ghana" },
    { name: "Obuasi", lat: 6.2000, lng: -1.6667, address: "Obuasi, Ashanti Region, Ghana" },
    { name: "Ejura", lat: 7.3833, lng: -1.3667, address: "Ejura, Ashanti Region, Ghana" },
    { name: "Bulk Site (Ashanti)", lat: 6.7000, lng: -1.6200, address: "Bulk Site, Ashanti Region, Ghana" },
    { name: "Kintampo", lat: 8.0500, lng: -1.7333, address: "Kintampo, Bono Region, Ghana" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white relative z-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-white rounded-xl shadow-lg border" style={{ overflow: "hidden" }}>
              <MapContainer
                center={[7.9465, -1.0232]}
                zoom={7}
                style={{ height: "600px", width: "100%" }}
                scrollWheelZoom={true}
                dragging={true}
                touchZoom={true}
                doubleClickZoom={true}
                zoomControl={true}
              >
                <TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map tiles &copy; <a href="https://www.maptiler.com/">MapTiler</a>'
  url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=PMZUiDTvjZ2oW3CbynLv"

                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {stations.map((station, idx) => (
                  <Marker key={idx} position={[station.lat, station.lng]}>
                    <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                      <div className="text-center">
                        <h3 className="font-heading font-bold text-sm text-primary mb-1">{station.name}</h3>
                        <p className="text-xs text-muted-foreground">{station.address}</p>
                      </div>
                    </Tooltip>
                  </Marker>
                ))}
              </MapContainer>

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 border-t z-[1000]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-primary mb-0.5 md:mb-1">{stat.value}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
                Find a Palmerg <span className="text-primary">Station</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                15 Palmerg sites across Ghana bring you trusted fuels and friendly, professional service wherever you travel.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: "Where can I find the nearest Palmerg station?",
                  a: "Use our interactive map above or visit the Stations page to locate the nearest Palmerg Energy station to you."
                },
                {
                  q: "What payment methods are accepted?",
                  a: "We accept cash, mobile money (MTN & Telecel), and all major credit/debit cards at all our stations."
                },
                {
                  q: "Are your stations open 24/7?",
                  a: "Most of our major stations operate 24/7. Check specific station hours on our locations page."
                },
                {
                  q: "Do you offer bulk fuel services?",
                  a: "Yes, we provide bulk fuel supply services for commercial and industrial clients. Contact us for details."
                }
              ].map((faq, i) => (
                <Card key={i} className="p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">{faq.q}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              ))}
            </div>

            <Link to="/Stations" className="w-full">
              <Button size="lg" className="w-full font-semibold">
                <MapPin className="w-4 h-4 mr-2" />
                View All Palmerg Stations
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}