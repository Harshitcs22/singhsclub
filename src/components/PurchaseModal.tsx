'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, FormEvent } from 'react'

interface PurchaseModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
}

const WHATSAPP_NUMBER = '919463449242'

export default function PurchaseModal({ isOpen, onClose, productName }: PurchaseModalProps) {
  const [form, setForm] = useState({
    name: '',
    size: '',
    location: '',
    quantity: '1',
    message: '',
  })

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const text = `⚡ *NEW ARSENAL ORDER* ⚡
*Product:* ${productName}
*Name:* ${form.name}
*Size/Specs:* ${form.size}
*Quantity:* ${form.quantity}
*Location:* ${form.location}
*Message:* ${form.message}`

    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')

    // Reset form after submission
    setForm({ name: '', size: '', location: '', quantity: '1', message: '' })
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
              Acquire Gear
            </h2>
            <p className="font-sans text-[var(--color-silver-dim)] uppercase tracking-widest text-[10px] mb-10">
              {productName}
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
                    id="purchase-name"
                  />
                  <label
                    htmlFor="purchase-name"
                    className="absolute left-0 -top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-[10px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-chrome)]"
                  >
                    Full Name
                  </label>
                </div>

                {/* Size / Specs */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={form.size}
                    onChange={(e) => handleChange('size', e.target.value)}
                    className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/30 py-3 text-[var(--color-silver)] font-sans tracking-wide text-sm focus:outline-none focus:border-[var(--color-chrome)] transition-colors duration-300 peer placeholder-transparent"
                    placeholder="Size"
                    id="purchase-size"
                  />
                  <label
                    htmlFor="purchase-size"
                    className="absolute left-0 -top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-[10px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-chrome)]"
                  >
                    Size (e.g. L, UK 9)
                  </label>
                </div>

                {/* Quantity */}
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    required
                    value={form.quantity}
                    onChange={(e) => handleChange('quantity', e.target.value)}
                    className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/30 py-3 text-[var(--color-silver)] font-sans tracking-wide text-sm focus:outline-none focus:border-[var(--color-chrome)] transition-colors duration-300 peer placeholder-transparent"
                    placeholder="Quantity"
                    id="purchase-quantity"
                  />
                  <label
                    htmlFor="purchase-quantity"
                    className="absolute left-0 -top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-[10px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-chrome)]"
                  >
                    Quantity
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
                    id="purchase-location"
                  />
                  <label
                    htmlFor="purchase-location"
                    className="absolute left-0 -top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-[10px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-chrome)]"
                  >
                    Delivery Location
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
                  id="purchase-message"
                />
                <label
                  htmlFor="purchase-message"
                  className="absolute left-0 -top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-[10px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-chrome)]"
                >
                  Message / Customizations (Optional)
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 py-4 bg-[var(--color-chrome)] text-black font-sans uppercase tracking-[0.25em] text-sm font-semibold hover:bg-white transition-colors duration-300 cursor-pointer"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
