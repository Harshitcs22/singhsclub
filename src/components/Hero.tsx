'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center">
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/track_drone_shot.jpg"
          alt="Track Drone Shot"
          fill
          className="object-cover object-right-bottom scale-105"
          priority
        />
        {/* Violent fade to pitch black on top/left edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
      </div>

      {/* Content in the negative space */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 2 }} // Delays after preloader
          className="max-w-4xl flex flex-col items-center"
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[var(--color-silver)] leading-none tracking-tight mb-6 drop-shadow-2xl">
            SINGH'S CLUB
          </h1>

          <p className="font-sans text-[var(--color-silver-dim)] text-base md:text-lg max-w-2xl mb-12 uppercase tracking-widest leading-relaxed">
            Welcome to the premier athletic training grounds of Sri Anandpur Sahib.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md sm:max-w-none">
            <button className="group relative px-10 py-4 bg-transparent text-[var(--color-silver)] font-sans uppercase tracking-widest text-sm overflow-hidden border border-[var(--color-silver-dim)] transition-all duration-500 hover:border-[var(--color-chrome)] hover:shadow-[0_0_20px_rgba(192,192,192,0.3)] hover:text-white">
              <span className="relative z-10">Enlist Now</span>
              <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </button>

            <button className="group relative px-10 py-4 bg-transparent text-[var(--color-silver)] font-sans uppercase tracking-widest text-sm overflow-hidden border border-[var(--color-silver-dim)] transition-all duration-500 hover:border-[var(--color-chrome)] hover:shadow-[0_0_20px_rgba(192,192,192,0.3)] hover:text-white">
              <span className="relative z-10">The Arsenal</span>
              <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
