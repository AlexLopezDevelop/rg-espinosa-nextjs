import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    title: "Property & Engineering",
    badge: "Core Division",
    color: "blue",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    description: "Our largest division handles commercial and residential property claims, from natural disasters to equipment breakdown. We deploy teams of engineers, forensic accountants, and claims specialists.",
    features: ["Damage Assessment", "Policy Analysis", "Loss Quantification", "Forensic Investigation", "Business Interruption", "Expert Coordination"],
  },
  {
    title: "Financial Lines & Casualty",
    badge: "Specialized Division",
    color: "navy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Complex financial and liability claims require specialized expertise. Our team handles cyber incidents, professional indemnity, directors & officers liability, and general casualty claims.",
    features: ["Cyber & Data Breach", "D&O Liability", "Professional Indemnity", "BBB (Bankers Blanket)", "General Liability", "Products Liability"],
  },
  {
    title: "Energy & Government",
    badge: "Industry Focus",
    color: "blue",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    description: "With over 20 years of experience in the energy sector, our team handles complex claims in oil & gas, renewable energy, and government infrastructure projects.",
    features: ["Oil & Gas Operations", "Renewable Energy", "Power Generation", "Government Infrastructure", "Mining Operations", "Transportation"],
  },
  {
    title: "HIRU - Hospitality Industry",
    badge: "Exclusive Unit",
    color: "orange",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    description: "Our Hospitality Industry Risk Handling Unit (HIRU) is a dedicated team based in Cancún, specializing in hotel, resort, and tourism claims with 24/7 response.",
    features: ["Hotel & Resort Claims", "24/7 Emergency Response", "Risk Manuals", "Industry Statistics", "Compliance Support", "Training Programs"],
  },
];

const faqs = [
  { q: "How long does it take you to respond to a new claim?", a: "We acknowledge all new claims within 24 hours of notification. For urgent claims, our team can be on-site within 48 hours in most locations across the Americas." },
  { q: "What geographic areas do you cover?", a: "We have offices and operations throughout the Americas, including the United States (Miami), Mexico, Colombia, Ecuador, Peru, Puerto Rico, and the Caribbean. We also have a presence in London." },
  { q: "Do you handle both insurer and reinsurer claims?", a: "Yes, we work with primary insurers, reinsurers, and self-insured corporations. Our team understands the different requirements and reporting standards for each type of client." },
  { q: "What makes R&G Espinosa different from other adjusters?", a: "Our combination of deep local knowledge across Latin America with international standards sets us apart. We have bilingual adjusters, specialized industry units like HIRU, and ISO 27001 certification." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-500 hover:text-[#004E99]">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#004E99]">Services</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#051A2D] mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Comprehensive claims management solutions tailored to your specific industry needs.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#051A2D] mb-6">Expert Claims Adjusting Across All Lines</h2>
              <p className="text-gray-600 mb-4">
                At R&G Espinosa, we understand that every claim is unique. Our team of experienced
                adjusters combines deep industry knowledge with a client-focused approach.
              </p>
              <ul className="space-y-3">
                {["24/7 Emergency response capability", "ISO 27001 certified operations", "Bilingual adjusters (English/Spanish)", "Transparent reporting and communication"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop"
                alt="Claims adjusting services"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-[#004E99]/10 text-[#004E99]">Our Core Divisions</Badge>
            <h2 className="text-3xl font-bold text-[#051A2D]">Specialized Service Lines</h2>
          </div>

          <div className="space-y-12">
            {services.map((service, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={service.image} alt={service.title} width={600} height={400} className="w-full h-auto" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <Badge className={service.color === "orange" ? "bg-orange-500" : "bg-[#004E99]"}>
                    {service.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold text-[#051A2D] mt-3 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className={`w-4 h-4 ${service.color === "orange" ? "text-orange-500" : "text-[#004E99]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-[#004E99]/10 text-[#004E99]">Our Approach</Badge>
            <h2 className="text-3xl font-bold text-[#051A2D]">How We Handle Your Claims</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Initial Response", desc: "Immediate acknowledgment and assignment within 24 hours." },
              { step: "02", title: "Site Investigation", desc: "Thorough on-site assessment and evidence collection." },
              { step: "03", title: "Analysis & Report", desc: "Detailed coverage analysis and loss quantification." },
              { step: "04", title: "Resolution", desc: "Final recommendations and settlement support." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#004E99]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#004E99]">{item.step}</span>
                </div>
                <h4 className="font-semibold text-[#051A2D] mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-[#004E99]/10 text-[#004E99]">Common Questions</Badge>
            <h2 className="text-3xl font-bold text-[#051A2D]">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left font-medium text-[#051A2D] hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#004E99] to-[#22A9FF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Report a Claim?</h2>
          <p className="text-white/80 mb-8">Our team is available 24/7 to assist you with your claims needs.</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-[#004E99] hover:bg-gray-100">Report a Claim</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
