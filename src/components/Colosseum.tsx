'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const actionShots = [
  '/images/action_1.jpeg',
  '/images/action_2.jpeg',
  '/images/action_3.jpeg',
  '/images/action_4.jpeg',
  '/images/action_5.jpeg',
  '/images/action_6.jpeg',
  '/images/action_7.jpeg',
  '/images/action_8.jpeg',
]

export default function Colosseum() {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <section className="relative w-full py-32 bg-[#050505] overflow-hidden">
      
      {/* Coming Soon Section */}
      <div className="container mx-auto px-6 md:px-12 mb-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-[var(--color-silver)] text-2xl md:text-3xl tracking-wide mb-4">
            Next Annual Meet
          </h2>
          <p className="font-sans text-[var(--color-silver-dim)] text-3xl md:text-5xl font-light tracking-[0.3em] uppercase">
            Coming Soon
          </p>
        </motion.div>

        {/* INFO Button */}
        <div className="relative mt-10 flex flex-col items-center">
          <button
            onClick={() => setShowInfo(prev => !prev)}
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
            className="w-9 h-9 rounded-full border border-[var(--color-silver-dim)]/40 flex items-center justify-center text-[var(--color-silver-dim)] hover:border-[var(--color-chrome)] hover:text-white hover:shadow-[0_0_15px_rgba(192,192,192,0.25)] transition-all duration-500 cursor-pointer"
            aria-label="Tournament Information"
          >
            <span className="font-serif italic text-sm leading-none select-none">i</span>
          </button>

          {/* Tooltip */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-14 w-80 md:w-96 bg-[#0c0c0c] border border-[var(--color-silver-dim)]/20 p-6 z-50 backdrop-blur-sm shadow-2xl"
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
              >
                {/* Subtle top notch */}
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-[var(--color-chrome)] to-transparent" />
                
                <h4 className="font-sans text-[var(--color-silver)] uppercase tracking-[0.25em] text-[11px] font-semibold mb-3">
                  An Annual Proving Ground.
                </h4>
                <p className="font-sans text-[var(--color-silver-dim)] text-xs md:text-[13px] leading-[1.5] tracking-wide">
                  Every year, Singhs Club hosts elite athletic tournaments across all categories and events. Top athletes from all over India converge here to compete. Official dates, rosters, and registration details for the upcoming meet will be updated soon.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full relative py-12 flex items-center bg-[#0a0a0a] border-y border-[var(--color-silver-dim)]/10">
        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 60, repeat: Infinity }}
        >
          {/* Double array for seamless looping */}
          {[...actionShots, ...actionShots].map((src, i) => (
            <div 
              key={i} 
              className="relative w-72 md:w-96 aspect-[3/2] flex-shrink-0 bg-black overflow-hidden group border border-[var(--color-silver-dim)]/10"
            >
              <Image 
                src={src} 
                alt={`Action Shot ${i}`} 
                fill 
                className="object-cover grayscale contrast-125 brightness-[0.6] group-hover:grayscale-[0.2] group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none opacity-100 group-hover:opacity-40 transition-opacity duration-700" />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
