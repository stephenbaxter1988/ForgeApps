import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white'
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-forge-dark text-white hover:bg-forge-mid',
    outline: 'border-2 border-forge-dark text-forge-dark hover:bg-forge-dark hover:text-white',
    white: 'bg-white text-forge-dark hover:bg-forge-light',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
