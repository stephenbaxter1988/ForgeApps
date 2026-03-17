import { Check } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { Button } from '../ui/Button'
import { COPY } from '../../lib/constants'

interface PricingProps {
  onBookClick: () => void
}

export function Pricing({ onBookClick }: PricingProps) {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-forge-dark mb-4">
          {COPY.pricing.heading}
        </h2>
        <p className="text-gray-500">{COPY.pricing.subtext}</p>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="bg-forge-dark px-8 py-6">
            <p className="text-forge-mid text-sm font-semibold uppercase tracking-widest">What you pay</p>
          </div>

          <div className="px-8 py-6 divide-y divide-gray-100">
            {COPY.pricing.items.map((item) => (
              <div key={item.label} className="py-5 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-forge-light flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-forge-mid" />
                  </div>
                  <div>
                    <p className="font-semibold text-forge-dark">{item.label}</p>
                    <p className="text-sm text-gray-400 mt-0.5">{item.note}</p>
                  </div>
                </div>
                <span className="font-bold text-forge-dark whitespace-nowrap">{item.amount}</span>
              </div>
            ))}
          </div>

          <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
            <Button onClick={onBookClick} className="w-full justify-center">
              Get started. It's free to talk.
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
