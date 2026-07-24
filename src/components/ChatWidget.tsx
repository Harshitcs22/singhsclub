'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <>
      {/* 
        This is the custom UI Wrapper for the AI Chat. 
        When you integrate your 3rd-party script (like Chatbase or Botpress API),
        you can map its message state and submit handlers directly into this component.
      */}
      <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end">
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 w-[350px] sm:w-[400px] h-[500px] bg-black border border-[var(--color-silver-dim)]/20 shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-silver-dim)]/20 bg-[#050505]">
                <h3 className="font-sans text-[var(--color-silver-dim)] uppercase tracking-widest text-xs font-semibold">
                  Singhs Club AI Guide
                </h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--color-silver-dim)] hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Messages Area (Placeholder) */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar bg-black">
                {/* AI Message */}
                <div className="flex flex-col items-start max-w-[85%]">
                  <span className="text-[10px] text-[var(--color-silver-dim)] uppercase tracking-widest mb-2 ml-1">AI Guide</span>
                  <div className="bg-transparent text-[var(--color-silver)] font-sans text-sm leading-relaxed">
                    Welcome to Singhs Club. I am the digital vanguard. Do you seek knowledge about enlistment, the legacy, or our arsenal?
                  </div>
                </div>

                {/* User Message */}
                <div className="flex flex-col items-end self-end max-w-[85%]">
                  <span className="text-[10px] text-[var(--color-silver-dim)] uppercase tracking-widest mb-2 mr-1">You</span>
                  <div className="bg-[#1A1A1A] text-[var(--color-silver)] font-sans text-sm leading-relaxed py-3 px-4 rounded-sm border border-[var(--color-silver-dim)]/10">
                    Tell me about the elite track spikes.
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-[#050505] border-t border-[var(--color-silver-dim)]/20">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault()
                    setMessage('') // Clear on submit for placeholder
                  }} 
                  className="relative flex items-center"
                >
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about enlistment, training, or the legacy..."
                    className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/30 py-3 pl-2 pr-10 text-[var(--color-silver)] font-sans text-xs focus:outline-none focus:border-[var(--color-chrome)] transition-colors duration-300 placeholder:text-[#4A4A4A]"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-2 text-[var(--color-silver-dim)] hover:text-[var(--color-chrome)] transition-colors cursor-pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                    </svg>
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[#0A0A0A] border border-[#E0E0E0] flex items-center justify-center shadow-[0_0_15px_rgba(224,224,224,0)] hover:shadow-[0_0_20px_rgba(224,224,224,0.3)] transition-shadow duration-500 cursor-pointer relative group"
        >
          {/* Subtle Inner Glow on Hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {isOpen ? (
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E0E0E0" strokeWidth="1.5" className="relative z-10">
               <line x1="18" y1="6" x2="6" y2="18" />
               <line x1="6" y1="6" x2="18" y2="18" />
             </svg>
          ) : (
            // Sleek S Monogram / Spark Icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E0E0E0" strokeWidth="1.5" className="relative z-10 group-hover:stroke-white transition-colors duration-300">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" strokeLinejoin="round"/>
            </svg>
          )}
        </motion.button>
      </div>
    </>
  )
}
