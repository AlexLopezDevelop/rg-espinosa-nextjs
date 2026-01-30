"use client";

import Link from "next/link";
import Image from "next/image";
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
        <Link href="/" className="flex items-center">
          <Image
            src="https://rygespinosa.com/wp-content/uploads/2023/04/main-logo-default.svg"
            alt="R&G Espinosa International Adjusters"
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-blue",
                pathname === link.href
                  ? "text-brand-blue"
                  : "text-gray-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button className="bg-brand-blue hover:bg-brand-blue-hover text-white">
          Report a Claim
        </Button>
      </div>
    </header>
  );
}
