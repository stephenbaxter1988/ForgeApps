import { Button } from '../ui/Button'
import { COPY } from '../../lib/constants'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  onBookClick: () => void
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative flex items-start justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 100%, #EAF5F1 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center pt-0 pb-20">
        <img
          src="/img/logo.png"
          alt="ForgeApps"
          className="h-64 sm:h-80 md:h-96 w-auto mx-auto mb-6"
        />

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-forge-dark leading-[1.05] tracking-tight mb-6">
          {COPY.hero.headline}
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
          {COPY.hero.subtext}
        </p>

        <Button onClick={onBookClick} className="text-base px-8 py-4 gap-2">
          {COPY.hero.cta}
          <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  )
}
