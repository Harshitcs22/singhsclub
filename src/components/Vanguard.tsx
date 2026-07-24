'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const stats = [
  { value: '10+', label: 'Years of Legacy', image: '/images/legacy_bg_new.jpg' },
  { value: '100+', label: 'Armed Forces Recruits', image: '/images/army_bg_4k.png' },
  { value: '∞', label: 'Countless Champions', image: '/images/champions_bg_4k.png' },
]

export default function Vanguard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)

  return (
    <section id="legacy" className="relative w-full pt-32 pb-48 bg-[var(--color-onyx)] overflow-hidden">
      {/* Background Hover Images */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: hoveredIndex === i ? 0.6 : 0, 
              scale: hoveredIndex === i ? 1 : 1.05 
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={stat.image!} 
              alt={stat.label} 
              fill 
              sizes="100vw"
              quality={75}
              className="object-cover grayscale mix-blend-lighten" 
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-onyx)] via-transparent to-[var(--color-onyx)] opacity-80" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-24 md:gap-32">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="group flex flex-col items-center justify-center cursor-default"
            onHoverStart={() => setHoveredIndex(i)}
            onClick={() => setHoveredIndex(i)}
            onViewportEnter={() => setHoveredIndex(i)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
          >
            <h2 className="font-sans font-bold text-7xl md:text-9xl lg:text-[10rem] text-[var(--color-silver)] tracking-tighter transition-all duration-500 group-hover:text-white group-hover:scale-105 drop-shadow-[0_0_15px_rgba(224,224,224,0)] group-hover:drop-shadow-[0_0_30px_rgba(224,224,224,0.4)]">
              {stat.value}
            </h2>
            <p className="font-serif text-[var(--color-silver-dim)] text-xl md:text-3xl mt-4 tracking-wide group-hover:text-[var(--color-silver)] transition-colors duration-500">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
