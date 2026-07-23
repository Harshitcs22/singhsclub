'use client'

import { motion } from 'framer-motion'

export default function Enlistment() {
  return (
    <section className="relative w-full py-32 bg-[var(--color-onyx)]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="font-serif text-[var(--color-silver)] text-4xl md:text-6xl tracking-wide mb-4">
            Enlistment
          </h2>
          <p className="font-sans text-[var(--color-silver-dim)] uppercase tracking-widest text-sm">
            Begin the Doctrine. Submit your Dossier.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <input 
                type="text" 
                id="name"
                required
                className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/40 py-4 text-[var(--color-silver)] font-sans tracking-wide focus:outline-none focus:border-[var(--color-chrome)] focus:shadow-[0_1px_10px_rgba(192,192,192,0.2)] transition-all duration-300 peer"
                placeholder=" "
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-xs transition-all duration-300 peer-focus:-top-4 peer-focus:text-[var(--color-chrome)] peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]"
              >
                Full Name
              </label>
            </div>

            <div className="relative group">
              <input 
                type="text" 
                id="age"
                required
                className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/40 py-4 text-[var(--color-silver)] font-sans tracking-wide focus:outline-none focus:border-[var(--color-chrome)] focus:shadow-[0_1px_10px_rgba(192,192,192,0.2)] transition-all duration-300 peer"
                placeholder=" "
              />
              <label 
                htmlFor="age" 
                className="absolute left-0 top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-xs transition-all duration-300 peer-focus:-top-4 peer-focus:text-[var(--color-chrome)] peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]"
              >
                Age (Kids/Seniors)
              </label>
            </div>

            <div className="relative group">
              <input 
                type="text" 
                id="discipline"
                required
                className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/40 py-4 text-[var(--color-silver)] font-sans tracking-wide focus:outline-none focus:border-[var(--color-chrome)] focus:shadow-[0_1px_10px_rgba(192,192,192,0.2)] transition-all duration-300 peer"
                placeholder=" "
              />
              <label 
                htmlFor="discipline" 
                className="absolute left-0 top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-xs transition-all duration-300 peer-focus:-top-4 peer-focus:text-[var(--color-chrome)] peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]"
              >
                Discipline (e.g. 100m, Long Jump)
              </label>
            </div>

            <div className="relative group">
              <input 
                type="text" 
                id="location"
                required
                className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/40 py-4 text-[var(--color-silver)] font-sans tracking-wide focus:outline-none focus:border-[var(--color-chrome)] focus:shadow-[0_1px_10px_rgba(192,192,192,0.2)] transition-all duration-300 peer"
                placeholder=" "
              />
              <label 
                htmlFor="location" 
                className="absolute left-0 top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-xs transition-all duration-300 peer-focus:-top-4 peer-focus:text-[var(--color-chrome)] peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]"
              >
                Village / City
              </label>
            </div>
          </div>

          <div className="relative group mt-4">
            <textarea 
              id="message"
              rows={1}
              className="w-full bg-transparent border-b border-[var(--color-silver-dim)]/40 py-4 text-[var(--color-silver)] font-sans tracking-wide focus:outline-none focus:border-[var(--color-chrome)] focus:shadow-[0_1px_10px_rgba(192,192,192,0.2)] transition-all duration-300 peer resize-none"
              placeholder=" "
            />
            <label 
              htmlFor="message" 
              className="absolute left-0 top-4 text-[var(--color-silver-dim)] font-sans uppercase tracking-widest text-xs transition-all duration-300 peer-focus:-top-4 peer-focus:text-[var(--color-chrome)] peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]"
            >
              Support / Queries (Optional)
            </label>
          </div>

          <div className="mt-8 flex justify-end">
            <button 
              type="submit"
              className="w-full md:w-auto px-12 py-5 bg-[var(--color-chrome)] text-black font-sans uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors duration-300"
            >
              Submit Dossier
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
