import { LocationsMap } from "@/components/sections/LocationsMap";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const offices = [
  {
    id: "miami",
    city: "Miami, FL",
    country: "United States",
    type: "hq" as const,
    flag: "US",
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
    flag: "MX",
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
    flag: "MX",
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
    flag: "CO",
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
    flag: "EC",
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
    flag: "PE",
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
    flag: "PR",
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
    flag: "UK",
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
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue" />
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/50">/</span>
            <span className="text-white font-medium">Locations</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">Our Locations</h1>
          <p className="text-lg text-white/90 max-w-2xl">
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
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-orange mb-12 text-center">Our Offices</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div
                key={office.id}
                className={`bg-white rounded-lg p-6 border ${
                  office.type === "hq"
                    ? "border-brand-blue border-2"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{office.flag}</span>
                  {office.type === "hq" && (
                    <span className="text-xs font-medium text-brand-blue uppercase">Headquarters</span>
                  )}
                  {office.type === "hiru" && (
                    <span className="text-xs font-medium text-orange-600 uppercase">HIRU Center</span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-brand-blue mb-1">{office.city}</h3>
                <p className="text-sm text-gray-500 mb-4">{office.country}</p>

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
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-brand-blue hover:underline">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${office.email}`} className="text-brand-blue hover:underline truncate">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Can&apos;t Find an Office Near You?</h2>
          <p className="text-white/80 mb-8">
            Contact our headquarters and we&apos;ll connect you with the right team.
          </p>
          <Button size="lg" asChild className="bg-white text-brand-blue hover:bg-gray-100">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
