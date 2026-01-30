"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#004E99] via-[#22A9FF] to-[#FFB703] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4L12 20L20 4" />
            </svg>
          </div>
          <span className="text-xl font-bold text-[#051A2D]">R&G Espinosa</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#004E99]",
                pathname === link.href
                  ? "text-[#004E99]"
                  : "text-[#051A2D]/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button className="bg-[#004E99] hover:bg-[#003d7a] text-white">
          Report a Claim
        </Button>
      </div>
    </header>
  );
}
