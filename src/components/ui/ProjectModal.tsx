import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { type Project } from '../../lib/constants'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [slide, setSlide] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  // Reset slide + lightbox when project changes
  useEffect(() => { setSlide(0); setLightbox(false) }, [project])

  const prev = useCallback(() =>
    setSlide(s => (s - 1 + (project?.screenshots.length ?? 1)) % (project?.screenshots.length ?? 1)),
    [project]
  )
  const next = useCallback(() =>
    setSlide(s => (s + 1) % (project?.screenshots.length ?? 1)),
    [project]
  )

  useEffect(() => {
    if (!project) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') lightbox ? setLightbox(false) : onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [project, onClose, prev, next, lightbox])

  if (!project) return null

  const total = project.screenshots.length

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div>
              <h3 className="font-bold text-forge-dark text-lg">{project.label}</h3>
              <p className="text-sm text-gray-400 mt-0.5">{project.tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* Image area */}
          <div
            className="relative bg-gray-50 aspect-video flex items-center justify-center overflow-hidden cursor-zoom-in"
            onClick={() => setLightbox(true)}
          >
            <img
              key={slide}
              src={project.screenshots[slide]}
              alt={`${project.label} screenshot ${slide + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Expand hint */}
            <div className="absolute top-2 right-2 w-7 h-7 bg-black/30 hover:bg-black/50 rounded-lg flex items-center justify-center transition-colors pointer-events-none">
              <Maximize2 size={13} className="text-white" />
            </div>

            {total > 1 && (
              <>
                <button
                  onClick={e => { e.stopPropagation(); prev() }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white rounded-full shadow flex items-center justify-center transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={e => { e.stopPropagation(); next() }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white rounded-full shadow flex items-center justify-center transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>

          {/* Dot indicators */}
          {total > 1 && (
            <div className="flex items-center justify-center gap-2 py-4">
              {project.screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Go to screenshot ${i + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    i === slide
                      ? 'w-5 h-2 bg-forge-mid'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <X size={18} className="text-white" />
          </button>

          <img
            src={project.screenshots[slide]}
            alt={`${project.label} screenshot ${slide + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          />

          {total > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={22} className="text-white" />
              </button>
              <button
                onClick={e => { e.stopPropagation(); next() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={22} className="text-white" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
