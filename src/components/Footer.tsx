'use client'

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] pt-24 pb-8 border-t border-[var(--color-silver-dim)]/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
        
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-[var(--color-silver)] text-xl tracking-wide">
            Singhs Athletics Club
          </h4>
          <address className="not-italic font-sans text-[var(--color-silver-dim)] text-xs uppercase tracking-widest leading-loose">
            Ground SGTB KHALSA COLLEGE <br />
            Sri Anandpur Sahib, Punjab
          </address>
        </div>

        <div className="flex flex-col gap-2 md:text-right">
          <a href="#" className="font-sans text-[var(--color-silver-dim)] hover:text-[var(--color-silver)] text-xs uppercase tracking-widest transition-colors">Operations</a>
          <a href="#" className="font-sans text-[var(--color-silver-dim)] hover:text-[var(--color-silver)] text-xs uppercase tracking-widest transition-colors">Legal</a>
          <a href="#" className="font-sans text-[var(--color-silver-dim)] hover:text-[var(--color-silver)] text-xs uppercase tracking-widest transition-colors">Contact</a>
        </div>

      </div>

      <div className="container mx-auto px-6 md:px-12 mt-24 flex justify-center md:justify-end">
        <p className="font-sans text-[#222222] text-[10px] uppercase tracking-[0.3em] select-none">
          Engineered by HindTrade AI
        </p>
      </div>
    </footer>
  )
}
