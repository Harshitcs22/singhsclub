'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PreLoader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide preloader after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 1000) // Call onComplete after fade out
    }, 2500)
    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible && typeof window !== 'undefined') return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_10px_rgba(224,224,224,0.5)]"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="var(--color-silver)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.path
          d="M35 50 L50 30 L65 50 L50 70 Z"
          stroke="var(--color-silver)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
        />
      </motion.svg>
    </motion.div>
  )
}
