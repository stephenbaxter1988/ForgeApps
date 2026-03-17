import { ClipboardList, Users, CalendarDays, Settings2 } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { COPY } from '../../lib/constants'

const icons = [ClipboardList, Users, CalendarDays, Settings2]

export function WhatYouDo() {
  return (
    <SectionWrapper>
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-forge-dark mb-4">
          {COPY.whatYouDo.heading}
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">{COPY.whatYouDo.subtext}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {COPY.whatYouDo.features.map((feature, i) => {
          const Icon = icons[i]
          return (
            <div
              key={feature.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-11 h-11 bg-forge-light rounded-xl flex items-center justify-center mb-4">
                <Icon size={22} className="text-forge-mid" />
              </div>
              <h3 className="font-semibold text-forge-dark mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
