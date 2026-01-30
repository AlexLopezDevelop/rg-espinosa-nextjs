import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    title: "Property & Engineering",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    description: "Our largest division handles commercial and residential property claims, from natural disasters to equipment breakdown. We deploy teams of engineers, forensic accountants, and claims specialists.",
    features: ["Damage Assessment", "Policy Analysis", "Loss Quantification", "Forensic Investigation", "Business Interruption", "Expert Coordination"],
  },
  {
    title: "Financial Lines & Casualty",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    description: "Complex financial and liability claims require specialized expertise. Our team handles cyber incidents, professional indemnity, directors & officers liability, and general casualty claims.",
    features: ["Cyber & Data Breach", "D&O Liability", "Professional Indemnity", "BBB (Bankers Blanket)", "General Liability", "Products Liability"],
  },
  {
    title: "Energy & Government",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    description: "With over 20 years of experience in the energy sector, our team handles complex claims in oil & gas, renewable energy, and government infrastructure projects.",
    features: ["Oil & Gas Operations", "Renewable Energy", "Power Generation", "Government Infrastructure", "Mining Operations", "Transportation"],
  },
  {
    title: "HIRU - Hospitality Industry",
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
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue" />
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/50">/</span>
            <span className="text-white font-medium">Services</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Comprehensive claims management solutions tailored to your specific industry needs.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Expert Claims Adjusting Across All Lines</h2>
              <p className="text-gray-600 mb-6">
                At R&G Espinosa, we understand that every claim is unique. Our team of experienced
                adjusters combines deep industry knowledge with a client-focused approach to deliver
                accurate, timely, and professional claims resolution.
              </p>
              <ul className="space-y-3">
                {["24/7 Emergency response capability", "ISO 27001 certified operations", "Bilingual adjusters (English/Spanish)", "Transparent reporting and communication"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-brand-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                alt="Claims adjusting services"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-orange mb-12 text-center">Our Service Divisions</h2>

          <div className="space-y-12">
            {services.map((service, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`rounded-sm overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={service.image} alt={service.title} width={600} height={400} className="w-full h-auto" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-2xl font-bold text-brand-blue mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Our Claims Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Initial Response", desc: "Immediate acknowledgment and assignment within 24 hours." },
              { step: "2", title: "Site Investigation", desc: "Thorough on-site assessment and evidence collection." },
              { step: "3", title: "Analysis & Report", desc: "Detailed coverage analysis and loss quantification." },
              { step: "4", title: "Resolution", desc: "Final recommendations and settlement support." },
            ].map((item, i) => (
              <div key={i}>
                <div className="w-10 h-10 bg-brand-blue text-white rounded flex items-center justify-center mb-4 font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-brand-blue mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium text-brand-blue hover:no-underline">
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
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Report a Claim?</h2>
          <p className="text-white/80 mb-8">Our team is available 24/7 to assist you with your claims needs.</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">Report a Claim</Button>
            <Button size="lg" asChild className="bg-transparent border border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
