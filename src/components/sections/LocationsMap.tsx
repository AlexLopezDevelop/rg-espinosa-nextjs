"use client";

import { useState } from "react";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerLabel,
  MapControls,
} from "@/components/ui/map";

type Office = {
  id: string;
  city: string;
  country: string;
  type: "hq" | "regional" | "hiru";
  coordinates: [number, number];
  address: string;
  phone: string;
  email: string;
};

const offices: Office[] = [
  {
    id: "miami",
    city: "Miami, FL",
    country: "United States",
    type: "hq",
    coordinates: [-80.2101, 25.7617],
    address: "1800 NW 87th St, Miami, FL 33172",
    phone: "+1 786 539 5217",
    email: "miami@rygespinosa.com",
  },
  {
    id: "mexico",
    city: "Mexico City",
    country: "Mexico",
    type: "regional",
    coordinates: [-99.1332, 19.4326],
    address: "Insurgentes Sur 1602, CDMX",
    phone: "+52 55 2457 0874",
    email: "mexicoclaims@rygespinosa.com",
  },
  {
    id: "cancun",
    city: "Cancún",
    country: "Mexico",
    type: "hiru",
    coordinates: [-86.8515, 21.1619],
    address: "Blvd. Kukulcán KM 12.5, Cancún",
    phone: "+52 998 123 4567",
    email: "hiru@rygespinosa.com",
  },
  {
    id: "bogota",
    city: "Bogotá",
    country: "Colombia",
    type: "regional",
    coordinates: [-74.0721, 4.711],
    address: "Carrera 7 #71-21, Bogotá",
    phone: "+57 1 234 5678",
    email: "bogota@rygespinosa.com",
  },
  {
    id: "quito",
    city: "Quito",
    country: "Ecuador",
    type: "regional",
    coordinates: [-78.4678, -0.1807],
    address: "Av. República E7-123, Quito",
    phone: "+593 2 234 5678",
    email: "quito@rygespinosa.com",
  },
  {
    id: "lima",
    city: "Lima",
    country: "Peru",
    type: "regional",
    coordinates: [-77.0428, -12.0464],
    address: "Av. Javier Prado Este 4600, Lima",
    phone: "+51 1 234 5678",
    email: "lima@rygespinosa.com",
  },
  {
    id: "sanjuan",
    city: "San Juan",
    country: "Puerto Rico",
    type: "regional",
    coordinates: [-66.1057, 18.4655],
    address: "Ave. Ponce de León 500, San Juan",
    phone: "+1 787 234 5678",
    email: "puertorico@rygespinosa.com",
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    type: "regional",
    coordinates: [-0.1276, 51.5074],
    address: "30 St Mary Axe, London EC3A 8BF",
    phone: "+44 203 713 4567",
    email: "london@rygespinosa.com",
  },
];

const markerColors = {
  hq: "#004E99",
  regional: "#22A9FF",
  hiru: "#FB8501",
};

export function LocationsMap() {
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-gray-200">
      <Map
        center={[-60, 15]}
        zoom={2.5}
        minZoom={1.5}
        maxZoom={18}
      >
        <MapControls
          position="bottom-right"
          showZoom={true}
          showLocate={false}
          showFullscreen={true}
        />

        {offices.map((office) => (
          <MapMarker
            key={office.id}
            longitude={office.coordinates[0]}
            latitude={office.coordinates[1]}
            onClick={() => setSelectedOffice(office.id === selectedOffice ? null : office.id)}
          >
            <MarkerContent>
              <div
                className={`
                  relative w-4 h-4 rounded-full border-2 border-white shadow-lg cursor-pointer
                  transition-transform hover:scale-125
                  ${office.type === "hq" ? "w-5 h-5" : ""}
                `}
                style={{ backgroundColor: markerColors[office.type] }}
              >
                {office.type === "hq" && (
                  <div
                    className="absolute inset-0 rounded-full animate-ping opacity-30"
                    style={{ backgroundColor: markerColors[office.type] }}
                  />
                )}
              </div>
              <MarkerLabel
                position="bottom"
                className={`mt-1 text-[11px] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] ${
                  office.type === "hiru" ? "text-[#FB8501]" : "text-white"
                }`}
              >
                {office.city}
              </MarkerLabel>
            </MarkerContent>

            {selectedOffice === office.id && (
              <MarkerPopup closeButton offset={20}>
                <div className="min-w-[240px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: markerColors[office.type] }}
                    />
                    <span className="text-xs font-medium text-gray-500 uppercase">
                      {office.type === "hq" ? "Headquarters" : office.type === "hiru" ? "HIRU Center" : "Regional Office"}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{office.city}</h3>
                  <p className="text-sm text-gray-500 mb-3">{office.country}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-[#004E99] hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${office.email}`} className="text-[#004E99] hover:underline">
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${office.coordinates[1]},${office.coordinates[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center py-2 px-4 bg-[#004E99] text-white text-sm font-medium rounded-lg hover:bg-[#003d7a] transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </MarkerPopup>
            )}
          </MapMarker>
        ))}
      </Map>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-100">
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#004E99]" />
            <span className="text-gray-600">Headquarters</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22A9FF]" />
            <span className="text-gray-600">Regional Office</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FB8501]" />
            <span className="text-gray-600">HIRU Center</span>
          </div>
        </div>
      </div>
    </div>
  );
}
