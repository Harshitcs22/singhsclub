'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { useState } from 'react'
import Image from 'next/image'
import PurchaseModal from './PurchaseModal'

const products = [
  {
    name: "The Official Stealth Jersey",
    description: "Base: Matte Black / Graphics: Liquid Silver Lion and Crest",
    frontImage: "/images/stealth_jersey_final.png",
    backImage: null
  },
  {
    name: "Elite Running Shoes",
    description: "Matte Black & Neon Chassis. Zombie 'S' Signature Graphic.",
    frontImage: "/images/shoes_dark.png",
    backImage: null
  }
]

function TiltCard({ frontImage, backImage }: { frontImage: string | null, backImage: string | null }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [showBack, setShowBack] = React.useState(false)

  React.useEffect(() => {
    if (!backImage) return
    const interval = setInterval(() => {
      setShowBack(prev => !prev)
    }, 4000)
    return () => clearInterval(interval)
  }, [backImage])

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-[4/5] max-w-sm mx-auto flex items-center justify-center cursor-crosshair group"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-4 bg-transparent group-hover:bg-[var(--color-onyx-light)]/30 border border-[var(--color-silver-dim)]/10 group-hover:border-[var(--color-silver-dim)]/40 transition-all duration-700 rounded-sm flex items-center justify-center overflow-hidden"
      >
        {frontImage ? (
          <>
            <Image 
              src={frontImage} 
              alt="Product Front" 
              fill 
              className={`object-cover transition-all duration-[3000ms] ease-in-out ${showBack ? 'opacity-0 scale-100' : 'opacity-100 scale-105'}`} 
              priority
            />
            {backImage && (
              <Image 
                src={backImage} 
                alt="Product Back" 
                fill 
                className={`object-cover absolute inset-0 transition-all duration-[3000ms] ease-in-out ${showBack ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`} 
                priority
              />
            )}
          </>
        ) : (
          <span className="font-sans text-[var(--color-silver-dim)] uppercase tracking-widest text-sm opacity-50">
            [ 4K Render Placeholder ]
          </span>
        )}
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[var(--color-silver-dim)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>
    </motion.div>
  )
}

export default function Arsenal() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  return (
    <section id="arsenal" className="relative w-full py-32 bg-[var(--color-onyx)]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="font-serif text-[var(--color-silver)] text-4xl md:text-6xl tracking-wide mb-4">
            The Arsenal
          </h2>
          <p className="font-sans text-[var(--color-silver-dim)] uppercase tracking-widest text-sm max-w-md">
            Pro-Shop Exhibition
          </p>
        </motion.div>

        {/* Direct Forge Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center border-t border-b border-[var(--color-silver-dim)]/20 py-12 px-6"
        >
          <h3 className="font-serif text-[var(--color-silver)] text-2xl md:text-3xl tracking-widest mb-6 uppercase">
            Direct From The Forge.
          </h3>
          <p className="font-sans text-[var(--color-silver-dim)] text-sm md:text-base leading-relaxed tracking-wide">
            Engineered directly at the manufacturing units, bypassing the noise. We bring elite-grade performance wear straight to the youth, ensuring everyone has access to the highest tier of gear. We build exactly what an athlete demands.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {products.map((product, i) => (
            <div key={i} className="flex flex-col items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.2 }}
                className="w-full"
              >
                <TiltCard frontImage={product.frontImage} backImage={product.backImage} />
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 + (i * 0.2) }}
              >
                <h3 className="font-serif text-[var(--color-silver)] text-xl md:text-2xl tracking-wider mb-2">
                  {product.name}
                </h3>
                <p className="font-sans text-[var(--color-silver-dim)] uppercase tracking-wider text-[10px] md:text-xs max-w-sm mx-auto mb-6 h-8">
                  {product.description}
                </p>
                
                <button 
                  onClick={() => setSelectedProduct(product.name)}
                  className="px-8 py-3 bg-transparent text-[var(--color-silver)] font-sans uppercase tracking-widest text-xs border border-[var(--color-silver-dim)] hover:border-[var(--color-chrome)] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Acquire
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <PurchaseModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        productName={selectedProduct || ''} 
      />
    </section>
  )
}
