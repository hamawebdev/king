import { useState } from 'react'
import { Link } from 'react-router'
import { Cookie } from 'lucide-react'
import { buttonClasses } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'

const STORAGE_KEY = 'sc-gdpr-accepted'

function readAccepted() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

const fr = {
  region: 'Cookies',
  before: 'Nous utilisons des cookies afin d’optimiser votre navigation ; en poursuivant sur ce site, vous acceptez notre',
  link: 'charte de gestion des données',
  after: '.',
  read: 'Lire',
  accept: 'Accepter',
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    region: 'Cookies',
    before: 'We use cookies to optimize your browsing experience. By continuing on this site, you accept our',
    link: 'data management policy',
    after: '.',
    read: 'Read',
    accept: 'Accept',
  },
  de: {
    region: 'Cookies',
    before: 'Wir verwenden Cookies, um Ihr Surferlebnis zu optimieren. Wenn Sie diese Website weiter nutzen, akzeptieren Sie unsere',
    link: 'Richtlinie zum Umgang mit Daten',
    after: '.',
    read: 'Lesen',
    accept: 'Akzeptieren',
  },
  es: {
    region: 'Cookies',
    before: 'Usamos cookies para optimizar tu navegación. Si sigues en este sitio, aceptas nuestra',
    link: 'política de gestión de datos',
    after: '.',
    read: 'Leer',
    accept: 'Aceptar',
  },
  pt: {
    region: 'Cookies',
    before: 'Utilizamos cookies para otimizar a sua navegação. Ao continuar neste site, aceita a nossa',
    link: 'política de gestão de dados',
    after: '.',
    read: 'Ler',
    accept: 'Aceitar',
  },
  fi: {
    region: 'Evästeet',
    before: 'Käytämme evästeitä selauskokemuksesi parantamiseen. Jatkamalla sivuston käyttöä hyväksyt',
    link: 'tietojenkäsittelyn periaatteemme',
    after: '.',
    read: 'Lue',
    accept: 'Hyväksy',
  },
}

// Cookie consent card pinned to the bottom-left of the viewport until accepted (bottom-right is the floating
// WhatsApp button). White card, 1px line, soft shadow.
export function CookieBar() {
  const [accepted, setAccepted] = useState(readAccepted)
  const t = useCopy(COPY)
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
      aria-label={t.region}
      data-section="chrome-cookie"
      className="fixed bottom-4 left-4 right-20 z-50 rounded-2xl border border-line bg-canvas/95 p-4 shadow-card-hover backdrop-blur-md sm:right-auto sm:left-6 sm:bottom-6 sm:max-w-md sm:p-5"
    >
      <div className="flex items-start gap-3">
        <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
          <Cookie className="size-4.5" />
        </span>
        <p className="min-w-0 flex-1 text-sm leading-relaxed text-body">
          {t.before}{' '}
          <Link to="/politique-de-confidentialite/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            {t.link}
          </Link>
          {t.after}
        </p>
      </div>
      <div className="mt-4 flex gap-2.5 sm:justify-end">
        <Link to="/politique-de-confidentialite/" className={buttonClasses({ variant: 'outline', className: 'flex-1 sm:flex-none' })}>
          {t.read}
        </Link>
        <button type="button" onClick={accept} className={buttonClasses({ variant: 'brand', className: 'flex-1 sm:flex-none' })}>
          {t.accept}
        </button>
      </div>
    </div>
  )
}
