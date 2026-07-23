'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/images/ethos_1_4k.png',
  '/images/ethos_2_4k.png',
  '/images/ethos_3_4k.png',
]

export default function Ethos() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Change every 4 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-[var(--color-onyx)] flex items-center py-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">

        {/* Left Side: Crossfade Image Slideshow */}
        <motion.div
          className="w-full md:w-1/2 aspect-[4/5] relative bg-[#111111] overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Crossfade Images */}
          <AnimatePresence mode="sync">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 z-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={images[currentIndex]}
                alt={`Singhs Athletics Club - ${currentIndex + 1}`}
                fill
                className="object-cover object-center grayscale-[30%]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Dramatic shadow overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-onyx)] via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-onyx)] via-transparent to-transparent z-10 opacity-60" />

          {/* Slide indicator dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${i === currentIndex
                    ? 'bg-[var(--color-silver)] w-6'
                    : 'bg-[var(--color-silver-dim)]/40'
                  }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Side: Floating Silver Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <p className="font-serif text-[var(--color-silver)] text-3xl md:text-5xl leading-snug tracking-wide mb-8">
              Operating on the highest principles of Seva.
            </p>
            <p className="font-sans text-[var(--color-silver-dim)] text-lg md:text-xl leading-relaxed uppercase tracking-widest max-w-lg">
              We provide elite, zero-cost coaching to dedicated aspirants, transforming raw potential into national pride.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
