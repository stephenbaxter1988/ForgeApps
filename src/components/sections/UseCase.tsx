import { SectionWrapper } from '../ui/SectionWrapper'
import { COPY } from '../../lib/constants'

const stepColors = ['bg-red-50 text-red-600', 'bg-blue-50 text-blue-600', 'bg-green-50 text-green-600']

export function UseCase() {
  return (
    <SectionWrapper className="bg-forge-dark">
      <div className="text-center mb-14">
        <p className="text-forge-mid text-sm font-semibold uppercase tracking-widest mb-3">
          {COPY.useCase.heading}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          {COPY.useCase.business}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {COPY.useCase.steps.map((step, i) => (
          <div key={step.label} className="relative">
            {/* Connector line */}
            {i < COPY.useCase.steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-full w-8 h-px bg-white/20 z-10" />
            )}
            <div className="bg-white/10 rounded-2xl p-7 h-full border border-white/10">
              <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${stepColors[i]}`}>
                {step.label}
              </span>
              <p className="text-white/80 leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
