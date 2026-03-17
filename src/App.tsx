import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { WhatYouDo } from './components/sections/WhatYouDo'
import { WhoItsFor } from './components/sections/WhoItsFor'
import { WorkShowcase } from './components/sections/WorkShowcase'
import { UseCase } from './components/sections/UseCase'
import { HowItWorks } from './components/sections/HowItWorks'
import { Pricing } from './components/sections/Pricing'
import { FinalCTA } from './components/sections/FinalCTA'
import { CalendlyEmbed } from './components/ui/CalendlyEmbed'
import { useCalendlyModal } from './hooks/useCalendlyModal'

export default function App() {
  const { isOpen, open, close } = useCalendlyModal()

  return (
    <>
      <Nav onBookClick={open} />
      <main>
        <Hero onBookClick={open} />
        <WhatYouDo />
        <WhoItsFor />
        <WorkShowcase />
        <UseCase />
        <HowItWorks />
        <Pricing onBookClick={open} />
        <FinalCTA onBookClick={open} />
      </main>
      <Footer />
      <CalendlyEmbed isOpen={isOpen} onClose={close} />
    </>
  )
}
