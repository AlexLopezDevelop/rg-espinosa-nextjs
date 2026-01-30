import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const benefits = [
  { title: "Competitive Salary", desc: "Market-leading compensation with performance bonuses", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "blue" },
  { title: "Continuous Training", desc: "Professional development and certifications support", icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5", color: "cyan" },
  { title: "Global Exposure", desc: "Work on international claims with travel opportunities", icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418", color: "orange" },
  { title: "Health Coverage", desc: "Comprehensive health, dental and vision insurance", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z", color: "gold" },
  { title: "Flexible Work", desc: "Hybrid options and flexible schedules", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25", color: "blue" },
  { title: "Great Culture", desc: "Collaborative environment with team events", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z", color: "cyan" },
];

const positions = [
  { title: "Senior Property Adjuster", location: "Miami, FL", type: "Full-time", experience: "5+ years", desc: "Handle complex property and engineering claims across the Americas.", badge: null },
  { title: "Financial Lines Specialist", location: "Mexico City", type: "Full-time", experience: "3+ years", desc: "Specialize in cyber, D&O, and professional indemnity claims.", badge: null },
  { title: "HIRU Claims Coordinator", location: "Cancún", type: "Full-time", experience: "2+ years", desc: "Join our specialized hospitality unit handling hotel and resort claims.", badge: "HIRU Unit" },
  { title: "Junior Adjuster", location: "Bogotá", type: "Full-time", experience: "Entry Level", desc: "Start your career in insurance adjusting with comprehensive training.", badge: null },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-500 hover:text-[#004E99]">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#004E99]">Careers</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#051A2D] mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Build your career with a leading international insurance adjusting firm. We&apos;re always looking for talented professionals.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-[#004E99]/10 text-[#004E99]">Why R&G Espinosa</Badge>
              <h2 className="text-3xl font-bold text-[#051A2D] mb-6">Why Work at R&G Espinosa?</h2>
              <p className="text-gray-600 mb-4">
                At R&G Espinosa, we believe our people are our greatest asset. We foster a collaborative
                environment where talent is recognized, growth is encouraged, and excellence is rewarded.
              </p>
              <p className="text-gray-600">
                Join a team of 64+ professionals across 13+ offices worldwide, working with leading insurers
                and handling diverse, challenging claims across multiple industries.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                alt="Team collaboration"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-[#004E99]/10 text-[#004E99]">Benefits & Perks</Badge>
            <h2 className="text-3xl font-bold text-[#051A2D]">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  benefit.color === "blue" ? "bg-[#004E99]/10" :
                  benefit.color === "cyan" ? "bg-[#22A9FF]/10" :
                  benefit.color === "orange" ? "bg-orange-100" : "bg-yellow-100"
                }`}>
                  <svg className={`w-6 h-6 ${
                    benefit.color === "blue" ? "text-[#004E99]" :
                    benefit.color === "cyan" ? "text-[#22A9FF]" :
                    benefit.color === "orange" ? "text-orange-500" : "text-yellow-600"
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#051A2D] mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-[#004E99]/10 text-[#004E99]">Open Positions</Badge>
            <h2 className="text-3xl font-bold text-[#051A2D]">Current Opportunities</h2>
          </div>

          <div className="space-y-4">
            {positions.map((position, i) => (
              <div key={i} className={`bg-white rounded-xl p-6 border ${position.badge ? "border-orange-200" : "border-gray-200"} flex flex-col md:flex-row md:items-center justify-between gap-4`}>
                <div>
                  {position.badge && <Badge className="bg-orange-500 mb-2">{position.badge}</Badge>}
                  <h4 className="font-semibold text-lg text-[#051A2D]">{position.title}</h4>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {position.location}
                    </span>
                    <span>{position.type}</span>
                    <span>{position.experience}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{position.desc}</p>
                </div>
                <Button className="bg-[#004E99] hover:bg-[#003d7a] shrink-0">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="secondary" className="mb-4 bg-[#004E99]/10 text-[#004E99]">Apply Now</Badge>
              <h2 className="text-3xl font-bold text-[#051A2D] mb-4">Submit Your Application</h2>
              <p className="text-gray-600 mb-8">
                Don&apos;t see a position that matches? Submit your CV and we&apos;ll keep you in mind for future opportunities.
              </p>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-[#051A2D] mb-4">Our Hiring Process</h4>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Submit Your CV", desc: "Complete the form with your information" },
                    { step: "2", title: "Initial Review", desc: "Our HR team reviews your application" },
                    { step: "3", title: "Interview Process", desc: "Meet with hiring managers and team" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#004E99] text-white flex items-center justify-center text-sm font-semibold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-medium text-[#051A2D]">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-[#051A2D] mb-6">Application Form</h3>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">First Name *</label>
                    <Input />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Last Name *</label>
                    <Input />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email *</label>
                    <Input type="email" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Phone *</label>
                    <Input type="tel" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Position of Interest *</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="senior-property">Senior Property Adjuster - Miami</SelectItem>
                      <SelectItem value="financial">Financial Lines Specialist - Mexico City</SelectItem>
                      <SelectItem value="hiru">HIRU Claims Coordinator - Cancún</SelectItem>
                      <SelectItem value="junior">Junior Adjuster - Bogotá</SelectItem>
                      <SelectItem value="general">General Application</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Upload CV *</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#004E99]/50 transition-colors cursor-pointer">
                    <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                    <span className="text-sm text-gray-600">Click to upload or drag & drop</span>
                    <div className="text-xs text-gray-400 mt-1">PDF or DOC (Max 5MB)</div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Cover Letter</label>
                  <Textarea placeholder="Tell us about yourself..." rows={3} />
                </div>

                <Button className="w-full bg-[#004E99] hover:bg-[#003d7a]" size="lg">
                  Submit Application
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
