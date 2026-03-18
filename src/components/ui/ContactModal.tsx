import { useState, useEffect, type FormEvent } from 'react'
import { X, Send, CheckCircle } from 'lucide-react'
import { Button } from './Button'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setStatus('idle')
      }, 300)
    }
  }, [isOpen])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h3 className="font-bold text-forge-dark text-lg">Get in touch</h3>
            <p className="text-sm text-gray-400 mt-0.5">We'll get back to you as soon as possible.</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {status === 'sent' ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <CheckCircle size={48} className="text-forge-mid" />
              <div>
                <p className="font-semibold text-forge-dark text-lg">Message sent!</p>
                <p className="text-gray-500 text-sm mt-1">Thanks for reaching out — we'll be in touch shortly.</p>
              </div>
              <Button onClick={onClose} variant="outline" className="mt-2">Close</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-forge-dark mb-1.5">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forge-mid focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-forge-dark mb-1.5">
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="jane@yourbusiness.com"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forge-mid focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-forge-dark mb-1.5">
                  Phone number <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+44 7700 900000"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forge-mid focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-forge-dark mb-1.5">
                  What's on your mind?
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Tell us a bit about your business and what you're trying to fix..."
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forge-mid focus:border-transparent resize-none"
                />
              </div>
              {status === 'error' && (
                <p className="text-sm text-red-500">Something went wrong — please try again or email us directly.</p>
              )}
              <Button
                type="submit"
                disabled={status === 'sending'}
                className="gap-2 self-end"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
                {status !== 'sending' && <Send size={15} />}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
