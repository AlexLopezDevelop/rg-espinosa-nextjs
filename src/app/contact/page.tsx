import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-500 hover:text-[#004E99]">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#004E99]">Contact</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#051A2D] mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Get in touch with our team. We&apos;re here to help with your claims management needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#051A2D] mb-6">Let&apos;s Talk</h2>
              <p className="text-gray-600 mb-8">
                Whether you need to report a claim, request a quote, or simply have questions about our services,
                our team is ready to assist you. We typically respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#004E99]/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#004E99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#051A2D]">Call Us</div>
                    <div className="text-sm text-gray-500 mb-1">Mon-Fri from 9am to 6pm EST</div>
                    <a href="tel:+17865395217" className="text-[#004E99] font-medium hover:underline">+1 786 539 5217</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#004E99]/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#004E99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#051A2D]">Email Us</div>
                    <div className="text-sm text-gray-500 mb-1">We respond within 24 hours</div>
                    <a href="mailto:contacto@rygespinosa.com" className="text-[#004E99] font-medium hover:underline">contacto@rygespinosa.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#004E99]/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#004E99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#051A2D]">Visit Us</div>
                    <div className="text-sm text-gray-500 mb-1">Corporate Headquarters</div>
                    <span className="text-gray-700">1800 NW 87th St, Miami FL 33172</span>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="text-sm font-medium text-gray-500 mb-3">Follow Us</div>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#004E99] hover:text-white transition-colors text-gray-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#004E99] hover:text-white transition-colors text-gray-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#051A2D] mb-2">Send Us a Message</h3>
              <p className="text-sm text-gray-500 mb-6">Fill out the form below and we&apos;ll get back to you shortly.</p>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">First Name *</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Last Name *</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email *</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Phone</label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Company</label>
                  <Input placeholder="Your company" />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Service Interest *</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="property">Property & Engineering</SelectItem>
                      <SelectItem value="financial">Financial Lines & Casualty</SelectItem>
                      <SelectItem value="energy">Energy & Government</SelectItem>
                      <SelectItem value="hiru">HIRU - Hospitality</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="claim">Report a Claim</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Message *</label>
                  <Textarea placeholder="Tell us about your needs..." rows={4} />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="privacy" className="mt-1" />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the <a href="#" className="text-[#004E99] hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                  </label>
                </div>

                <Button className="w-full bg-[#004E99] hover:bg-[#003d7a]" size="lg">
                  Send Message
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-[#004E99]/10 text-[#004E99]">Global Presence</Badge>
            <h2 className="text-3xl font-bold text-[#051A2D]">Our Offices</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { city: "Miami (HQ)", flag: "🇺🇸", phone: "+1 786 539 5217" },
              { city: "Mexico City", flag: "🇲🇽", phone: "+52 55 2457 0874" },
              { city: "Cancún", flag: "🇲🇽", phone: "+52 998 123 4567" },
              { city: "Bogotá", flag: "🇨🇴", phone: "+57 1 234 5678" },
              { city: "Quito", flag: "🇪🇨", phone: "+593 2 234 5678" },
              { city: "London", flag: "🇬🇧", phone: "+44 203 713 4567" },
            ].map((office, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                <span className="text-2xl">{office.flag}</span>
                <div className="font-semibold text-[#051A2D] mt-2">{office.city}</div>
                <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-sm text-[#004E99] hover:underline">{office.phone}</a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-[#004E99] text-[#004E99]" asChild>
              <Link href="/locations">View All Locations</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
