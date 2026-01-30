import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const leaders = [
  { name: "Roberto Espinosa", title: "President & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop", bio: "With over 30 years of experience in the insurance industry, Roberto founded R&G Espinosa with a vision to deliver world-class claims adjusting services across the Americas." },
  { name: "Gustavo Espinosa", title: "Managing Partner", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", bio: "Gustavo brings extensive expertise in complex claims management, overseeing operations across multiple jurisdictions." },
  { name: "Alfredo Espinosa", title: "Managing Director", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop", bio: "Alfredo specializes in energy and government claims, bringing over 25 years of experience in these complex sectors." },
];

const team = [
  { name: "Juan Rodriguez", title: "Senior Adjuster", location: "Miami, FL", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
  { name: "Maria Garcia", title: "Claims Manager", location: "Miami, FL", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" },
  { name: "Carlos Hernández", title: "Regional Director", location: "Mexico City", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
  { name: "Laura Pérez", title: "Senior Adjuster", location: "Mexico City", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop" },
  { name: "Andrés Martínez", title: "Country Manager", location: "Bogotá", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" },
  { name: "James Smith", title: "UK Operations Director", location: "London", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" },
  { name: "Diana Córdoba", title: "Senior Adjuster", location: "Quito", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&h=200&fit=crop" },
  { name: "Ricardo Vélez", title: "Regional Manager", location: "San Juan", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop" },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#051A2D] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">Our Team</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Meet the experienced professionals behind R&G Espinosa. 64+ experts across 13+ offices worldwide.
          </p>
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
              { number: "8", label: "Countries" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-[#004E99]">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#051A2D] mb-12">Leadership Team</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <div key={i} className="border border-gray-200 rounded-sm overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#051A2D]">{leader.name}</h3>
                  <span className="text-sm text-[#004E99] font-medium">{leader.title}</span>
                  <p className="text-sm text-gray-600 mt-3">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#051A2D] mb-12">Our Professionals</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={member.image} alt={member.name} width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-[#051A2D]">{member.name}</h4>
                <span className="text-sm text-gray-500">{member.title}</span>
                <div className="text-xs text-[#004E99] mt-1">{member.location}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <span className="text-sm text-gray-500">Showing 8 of 64 team members</span>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-[#004E99]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Build Your Career With Us</h2>
          <p className="text-white/80 mb-8">
            We&apos;re always looking for talented professionals who share our commitment to excellence.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-[#004E99] hover:bg-gray-100" asChild>
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
