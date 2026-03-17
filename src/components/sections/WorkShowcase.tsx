import { useState } from 'react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { ProjectModal } from '../ui/ProjectModal'
import { PROJECTS, type Project } from '../../lib/constants'

export function WorkShowcase() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <>
      <SectionWrapper className="bg-forge-light">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-forge-dark mb-4">
            Work we've done
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Every project is built for a specific business. Here are a few examples.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {PROJECTS.map(project => (
            <button
              key={project.id}
              onClick={() => setActive(project)}
              className="group w-56"
            >
              <div className="bg-white rounded-3xl p-8 flex flex-col items-center gap-4 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-white hover:border-forge-mid/20">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-50">
                  <img
                    src={project.logo}
                    alt={project.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-forge-dark">{project.label}</p>
                  <p className="text-xs text-forge-mid mt-1 font-medium">View screenshots →</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </SectionWrapper>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  )
}
