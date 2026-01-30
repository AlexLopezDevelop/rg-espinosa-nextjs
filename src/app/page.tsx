import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-[#004E99]/10 text-[#004E99] hover:bg-[#004E99]/10">
                International Insurance Adjusters
              </Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#051A2D] leading-tight mb-6">
                Your Partner in{" "}
                <span className="bg-gradient-to-r from-[#004E99] via-[#22A9FF] to-[#FFB703] bg-clip-text text-transparent">
                  Claims Resolution
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine local expertise across the Americas with international
                standards to resolve your claims efficiently, transparently, and
                with the professionalism you deserve.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" className="bg-[#004E99] hover:bg-[#003d7a]">
                  Get a Quote
                </Button>
                <Button size="lg" variant="outline" className="border-[#004E99] text-[#004E99] hover:bg-[#004E99]/5">
                  Our Services
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-6">
                {[
                  { number: "20+", label: "Years Experience" },
                  { number: "13+", label: "Global Offices" },
                  { number: "64+", label: "Expert Adjusters" },
                  { number: "5K+", label: "Claims Resolved" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-[#004E99]">{stat.number}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Professional team of insurance adjusters"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Floating cards */}
              <div className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm">ISO 27001</div>
                  <div className="text-xs text-gray-500">Certified</div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm">&lt;24h</div>
                  <div className="text-xs text-gray-500">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Bar */}
      <section className="py-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-sm text-gray-500">Trusted by leading insurers worldwide</span>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["AIG", "AXA", "CHUBB", "Allianz", "Munich Re", "QBE", "Swiss Re", "Zurich"].map((client) => (
                <span key={client} className="text-lg font-semibold text-gray-300">{client}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-[#004E99]/10 text-[#004E99]">Our Expertise</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#051A2D] mb-4">
              Specialized Claims Adjusting Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four specialized divisions delivering comprehensive claims management
              across all major insurance lines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Property & Engineering",
                description: "Commercial and residential property claims with expert damage assessment.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                color: "blue",
              },
              {
                title: "Financial Lines",
                description: "Cyber, D&O, Professional Indemnity and BBB claims expertise.",
                icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                color: "cyan",
              },
              {
                title: "Energy & Government",
                description: "Oil & Gas, renewables, and government infrastructure claims.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                color: "blue",
              },
              {
                title: "HIRU - Hospitality",
                description: "24/7 hotel and resort claims from our Cancún operations center.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                color: "orange",
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1 ${
                  service.color === "orange"
                    ? "bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200"
                    : "bg-white border-gray-200 hover:border-[#004E99]/30"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    service.color === "orange"
                      ? "bg-orange-500"
                      : service.color === "cyan"
                      ? "bg-[#22A9FF]"
                      : "bg-[#004E99]"
                  }`}
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#051A2D] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className={`text-sm font-medium inline-flex items-center gap-1 ${
                    service.color === "orange" ? "text-orange-600" : "text-[#004E99]"
                  }`}
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#004E99] to-[#22A9FF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Need to Report a Claim?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Our team is ready to assist you 24/7. Get in touch and experience
            the R&G Espinosa difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#004E99] hover:bg-gray-100">
              Report a Claim
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
