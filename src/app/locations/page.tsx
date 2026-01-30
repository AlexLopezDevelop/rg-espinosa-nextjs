import { Badge } from "@/components/ui/badge";
import { LocationsMap } from "@/components/sections/LocationsMap";
import Link from "next/link";

const offices = [
  {
    id: "miami",
    city: "Miami, FL",
    country: "United States",
    type: "hq" as const,
    flag: "🇺🇸",
    address: "1800 NW 87th St, Miami, FL 33172",
    phone: "+1 786 539 5217",
    email: "miami@rygespinosa.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
  },
  {
    id: "mexico",
    city: "Mexico City",
    country: "Mexico",
    type: "regional" as const,
    flag: "🇲🇽",
    address: "Insurgentes Sur 1602, CDMX",
    phone: "+52 55 2457 0874",
    email: "mexicoclaims@rygespinosa.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM CST",
  },
  {
    id: "cancun",
    city: "Cancún",
    country: "Mexico",
    type: "hiru" as const,
    flag: "🇲🇽",
    address: "Blvd. Kukulcán KM 12.5, Cancún",
    phone: "+52 998 123 4567",
    email: "hiru@rygespinosa.com",
    hours: "24/7 Emergency Response",
  },
  {
    id: "bogota",
    city: "Bogotá",
    country: "Colombia",
    type: "regional" as const,
    flag: "🇨🇴",
    address: "Carrera 7 #71-21, Bogotá",
    phone: "+57 1 234 5678",
    email: "bogota@rygespinosa.com",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM COT",
  },
  {
    id: "quito",
    city: "Quito",
    country: "Ecuador",
    type: "regional" as const,
    flag: "🇪🇨",
    address: "Av. República E7-123, Quito",
    phone: "+593 2 234 5678",
    email: "quito@rygespinosa.com",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM ECT",
  },
  {
    id: "lima",
    city: "Lima",
    country: "Peru",
    type: "regional" as const,
    flag: "🇵🇪",
    address: "Av. Javier Prado Este 4600, Lima",
    phone: "+51 1 234 5678",
    email: "lima@rygespinosa.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM PET",
  },
  {
    id: "sanjuan",
    city: "San Juan",
    country: "Puerto Rico",
    type: "regional" as const,
    flag: "🇵🇷",
    address: "Ave. Ponce de León 500, San Juan",
    phone: "+1 787 234 5678",
    email: "puertorico@rygespinosa.com",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM AST",
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    type: "regional" as const,
    flag: "🇬🇧",
    address: "30 St Mary Axe, London EC3A 8BF",
    phone: "+44 203 713 4567",
    email: "london@rygespinosa.com",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT",
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-500 hover:text-[#004E99]">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#004E99]">Locations</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#051A2D] mb-4">Our Locations</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            With 13+ offices across the Americas and Europe, we&apos;re always close
            to where you need us.
          </p>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <LocationsMap />
        </div>
      </section>

      {/* Office Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-[#004E99]/10 text-[#004E99]">All Offices</Badge>
            <h2 className="text-3xl font-bold text-[#051A2D]">Find an Office Near You</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div
                key={office.id}
                className={`bg-white rounded-2xl p-6 border transition-all hover:shadow-lg ${
                  office.type === "hq"
                    ? "border-[#004E99] ring-2 ring-[#004E99]/10"
                    : office.type === "hiru"
                    ? "border-orange-200"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{office.flag}</span>
                  {office.type === "hq" && (
                    <Badge className="bg-[#004E99]">Headquarters</Badge>
                  )}
                  {office.type === "hiru" && (
                    <Badge className="bg-orange-500">HIRU Center</Badge>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-[#051A2D] mb-1">{office.city}</h3>
                <p className="text-sm text-gray-500 mb-4">{office.country}</p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-[#004E99] hover:underline">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${office.email}`} className="text-[#004E99] hover:underline truncate">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">{office.hours}</span>
                  </div>
                </div>

                <a
                  href="#"
                  className={`mt-4 block text-center py-2 text-sm font-medium rounded-lg transition-colors ${
                    office.type === "hq"
                      ? "bg-[#004E99] text-white hover:bg-[#003d7a]"
                      : office.type === "hiru"
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#004E99] to-[#22A9FF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can&apos;t Find an Office Near You?</h2>
          <p className="text-white/80 mb-8">
            Contact our headquarters and we&apos;ll connect you with the right team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#004E99] font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
