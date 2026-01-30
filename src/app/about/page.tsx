import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const timeline = [
  { year: "2005", title: "Foundation", description: "R&G Espinosa founded in Miami, FL, with a vision to serve the Latin American insurance market." },
  { year: "2008", title: "Regional Expansion", description: "Opened offices in Mexico City and Bogotá, establishing regional presence in key markets." },
  { year: "2012", title: "HIRU Launch", description: "Established the Hospitality Industry Risk Handling Unit (HIRU) in Cancún to serve the tourism sector." },
  { year: "2018", title: "European Presence", description: "Opened London office to serve Lloyd's market and European insurers." },
  { year: "2024", title: "ISO Certification", description: "Achieved ISO 27001:2022 certification for information security management." },
];

const leaders = [
  { name: "Roberto Espinosa", title: "President & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop", bio: "Over 30 years of experience in the insurance industry, leading R&G Espinosa's strategic vision and global expansion." },
  { name: "Gustavo Espinosa", title: "Managing Partner", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop", bio: "Expert in claims adjusting with extensive experience managing complex claims across multiple jurisdictions." },
  { name: "Alfredo Espinosa", title: "Managing Director", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop", bio: "Specialized in energy and government claims, leading our international expansion and client relations." },
];

const values = [
  { title: "Integrity", desc: "Honest and transparent in all interactions", color: "blue", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "Excellence", desc: "Committed to highest standards", color: "cyan", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { title: "Teamwork", desc: "Collaborative approach for best results", color: "orange", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { title: "Global Reach", desc: "Local expertise, international standards", color: "gold", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-500 hover:text-[#004E99]">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#004E99]">About Us</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#051A2D] mb-4">About R&G Espinosa</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Learn about our history, values, and the team behind our success in international insurance adjusting.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop"
                alt="R&G Espinosa corporate office"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#051A2D] mb-6">Our Mission & Vision</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                R&G Espinosa International Adjusters was founded with a clear mission: to deliver
                exceptional claims adjusting services that combine deep local knowledge with
                rigorous international standards.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Since 2005, we have grown from a regional firm to a leading international adjusting
                company serving clients across the Americas, while maintaining our commitment to
                integrity, accuracy, and client service.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {values.map((value, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      value.color === "blue" ? "bg-[#004E99]/10" :
                      value.color === "cyan" ? "bg-[#22A9FF]/10" :
                      value.color === "orange" ? "bg-orange-100" : "bg-yellow-100"
                    }`}>
                      <svg className={`w-5 h-5 ${
                        value.color === "blue" ? "text-[#004E99]" :
                        value.color === "cyan" ? "text-[#22A9FF]" :
                        value.color === "orange" ? "text-orange-500" : "text-yellow-600"
                      }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-[#051A2D]">{value.title}</div>
                      <div className="text-sm text-gray-500">{value.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-[#004E99]/10 text-[#004E99]">Our Journey</Badge>
            <h2 className="text-3xl font-bold text-[#051A2D]">Key Milestones</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px w-0.5 h-full bg-[#004E99]/20" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex items-center gap-8 ${i % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <span className="text-[#004E99] font-bold text-lg">{item.year}</span>
                      <h4 className="font-semibold text-[#051A2D] mt-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#004E99] border-4 border-white shadow z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-[#004E99]/10 text-[#004E99]">Leadership Team</Badge>
            <h2 className="text-3xl font-bold text-[#051A2D]">Meet Our Leaders</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg text-[#051A2D]">{leader.name}</h4>
                  <span className="text-sm text-[#004E99]">{leader.title}</span>
                  <p className="text-sm text-gray-600 mt-3">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="border-[#004E99] text-[#004E99]" asChild>
              <Link href="/team">View Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-[#004E99] to-[#22A9FF]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20+", label: "Years of Experience" },
              { number: "13+", label: "Global Offices" },
              { number: "64+", label: "Expert Adjusters" },
              { number: "5K+", label: "Claims Resolved" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#051A2D] mb-4">Ready to Work Together?</h2>
          <p className="text-gray-600 mb-8">Contact us to discuss how we can support your claims management needs.</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-[#004E99] hover:bg-[#003d7a]" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" className="border-[#004E99] text-[#004E99]">Download Brochure</Button>
          </div>
        </div>
      </section>
    </>
  );
}
