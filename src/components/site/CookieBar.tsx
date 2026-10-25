import { useState } from 'react'
import { Link } from 'react-router'
import { Cookie } from 'lucide-react'
import { buttonClasses } from '@/components/kit'

const STORAGE_KEY = 'sc-gdpr-accepted'

function readAccepted() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

// Cookie consent card pinned to the bottom-left of the viewport until accepted (bottom-right is the floating
// WhatsApp button). White card, 1px line, soft shadow.
export function CookieBar() {
  const [accepted, setAccepted] = useState(readAccepted)
  if (accepted) return null

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // Storage unavailable: still hide the bar for this visit.
    }
    setAccepted(true)
  }

  return (
    <div
      role="region"
      aria-label="Cookies"
      data-section="chrome-cookie"
      className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-line bg-canvas/95 p-4 shadow-card-hover backdrop-blur-md sm:right-auto sm:left-6 sm:bottom-6 sm:max-w-md sm:p-5"
    >
      <div className="flex items-start gap-3">
        <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
          <Cookie className="size-4.5" />
        </span>
        <p className="min-w-0 flex-1 text-sm leading-relaxed text-body">
          Nous utilisons des cookies afin d’optimiser votre navigation ; en poursuivant sur ce site, vous acceptez notre{' '}
          <Link to="/politique-de-confidentialite/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            charte de gestion des données
          </Link>
          .
        </p>
      </div>
      <div className="mt-4 flex gap-2.5 sm:justify-end">
        <Link to="/politique-de-confidentialite/" className={buttonClasses({ variant: 'outline', className: 'flex-1 sm:flex-none' })}>
          Lire
        </Link>
        <button type="button" onClick={accept} className={buttonClasses({ variant: 'brand', className: 'flex-1 sm:flex-none' })}>
          Accepter
        </button>
      </div>
    </div>
  )
}
