import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button, ButtonLink, IconTile, cookieBarClass, linkClass } from '@/components/brand'

const STORAGE_KEY = 'sc-gdpr-accepted'

function readAccepted() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

// Cookie consent card pinned to the bottom of the viewport until accepted (DIRECTION §9.0 chrome-cookie).
// Plain vault (no texture); on phone it rises above the buy bar when one is mounted (cookieBarClass).
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
      className={cn(
        cookieBarClass,
        'flex flex-col gap-4 max-md:px-5 md:flex-row md:items-center md:gap-5',
      )}
      role="region"
      aria-label="Cookies"
      data-section="chrome-cookie"
    >
      <IconTile icon="ti-cookie" size={40} className="hidden md:grid" />
      <p className="min-w-0 flex-1 font-sans text-meta text-on-vault-muted">
        Nous utilisons des cookies afin d’optimiser votre navigation ; en poursuivant sur ce site, vous acceptez notre{' '}
        <a href="#" className={linkClass}>
          charte de gestion des données
        </a>
        .
      </p>
      <div className="grid gap-2.5 md:flex md:shrink-0 md:items-center">
        <ButtonLink to="/conditions-dutilisation/" variant="outline-vault" size="sm" full className="md:w-auto">
          Lire
        </ButtonLink>
        <Button variant="ivory" size="sm" full className="md:w-auto" onClick={accept}>
          Accepter
        </Button>
      </div>
    </div>
  )
}
