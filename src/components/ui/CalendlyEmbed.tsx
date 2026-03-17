import { useCalendlyEventListener, PopupModal } from 'react-calendly'
import { CALENDLY_URL } from '../../lib/constants'

interface CalendlyEmbedProps {
  isOpen: boolean
  onClose: () => void
}

export function CalendlyEmbed({ isOpen, onClose }: CalendlyEmbedProps) {
  useCalendlyEventListener({
    onEventScheduled: () => {
      // Calendly booking confirmed — extend here with analytics if needed
    },
  })

  return (
    <PopupModal
      url={CALENDLY_URL}
      open={isOpen}
      onModalClose={onClose}
      rootElement={document.getElementById('root')!}
    />
  )
}
