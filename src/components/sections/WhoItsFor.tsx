import { SectionWrapper } from '../ui/SectionWrapper'
import { COPY } from '../../lib/constants'

export function WhoItsFor() {
  return (
    <SectionWrapper className="bg-forge-dark">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {COPY.whoItsFor.heading}
        </h2>
        <p className="text-white/60 max-w-lg mx-auto">{COPY.whoItsFor.subtext}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {COPY.whoItsFor.businesses.map(name => (
          <span
            key={name}
            className="px-5 py-2.5 rounded-full bg-white/10 text-white/80 text-sm font-medium border border-white/10 hover:bg-white/20 hover:text-white transition-colors duration-200"
          >
            {name}
          </span>
        ))}
        <span className="px-5 py-2.5 rounded-full bg-forge-mid/30 text-forge-mid text-sm font-medium border border-forge-mid/30">
          and anyone else with a problem to solve
        </span>
      </div>
    </SectionWrapper>
  )
}
