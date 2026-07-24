'use client'

import { useState } from 'react'
import PreLoader from '@/components/PreLoader'
import Hero from '@/components/Hero'
import Ethos from '@/components/Ethos'
import Vanguard from '@/components/Vanguard'
import Arsenal from '@/components/Arsenal'
import CoachMessage from '@/components/CoachMessage'
import Colosseum from '@/components/Colosseum'
import Enlistment from '@/components/Enlistment'
import Footer from '@/components/Footer'

export default function Home() {
  const [isPreLoaderComplete, setIsPreLoaderComplete] = useState(false)

  return (
    <main className="bg-[var(--color-onyx)] min-h-screen selection:bg-[var(--color-chrome)] selection:text-black">
      <PreLoader onComplete={() => setIsPreLoaderComplete(true)} />
      
      <Hero />
      <Ethos />
      <Vanguard />
      <Arsenal />
      <CoachMessage />
      <Colosseum />
      <Enlistment />
      <Footer />
    </main>
  )
}
