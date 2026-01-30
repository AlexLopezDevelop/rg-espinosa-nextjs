import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const teamByCountry = [
  {
    country: "Corporate Office - Miami, USA",
    flag: "🇺🇸",
    members: [
      { name: "Ricardo Espinosa", title: "President" },
      { name: "Faustino Cortés", title: "Vice President" },
      { name: "Vanessa Vargas", title: "COO - Head of Financial Lines, Cyber & Casualty" },
      { name: "Ángela Verján", title: "Regional Director of Operations and Business Development" },
      { name: "Francisco Juárez", title: "Chief Financial Officer" },
      { name: "Enrique Hernández", title: "Corporate Administrative Director" },
      { name: "Ricardo Calderón", title: "TPA Director" },
      { name: "Ricardo E Villalón", title: "Compliance" },
      { name: "Mileva Alcántara", title: "Analyst" },
    ],
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    members: [
      { name: "Andrés Álvarez", title: "VP - Country Manager" },
      { name: "Alberto Espinosa", title: "Director" },
      { name: "Arturo Suaste", title: "Director" },
      { name: "Christian Blando", title: "Director" },
      { name: "Juan Carlos León", title: "Director" },
    ],
  },
  {
    country: "Colombia",
    flag: "🇨🇴",
    members: [
      { name: "Julieth Cano", title: "Office Manager" },
    ],
  },
  {
    country: "Ecuador",
    flag: "🇪🇨",
    members: [
      { name: "Ramiro Guerrero", title: "Office Manager" },
    ],
  },
  {
    country: "Puerto Rico",
    flag: "🇵🇷",
    members: [
      { name: "Santiago Vargas", title: "Office Manager" },
      { name: "Eduardo Cid", title: "Senior Adjuster" },
      { name: "Yanuel Colón", title: "Adjuster" },
      { name: "Jayben Bonilla", title: "Adjuster" },
      { name: "Luis Ruiz", title: "Adjuster" },
    ],
  },
  {
    country: "London, United Kingdom",
    flag: "🇬🇧",
    members: [
      { name: "Simon Bredin", title: "London Office Representative" },
    ],
  },
  {
    country: "IBA Latin-America",
    flag: "🌎",
    subtitle: "Argentina, Uruguay, Paraguay, Bolivia",
    members: [
      { name: "Ernesto Bodenheimer", title: "Managing Director" },
    ],
  },
  {
    country: "Dominican Republic",
    flag: "🇩🇴",
    subtitle: "LEVAMSA SRL",
    members: [
      { name: "Luis Vásquez", title: "Director" },
    ],
  },
  {
    country: "Peru",
    flag: "🇵🇪",
    members: [
      { name: "Gonzalo de Romaña García", title: "CEO" },
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#051A2D] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">Our Team</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Meet the experienced professionals behind R&G Espinosa. 64+ experts across 13+ offices worldwide.
          </p>
        </div>
      </section>

      {/* Team Photo */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[21/9]">
            <Image
              src="/team-photo.jpg"
              alt="R&G Espinosa Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "64+", label: "Expert Adjusters" },
              { number: "20+", label: "Avg Years Experience" },
              { number: "13+", label: "Global Offices" },
              { number: "9", label: "Countries" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-[#004E99]">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team by Country */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#051A2D] mb-12 text-center">Our Global Team</h2>

          <div className="space-y-12">
            {teamByCountry.map((location, i) => (
              <div key={i} className="bg-white rounded-sm border border-gray-200 overflow-hidden">
                <div className="bg-[#051A2D] px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{location.flag}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{location.country}</h3>
                      {location.subtitle && (
                        <p className="text-sm text-gray-400">{location.subtitle}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {location.members.map((member, j) => (
                      <div key={j} className="flex items-center gap-4 p-4 bg-gray-50 rounded-sm">
                        <div className="w-12 h-12 bg-[#004E99] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                          {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#051A2D]">{member.name}</h4>
                          <p className="text-sm text-gray-500">{member.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-[#004E99]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Build Your Career With Us</h2>
          <p className="text-white/80 mb-8">
            We&apos;re always looking for talented professionals who share our commitment to excellence.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-[#004E99] hover:bg-gray-100" asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
            <Button size="lg" asChild className="bg-transparent border border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact HR</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
