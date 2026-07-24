'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] pt-24 pb-8 border-t border-[var(--color-silver-dim)]/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-16">
        
        {/* LEFT SIDE: Brand, Mission, Contact, Socials */}
        <div className="flex flex-col gap-8 max-w-[400px]">
          
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
              Singhs Athletics Club
            </h4>
          </div>

          {/* Mission Statement */}
          <p className="font-sans text-[var(--color-silver-dim)] text-sm leading-relaxed tracking-wide">
            Forging warriors from raw potential. Providing elite, zero-cost athletic coaching rooted in the principles of Seva and discipline.
          </p>

          {/* Contact & Location */}
          <div className="flex flex-col gap-5 mt-2">
            <div className="flex items-start gap-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-silver-dim)" strokeWidth="1.5" className="mt-0.5 shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="font-sans text-[var(--color-silver-dim)] text-xs uppercase tracking-widest leading-loose">
                Training Grounds, Village Mohiwal,<br />Sri Anandpur Sahib, Punjab
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-silver-dim)" strokeWidth="1.5" className="shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="font-sans text-[var(--color-silver-dim)] text-xs uppercase tracking-widest">
                +91 94634 49242
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-4">
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
          </div>

        </div>

        {/* RIGHT SIDE: Links */}
        <div className="flex flex-col gap-4 md:text-right pt-2 md:pt-0">
          <a href="#" className="font-sans text-[var(--color-silver-dim)] hover:text-[var(--color-chrome)] text-xs uppercase tracking-widest transition-colors">Operations</a>
          <a href="#" className="font-sans text-[var(--color-silver-dim)] hover:text-[var(--color-chrome)] text-xs uppercase tracking-widest transition-colors">Legal</a>
          <a href="#" className="font-sans text-[var(--color-silver-dim)] hover:text-[var(--color-chrome)] text-xs uppercase tracking-widest transition-colors">Contact</a>
        </div>

      </div>

      {/* Engineering Credit */}
      <div className="container mx-auto px-6 md:px-12 mt-32 flex justify-center md:justify-end">
        <p className="font-sans text-[#2A2A2A] text-[10px] uppercase tracking-[0.3em] select-none">
          Engineered by HindTrade AI
        </p>
      </div>
    </footer>
  )
}
