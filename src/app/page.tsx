import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Global business skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#051A2D]/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="text-[#22A9FF] font-medium mb-4 tracking-wide uppercase text-sm">
            International Insurance Adjusters
          </p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Professional Claims Management<br className="hidden lg:block" /> Across the Americas
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Since 2005, R&G Espinosa has delivered expert claims adjusting services
            combining deep local knowledge with rigorous international standards.
            We serve insurers, reinsurers, and corporations throughout the Americas and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button size="lg" className="bg-[#004E99] hover:bg-[#003d7a] text-white px-8">
              Report a Claim
            </Button>
            <Button size="lg" className="bg-white text-[#051A2D] hover:bg-gray-100 px-8">
              Request a Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/20 max-w-4xl mx-auto">
            {[
              { number: "20+", label: "Years Experience" },
              { number: "13+", label: "Global Offices" },
              { number: "64+", label: "Expert Adjusters" },
              { number: "5,000+", label: "Claims Resolved" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium text-[#051A2D] text-sm">ISO 27001:2022 Certified</span>
              <span className="text-gray-300 mx-2">|</span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>CILA Member</span>
                <span>AICLA Member</span>
                <span>IBA Member</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500 mb-8">Trusted by leading insurers worldwide</p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
            {[
              { name: "AIG", logo: "/logos/aig.jpg" },
              { name: "Allianz", logo: "/logos/allianz.jpg" },
              { name: "AXA", logo: "/logos/axa.jpg" },
              { name: "CHUBB", logo: "/logos/chubb.jpg" },
              { name: "Munich RE", logo: "/logos/munich-re.jpg" },
              { name: "Swiss Re", logo: "/logos/swiss-re.jpg" },
              { name: "Zurich", logo: "/logos/zurich.jpg" },
              { name: "QBE", logo: "/logos/qbe.jpg" },
            ].map((client) => (
              <div key={client.name} className="flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={80}
                  height={80}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#051A2D] mb-4">
              Our Service Divisions
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Four specialized divisions delivering comprehensive claims management
              across all major insurance lines throughout the Americas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Property & Engineering",
                description: "Commercial and residential property claims, natural catastrophes, equipment breakdown, and construction risks.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                title: "Financial Lines & Casualty",
                description: "Cyber liability, D&O, Professional Indemnity, BBB, and general casualty claims expertise.",
                icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
              },
              {
                title: "Energy & Government",
                description: "Oil & gas operations, renewable energy, power generation, and government infrastructure projects.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "HIRU - Hospitality",
                description: "Dedicated unit for hotel and resort claims with 24/7 response from our Cancún operations center.",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#004E99] transition-colors"
              >
                <div className="w-10 h-10 bg-[#004E99] rounded flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#051A2D] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-sm font-medium text-[#004E99] hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#051A2D] mb-6">
                Why Work With R&G Espinosa
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Local Expertise, International Standards", desc: "Deep knowledge of Latin American markets combined with Lloyd's-level reporting." },
                  { title: "Rapid Response", desc: "24/7 claims notification with on-site presence within 48 hours across most locations." },
                  { title: "Bilingual Teams", desc: "Native Spanish and English speakers throughout our organization." },
                  { title: "ISO 27001 Certified", desc: "Information security management certified to international standards." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#004E99] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#051A2D]">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop"
                alt="Professional claims adjusting"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#004E99]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Need to Report a Claim?
          </h2>
          <p className="text-white/80 mb-8">
            Our team is available 24/7 to assist with your claims management needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#004E99] hover:bg-gray-100">
              Report a Claim
            </Button>
            <Button size="lg" asChild className="bg-transparent border border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
