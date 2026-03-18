import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { COPY } from '../../lib/constants'

interface NavProps {
  onBookClick: () => void
  onContactClick: () => void
}

export function Nav({ onBookClick, onContactClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Show nav background + logo once user scrolls past the hero logo area
    const handleScroll = () => setScrolled(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" aria-label="ForgeApps home" className={`transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <img
            src="/img/logo-removebg-preview.png"
            alt="ForgeApps"
            className="h-[4.5rem] w-auto"
          />
        </a>
        <div className={`flex items-center gap-3 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button
            onClick={onContactClick}
            className="text-sm text-gray-500 hover:text-forge-dark underline underline-offset-4 transition-colors cursor-pointer"
          >
            Contact us
          </button>
          <Button onClick={onBookClick} variant="primary">
            {COPY.nav.cta}
          </Button>
        </div>
      </div>
    </nav>
  )
}
