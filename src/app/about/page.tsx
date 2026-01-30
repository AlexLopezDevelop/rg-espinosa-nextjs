import Link from "next/link";
import Image from "next/image";
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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#051A2D] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">About R&G Espinosa</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            International insurance adjusters serving the Americas since 2005.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-sm overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="R&G Espinosa professionals"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#051A2D] mb-6">Our Mission</h2>
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

              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Integrity", desc: "Honest and transparent in all interactions" },
                  { title: "Excellence", desc: "Committed to highest standards" },
                  { title: "Teamwork", desc: "Collaborative approach for best results" },
                  { title: "Global Reach", desc: "Local expertise, international standards" },
                ].map((value, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-[#051A2D]">{value.title}</h4>
                    <p className="text-sm text-gray-500">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#051A2D] mb-12 text-center">Our History</h2>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-20 shrink-0 text-right">
                  <span className="text-[#004E99] font-bold text-lg">{item.year}</span>
                </div>
                <div className="w-px bg-[#004E99]/30 relative">
                  <div className="absolute top-1 -left-1.5 w-3 h-3 rounded-full bg-[#004E99]" />
                </div>
                <div className="pb-8">
                  <h4 className="font-semibold text-[#051A2D]">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#051A2D] mb-12 text-center">Leadership Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <div key={i} className="border border-gray-200 rounded-sm overflow-hidden">
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
      <section className="py-16 bg-[#004E99]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20+", label: "Years of Experience" },
              { number: "13+", label: "Global Offices" },
              { number: "64+", label: "Expert Adjusters" },
              { number: "5,000+", label: "Claims Resolved" },
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
          <h2 className="text-2xl font-bold text-[#051A2D] mb-4">Ready to Work Together?</h2>
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
