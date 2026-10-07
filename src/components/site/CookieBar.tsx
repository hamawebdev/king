import { useState } from 'react'
import { Link } from 'react-router'
import { CookieIcon } from './icons'

const STORAGE_KEY = 'sc-gdpr-accepted'

function readAccepted() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

// Cookie consent bar pinned to the bottom of the viewport until accepted.
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
    <div className="sc-gdpr" role="region" aria-label="Cookies" data-section="chrome-cookie">
      <div className="sc-gdpr__image">
        <CookieIcon />
      </div>
      <div className="sc-gdpr__content">
        Nous utilisons des cookies afin d’optimiser votre navigation ; en poursuivant sur ce site, vous acceptez notre{' '}
        <a href="#">charte de gestion des données</a>.
      </div>
      <Link className="sc-gdpr__readmore" to="/conditions-dutilisation/">
        Lire
      </Link>
      <button type="button" className="sc-gdpr__button" onClick={accept}>
        Accepter
      </button>
    </div>
  )
}
