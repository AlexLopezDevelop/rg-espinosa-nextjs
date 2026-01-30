import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#051A2D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#004E99] via-[#22A9FF] to-[#FFB703] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4L12 20L20 4" />
                </svg>
              </div>
              <span className="text-lg font-bold">R&G Espinosa</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              International insurance adjusters delivering local knowledge
              with international standards since 2005.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/60 text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-white/60 text-sm hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="text-white/60 text-sm hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-white/60 text-sm hover:text-white transition-colors">Property & Engineering</Link></li>
              <li><Link href="/services" className="text-white/60 text-sm hover:text-white transition-colors">Financial Lines</Link></li>
              <li><Link href="/services" className="text-white/60 text-sm hover:text-white transition-colors">Energy & Government</Link></li>
              <li><Link href="/services" className="text-white/60 text-sm hover:text-white transition-colors">HIRU - Hospitality</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><Link href="/locations" className="text-white/60 text-sm hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="/contact" className="text-white/60 text-sm hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Report a Claim</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 R&G Espinosa International Adjusters. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <span>ISO 27001</span>
            <span>CILA</span>
            <span>AICLA</span>
            <span>IBA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
