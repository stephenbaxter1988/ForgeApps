import { Button } from '../ui/Button'
import { COPY } from '../../lib/constants'
import { ArrowRight } from 'lucide-react'

interface FinalCTAProps {
  onBookClick: () => void
}

export function FinalCTA({ onBookClick }: FinalCTAProps) {
  return (
    <section id="booking" className="bg-forge-dark py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
          {COPY.finalCta.heading}
        </h2>
        <Button onClick={onBookClick} variant="white" className="text-base px-8 py-4 gap-2">
          {COPY.finalCta.cta}
          <ArrowRight size={18} />
        </Button>
        <p className="mt-6 text-white/40 text-sm">
          Free. No commitment. Just a conversation.
        </p>
      </div>
    </section>
  )
}
