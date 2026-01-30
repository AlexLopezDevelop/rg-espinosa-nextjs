import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const benefits = [
  { title: "Competitive Salary", desc: "Market-leading compensation with performance bonuses" },
  { title: "Continuous Training", desc: "Professional development and certifications support" },
  { title: "Global Exposure", desc: "Work on international claims with travel opportunities" },
  { title: "Health Coverage", desc: "Comprehensive health, dental and vision insurance" },
  { title: "Flexible Work", desc: "Hybrid options and flexible schedules" },
  { title: "Great Culture", desc: "Collaborative environment with team events" },
];

const positions = [
  { title: "Senior Property Adjuster", location: "Miami, FL", type: "Full-time", experience: "5+ years", desc: "Handle complex property and engineering claims across the Americas." },
  { title: "Financial Lines Specialist", location: "Mexico City", type: "Full-time", experience: "3+ years", desc: "Specialize in cyber, D&O, and professional indemnity claims." },
  { title: "HIRU Claims Coordinator", location: "Cancún", type: "Full-time", experience: "2+ years", desc: "Join our specialized hospitality unit handling hotel and resort claims." },
  { title: "Junior Adjuster", location: "Bogotá", type: "Full-time", experience: "Entry Level", desc: "Start your career in insurance adjusting with comprehensive training." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue" />
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/50">/</span>
            <span className="text-white font-medium">Careers</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Build your career with a leading international insurance adjusting firm.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Why Work at R&G Espinosa?</h2>
              <p className="text-gray-600 mb-4">
                At R&G Espinosa, we believe our people are our greatest asset. We foster a collaborative
                environment where talent is recognized, growth is encouraged, and excellence is rewarded.
              </p>
              <p className="text-gray-600">
                Join a team of 64+ professionals across 13+ offices worldwide, working with leading insurers
                and handling diverse, challenging claims across multiple industries.
              </p>
            </div>
            <div className="rounded-sm overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                alt="Professional career growth"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Benefits & Perks</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-brand-navy mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Current Opportunities</h2>

          <div className="space-y-4">
            {positions.map((position, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-lg text-brand-navy">{position.title}</h4>
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
                <Button className="bg-brand-blue hover:bg-brand-blue-hover shrink-0">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Submit Your Application</h2>
              <p className="text-gray-600 mb-8">
                Don&apos;t see a position that matches? Submit your CV and we&apos;ll keep you in mind for future opportunities.
              </p>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-brand-navy mb-4">Our Hiring Process</h4>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Submit Your CV", desc: "Complete the form with your information" },
                    { step: "2", title: "Initial Review", desc: "Our HR team reviews your application" },
                    { step: "3", title: "Interview Process", desc: "Meet with hiring managers and team" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded bg-brand-blue text-white flex items-center justify-center text-sm font-semibold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-medium text-brand-navy">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-brand-navy mb-6">Application Form</h3>

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
                  <div className="border border-gray-200 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
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

                <Button className="w-full bg-brand-blue hover:bg-brand-blue-hover" size="lg">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
