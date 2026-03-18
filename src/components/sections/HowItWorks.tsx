import { SectionWrapper } from '../ui/SectionWrapper'
import { COPY } from '../../lib/constants'

export function HowItWorks() {
  return (
    <SectionWrapper className="bg-forge-light">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-forge-dark">
          {COPY.howItWorks.heading}
        </h2>
      </div>

      {/* Desktop: badge row with a single unbroken line */}
      <div className="hidden md:flex items-center relative mb-6">
        <div className="absolute inset-x-7 top-1/2 -translate-y-1/2 h-px bg-forge-mid/20" />
        {COPY.howItWorks.steps.map((step) => (
          <div key={step.number} className="flex-1 flex justify-center">
            <div className="w-14 h-14 rounded-2xl bg-white border border-forge-mid/20 flex items-center justify-center relative z-10">
              <span className="text-forge-mid font-extrabold text-lg">{step.number}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Text columns — shared grid for both desktop and mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {COPY.howItWorks.steps.map((step) => (
          <div key={step.number} className="text-center md:text-left">
            {/* Mobile-only badge */}
            <div className="md:hidden inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-forge-mid/20 mb-5">
              <span className="text-forge-mid font-extrabold text-lg">{step.number}</span>
            </div>
            <h3 className="font-bold text-forge-dark text-lg mb-3">{step.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
