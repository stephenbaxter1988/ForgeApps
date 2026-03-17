import { type ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  inner?: string
}

export function SectionWrapper({ children, className = '', id, inner = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className={`max-w-6xl mx-auto px-6 ${inner}`}>
        {children}
      </div>
    </section>
  )
}
