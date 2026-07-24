'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CoachMessage() {
  return (
    <section className="relative w-full py-32 bg-[var(--color-onyx)] overflow-hidden">
      {/* Subtle border separator at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-silver-dim)]/20 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
          
          {/* Column 1: Image & Glow */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            {/* Ambient Radial Glow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.25, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute bg-white blur-[120px] rounded-full aspect-square w-3/4 max-w-[400px] m-auto z-0"
            />
            
            {/* The Image */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative z-10 w-full max-w-sm aspect-[4/5] overflow-hidden rounded-sm"
            >
              <Image 
                src="/images/coach_maan.jpeg" 
                alt="Coach Pardeep Singh Maan" 
                fill 
                className="object-cover grayscale contrast-[1.1] brightness-[0.85] scale-105" 
              />
              {/* Fade edges into the matte onyx background */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[var(--color-onyx)] via-transparent to-[var(--color-onyx)] opacity-80" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[var(--color-onyx)] via-transparent to-[var(--color-onyx)] opacity-80" />
            </motion.div>
          </div>

          {/* Column 2: Typography & Emotional Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full md:w-1/2 flex flex-col justify-center text-left"
          >
            <h2 className="font-serif text-[var(--color-silver)] text-4xl md:text-5xl lg:text-6xl tracking-wide mb-8 leading-tight drop-shadow-2xl">
              Forging the Warrior Spirit.
            </h2>
            <p className="font-sans text-[var(--color-silver-dim)] text-base md:text-lg tracking-wide mb-12 leading-[1.6]">
              Rooted in the sacred, martial soil of Sri Anandpur Sahib, our mission transcends the track. We do not merely train athletes—we forge warriors. Operating strictly on the ultimate principle of Seva (selfless service), we believe that true victory is born from an unbreakable physical and spiritual discipline. We take raw, rural passion and instill the focus, respect, and relentless drive of a soldier. Here, running is a devotion.
            </p>
            
            <div className="w-full flex justify-end">
              <span className="font-serif italic text-[var(--color-silver)] text-xl md:text-2xl tracking-widest opacity-90 drop-shadow-md">
                — Coach Pardeep Singh Maan
              </span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
