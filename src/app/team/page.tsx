"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const teamByCountry = [
  {
    country: "Corporate Office - Miami, USA",
    flag: "🇺🇸",
    members: [
      { name: "Ricardo Espinosa", title: "President", photo: "/team/ricardo-espinosa.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Faustino Cortés", title: "Vice President", photo: "/team/faustino-cortes.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Vanessa Vargas", title: "COO - Head of Financial Lines, Cyber & Casualty", photo: "/team/vanessa-vargas.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Ángela Verján", title: "Regional Director of Operations and Business Development", photo: "/team/angela-verjan.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Francisco Juárez", title: "Chief Financial Officer", photo: "/team/francisco-juarez.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Enrique Hernández", title: "Corporate Administrative Director", photo: "/team/enrique-hernandez.png", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Ricardo Calderón", title: "TPA Director", photo: "/team/ricardo-calderon.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Ricardo E Villalón", title: "Compliance", photo: "/team/ricardo-villalon.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Mileva Alcántara", title: "Analyst", photo: "/team/mileva-alcantara.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
    ],
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    members: [
      { name: "Andrés Álvarez", title: "VP - Country Manager México", photo: "/team/andres-alvarez.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Alberto Espinosa", title: "Director", photo: "/team/alberto-espinosa.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Arturo Suaste", title: "Director", photo: "/team/arturo-suaste.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Christian Blando", title: "Director", photo: "/team/christian-blando.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Juan Carlos León", title: "Director", photo: "/team/juan-carlos-leon.png", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Fernando Hernández", title: "Monterrey Office Manager", photo: "/team/fernando-hernandez.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Cristina Basulto", title: "Casualty Manager", photo: "/team/cristina-basulto.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Luis Miguel Sandoval", title: "Senior Adjuster", photo: "/team/luis-miguel-sandoval.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Ricardo de los Rios", title: "Senior Adjuster", photo: "/team/ricardo-de-los-rios.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Lucía De Alba", title: "Adjuster", photo: "/team/lucia-de-alba.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Alejandro Cabrera", title: "Adjuster", photo: "/team/alejandro-cabrera.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Alejandro Suaste", title: "Adjuster", photo: "/team/alejandro-suaste.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Geovanni Salgado", title: "Adjuster", photo: "/team/geovanni-salgado.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Alfonso Rico", title: "Adjuster", photo: "/team/alfonso-rico.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Irving Serna", title: "Adjuster", photo: "/team/irving-serna.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Betzaira Ramos", title: "Junior Adjuster", photo: "/team/betzaira-ramos.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Daniela Reyes", title: "Junior Adjuster", photo: "/team/daniela-reyes.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Sarahi Velásco", title: "Analyst", photo: "/team/sarahi-velasco.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Iveth Pérez", title: "Analyst", photo: "/team/iveth-perez.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Arturo Bahena", title: "Analyst", photo: "/team/arturo-bahena.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
    ],
  },
  {
    country: "Colombia",
    flag: "🇨🇴",
    members: [
      { name: "Julieth Cano", title: "Office Manager", photo: "/team/julieth-cano.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Sebastián Velandia", title: "Adjuster", photo: "/team/sebastian-velandia.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Lina Moreno", title: "Adjuster", photo: "/team/lina-moreno.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "David Cerón", title: "Junior Adjuster", photo: "/team/david-ceron.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Ricardo Castro", title: "Junior Adjuster", photo: "/team/ricardo-castro.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Manuela Cuervo", title: "Adjuster", photo: "/team/manuela-cuervo.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Alejandra Pineda", title: "Analyst", photo: "/team/alejandra-pineda.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Lina Duarte", title: "Analyst", photo: "/team/lina-duarte.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
    ],
  },
  {
    country: "Ecuador",
    flag: "🇪🇨",
    members: [
      { name: "Ramiro Guerrero", title: "Office Manager", photo: "/team/ramiro-guerrero.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Guido Zambrano", title: "Adjuster", photo: "/team/guido-zambrano.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Sophia Argotty", title: "Junior Adjuster", photo: "/team/sophia-argotty.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Diego Sunta", title: "Junior Adjuster", photo: "/team/diego-sunta.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Joseline Pepinós", title: "Analyst", photo: "/team/joseline-pepinos.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Fernanda Salazar", title: "Analyst", photo: "/team/fernanda-salazar.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
    ],
  },
  {
    country: "Puerto Rico",
    flag: "🇵🇷",
    members: [
      { name: "Santiago Vargas", title: "Office Manager", photo: "/team/santiago-vargas.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Eduardo Cid", title: "Senior Adjuster", photo: "/team/eduardo-cid.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Yanuel Colón", title: "Analyst", photo: "/team/yanuel-colon.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Jayben Bonilla", title: "Junior Adjuster", photo: "/team/jayben-bonilla.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Luis Ruiz", title: "Inspector", photo: "/team/luis-ruiz.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
    ],
  },
  {
    country: "London, United Kingdom",
    flag: "🇬🇧",
    members: [
      { name: "Simon Bredin", title: "London Office", photo: "/team/simon-bredin.png", linkedin: "https://www.linkedin.com/company/10553859" },
    ],
  },
  {
    country: "IBA Latin-America",
    flag: "🌎",
    subtitle: "Argentina, Uruguay, Paraguay, Bolivia",
    members: [
      { name: "Ernesto Bodenheimer", title: "Managing Director", photo: "/team/ernesto-bodenheimer.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Alejandro Gustavo Bontempo", title: "Senior Adjuster - Engineering Risk Expert", photo: "/team/alejandro-bontempo.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Daniel A. Ortigoza", title: "Senior Adjuster - Agricultural & Environmental Expert", photo: "/team/daniel-ortigoza.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Ariel Gerosa", title: "Adjuster", photo: "/team/ariel-gerosa.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Mariana Mestola", title: "Adjuster", photo: "/team/mariana-mestola.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
    ],
  },
  {
    country: "Dominican Republic",
    flag: "🇩🇴",
    subtitle: "LEVAMSA SRL",
    members: [
      { name: "Luis Vásquez", title: "Director", photo: "/team/luis-vasquez.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
    ],
  },
  {
    country: "Peru",
    flag: "🇵🇪",
    members: [
      { name: "Gonzalo de Romaña García", title: "Chief Executive Officer", photo: "/team/gonzalo-de-romana.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Óscar Colmenares Zapata", title: "Director of Engineering", photo: "/team/oscar-colmenares.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Frank Mauricio Sinarahua", title: "Director of Risk Prevention and Control", photo: "/team/frank-sinarahua.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Roosevelt Flórez", title: "Director of Technology", photo: "/team/roosevelt-florez.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Carlos Miguel Caro", title: "Marine Regional Director", photo: "/team/carlos-caro.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
      { name: "Alberto Crespo", title: "General Manager – Director of Operations", photo: "/team/alberto-crespo.jpg", linkedin: "https://www.linkedin.com/company/10553859" },
    ],
  },
];

export default function TeamPage() {
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setExpandedSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue" />
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/50">/</span>
            <span className="text-white font-medium">Our Team</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-lg text-white/90 max-w-2xl">
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
                <div className="text-3xl font-bold text-brand-blue">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team by Country */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Our Global Team</h2>

          <div className="space-y-6">
            {teamByCountry.map((location, i) => {
              const isExpanded = expandedSections.includes(i);
              const memberCount = location.members.length;

              return (
                <div key={i} className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden transition-all hover:border-brand-blue/30">
                  <button
                    onClick={() => toggleSection(i)}
                    className="w-full bg-gradient-to-r from-brand-blue to-brand-blue-light px-6 py-5 transition-all hover:from-brand-blue-hover hover:to-brand-blue"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{location.flag}</span>
                        <div className="text-left">
                          <h3 className="text-xl font-semibold text-white">{location.country}</h3>
                          {location.subtitle && (
                            <p className="text-sm text-white/70">{location.subtitle}</p>
                          )}
                        </div>
                        <span className="ml-4 px-3 py-1 bg-brand-orange text-white text-sm font-semibold rounded-full">
                          {memberCount} {memberCount === 1 ? 'Member' : 'Members'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/80 text-sm font-medium">
                          {isExpanded ? 'Collapse' : 'Expand'}
                        </span>
                        <svg
                          className={`w-6 h-6 text-white transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  {isExpanded && (
                    <div className="p-8 bg-gray-50">
                      <div className="flex justify-center">
                        <div className="team-grid w-full max-w-[1400px]">
                          {location.members.map((member, j) => (
                            <div key={j} className="flex flex-col items-center text-center p-5 bg-white rounded-lg border-2 border-gray-100 hover:border-brand-orange/50 hover:shadow-md transition-all group w-full max-w-[280px]">
                              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-3 border-brand-blue/20 group-hover:border-brand-orange transition-colors">
                                <Image
                                  src={member.photo}
                                  alt={member.name}
                                  width={112}
                                  height={112}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <h4 className="font-semibold text-brand-blue group-hover:text-brand-orange transition-colors">{member.name}</h4>
                              <p className="text-sm text-gray-600 mb-3 min-h-[40px] flex items-center">{member.title}</p>
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0077b5] hover:text-brand-orange transition-colors"
                                aria-label={`${member.name}'s LinkedIn profile`}
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Build Your Career With Us</h2>
          <p className="text-white/80 mb-8">
            We&apos;re always looking for talented professionals who share our commitment to excellence.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100" asChild>
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
