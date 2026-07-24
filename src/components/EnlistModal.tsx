'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, FormEvent } from 'react'

interface EnlistModalProps {
  isOpen: boolean
  onClose: () => void
}

// ⚠️ REPLACE WITH COACH'S ACTUAL WHATSAPP NUMBER (with country code, no + sign)
const WHATSAPP_NUMBER = '916283849492'

export default function EnlistModal({ isOpen, onClose }: EnlistModalProps) {
  const [form, setForm] = useState({
    name: '',
    age: '',
    discipline: '',
    location: '',
    message: '',
  })

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const text = `⚡ *NEW ATHLETE ENLISTMENT* ⚡
*Name:* ${form.name}
*Age:* ${form.age}
*Discipline:* ${form.discipline}
*Location:* ${form.location}
*Message:* ${form.message}`

    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')

    // Reset form after submission
    setForm({ name: '', age: '', discipline: '', location: '', message: '' })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[999] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg mx-6 bg-[#0a0a0a] border border-[var(--color-silver-dim)]/15 p-8 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-[var(--color-silver-dim)] hover:text-white transition-colors duration-300 cursor-pointer"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="2" y1="2" x2="18" y2="18" />
                <line x1="18" y1="2" x2="2" y2="18" />
              </svg>
            </button>

            {/* Heading */}
            <h2 className="font-serif text-[var(--color-silver)] text-3xl md:text-4xl tracking-wide mb-2">
              Submit Your Dossier
            </h2>
            <p className="font-sans text-[var(--color-silver-dim)] uppercase tracking-widest text-[10px] mb-10">
              Begin The Doctrine
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/30 py-3 text-[var(--color-silver)] font-sans tracking-wide text-sm focus:outline-none focus:border-[var(--color-chrome)] transition-colors duration-300 peer placeholder-transparent"
                    placeholder="Full Name"
                    id="enlist-name"
                  />
                  <label
                    htmlFor="enlist-name"
                    className="absolute left-0 -top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-[10px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-chrome)]"
                  >
                    Full Name
                  </label>
                </div>

                {/* Age */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={form.age}
                    onChange={(e) => handleChange('age', e.target.value)}
                    className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/30 py-3 text-[var(--color-silver)] font-sans tracking-wide text-sm focus:outline-none focus:border-[var(--color-chrome)] transition-colors duration-300 peer placeholder-transparent"
                    placeholder="Age"
                    id="enlist-age"
                  />
                  <label
                    htmlFor="enlist-age"
                    className="absolute left-0 -top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-[10px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-chrome)]"
                  >
                    Age
                  </label>
                </div>

                {/* Athletic Discipline */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={form.discipline}
                    onChange={(e) => handleChange('discipline', e.target.value)}
                    className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/30 py-3 text-[var(--color-silver)] font-sans tracking-wide text-sm focus:outline-none focus:border-[var(--color-chrome)] transition-colors duration-300 peer placeholder-transparent"
                    placeholder="Discipline"
                    id="enlist-discipline"
                  />
                  <label
                    htmlFor="enlist-discipline"
                    className="absolute left-0 -top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-[10px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-chrome)]"
                  >
                    Discipline (e.g. Sprints, Throws)
                  </label>
                </div>

                {/* City / Village */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={form.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/30 py-3 text-[var(--color-silver)] font-sans tracking-wide text-sm focus:outline-none focus:border-[var(--color-chrome)] transition-colors duration-300 peer placeholder-transparent"
                    placeholder="City / Village"
                    id="enlist-location"
                  />
                  <label
                    htmlFor="enlist-location"
                    className="absolute left-0 -top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-[10px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-chrome)]"
                  >
                    City / Village
                  </label>
                </div>
              </div>

              {/* Message / Motivation */}
              <div className="relative mt-2">
                <textarea
                  rows={1}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/30 py-3 text-[var(--color-silver)] font-sans tracking-wide text-sm focus:outline-none focus:border-[var(--color-chrome)] transition-colors duration-300 resize-none peer placeholder-transparent"
                  placeholder="Message"
                  id="enlist-message"
                />
                <label
                  htmlFor="enlist-message"
                  className="absolute left-0 -top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-[10px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-chrome)]"
                >
                  Brief Message / Motivation (Optional)
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 py-4 bg-[var(--color-chrome)] text-black font-sans uppercase tracking-[0.25em] text-sm font-semibold hover:bg-white transition-colors duration-300 cursor-pointer"
              >
                Transmit Dossier
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
