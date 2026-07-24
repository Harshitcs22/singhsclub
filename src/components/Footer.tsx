'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] pt-12 pb-6 border-t border-[var(--color-silver-dim)]/10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* TOP SECTION: Brand, Details, Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          
          {/* LEFT SIDE: Brand & Contact */}
          <div className="flex flex-col gap-6 max-w-[400px]">
            
            {/* Brand Identity */}
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10 shrink-0">
                <Image 
                  src="/images/logo_silver_4k-removebg-preview.png"
                  alt="Singhs Athletics Club Crest"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="font-serif text-[var(--color-silver)] text-xl tracking-widest uppercase mt-1">
                Singh's Club
              </h4>
            </div>

            {/* Contact & Location */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-silver-dim)" strokeWidth="1.5" className="shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-sans text-[var(--color-silver-dim)] text-xs uppercase tracking-widest leading-relaxed">
                  SGTB khalsa college <br />Sri Anandpur Sahib, Punjab, 140118
                </span>
              </div>
              
              <a href="tel:+919463449242" className="flex items-center gap-4 group cursor-pointer w-fit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-silver-dim)" strokeWidth="1.5" className="shrink-0 group-hover:stroke-[var(--color-chrome)] transition-colors">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="font-sans text-[var(--color-silver-dim)] group-hover:text-[var(--color-chrome)] text-xs uppercase tracking-widest transition-colors">
                  +91 94634 49242
                </span>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: Links */}
          <div className="flex flex-col gap-2 md:text-right pt-2 md:pt-0">
            <a href="#" className="font-sans text-[var(--color-silver-dim)] hover:text-[var(--color-chrome)] text-xs uppercase tracking-widest transition-colors">Operations</a>
            <a href="#" className="font-sans text-[var(--color-silver-dim)] hover:text-[var(--color-chrome)] text-xs uppercase tracking-widest transition-colors">Legal</a>
            <a href="tel:+919463449242" className="font-sans text-[var(--color-silver-dim)] hover:text-[var(--color-chrome)] text-xs uppercase tracking-widest transition-colors">Contact</a>
          </div>

        </div>

        {/* BOTTOM BAR: Socials & Credit */}
        <div className="pt-6 border-t border-[var(--color-silver-dim)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Social Links */}
          <a 
            href="https://www.instagram.com/singhs_club_athlete?igsh=djUybGNkeWc0bDdi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 border border-[var(--color-silver-dim)]/30 rounded-sm hover:border-[var(--color-chrome)] hover:bg-white/5 transition-all duration-300 group"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-silver-dim)" strokeWidth="1.5" className="group-hover:stroke-[var(--color-chrome)] transition-colors duration-300">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* Engineering Credit */}
          <p className="font-sans text-[#4A4A4A] text-[10px] uppercase tracking-[0.3em] select-none text-center md:text-right">
            Engineered by HindTrade AI
          </p>

        </div>
      </div>
    </footer>
  )
}
