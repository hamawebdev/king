import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Container } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { BRAND, useLegalNav, useNavLabels, waLink } from '@/lib/site'
import { FloatingButtons } from './FloatingButtons'
import { ExternalLink, SectionLink } from './SiteFooter.links'
import { Wordmark } from './SiteHeader.wordmark'

const REVENDEUR_MESSAGE = 'Bonjour NovaStream, je souhaite des informations sur le programme Revendeur'

const linkClass =
  'inline-flex min-h-9 items-center rounded-sm text-[0.9375rem] text-slate-400 transition-colors hover:text-white ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400'

type FooterLink = { label: string } & ({ section: string } | { href: string } | { to: string })

const NBSP = '\u00A0'

const fr = {
  home: `${BRAND} — accueil`,
  tagline: 'Distributeur Agréé King 365 TV · Assistance & Activation 7j/7',
  quickNav: 'Navigation Rapide',
  legal: 'Informations Légales',
  rights: '© 2026 NovaStream | Tous droits réservés',
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    home: `${BRAND} — home`,
    tagline: 'Authorized King 365 TV Distributor · Support & Activation 7 Days a Week',
    quickNav: 'Quick Links',
    legal: 'Legal Information',
    rights: '© 2026 NovaStream | All rights reserved',
  },
  de: {
    home: `${BRAND} — Startseite`,
    tagline: 'Autorisierter King 365 TV Vertriebspartner · Support & Aktivierung 7 Tage die Woche',
    quickNav: 'Schnellnavigation',
    legal: 'Rechtliche Hinweise',
    rights: '© 2026 NovaStream | Alle Rechte vorbehalten',
  },
  es: {
    home: `${BRAND} — inicio`,
    tagline: 'Distribuidor Autorizado King 365 TV · Soporte y activación 7 días a la semana',
    quickNav: 'Navegación rápida',
    legal: 'Información legal',
    rights: '© 2026 NovaStream | Todos los derechos reservados',
  },
  pt: {
    home: `${BRAND} — início`,
    tagline: 'Distribuidor Autorizado King 365 TV · Suporte e ativação 7 dias por semana',
    quickNav: 'Navegação rápida',
    legal: 'Informações legais',
    rights: '© 2026 NovaStream | Todos os direitos reservados',
  },
  fi: {
    home: `${BRAND} — etusivu`,
    tagline: `Valtuutettu King 365 TV${NBSP}-jälleenmyyjä · Tuki ja aktivointi 7 päivää viikossa`,
    quickNav: 'Pikalinkit',
    legal: 'Oikeudelliset tiedot',
    rights: '© 2026 NovaStream | Kaikki oikeudet pidätetään',
  },
}

// Spec S15, column « Navigation Rapide ».
function useQuickNav(): FooterLink[] {
  const { main } = useNavLabels()
  return [
    { label: main.home, section: 'hero' },
    { label: main.shop, section: 'signature' },
    { label: main.reseller, href: waLink(REVENDEUR_MESSAGE) },
    { label: main.download, section: 'installation' },
    { label: main.contact, href: waLink() },
  ]
}

// Spec S15, column « Informations Légales »: the four legal pages, then « Contactez-nous » on WhatsApp.
function useLegalLinks(): FooterLink[] {
  const legal = useLegalNav()
  const { legal: labels } = useNavLabels()
  return [
    ...legal.filter((l) => l.to !== '/contact/').map((l) => ({ label: l.label, to: l.to })),
    { label: labels.contactUs, href: waLink() },
  ]
}

function FooterAnchor({ item }: { item: FooterLink }) {
  if ('section' in item) {
    return (
      <SectionLink id={item.section} className={linkClass}>
        {item.label}
      </SectionLink>
    )
  }
  if ('href' in item) {
    return (
      <ExternalLink href={item.href} className={linkClass}>
        {item.label}
      </ExternalLink>
    )
  }
  return (
    <Link to={item.to} className={linkClass}>
      {item.label}
    </Link>
  )
}

function Column({ title, items }: { title: string; items: FooterLink[] }): ReactNode {
  return (
    <nav aria-label={title}>
      <h2 className="text-xs font-semibold tracking-[0.12em] text-white uppercase">{title}</h2>
      <ul className="mt-4 grid gap-1">
        {items.map((item) => (
          <li key={item.label}>
            <FooterAnchor item={item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

/** Spec S15 — footer on the dark slate « night » ground with the giant NovaStream watermark. */
export function SiteFooter() {
  const t = useCopy(COPY)
  const quickNav = useQuickNav()
  const legal = useLegalLinks()
  return (
    <>
      <footer
        id="Footer"
        data-section="chrome-footer"
        className="relative isolate overflow-hidden bg-night pt-16 pb-24 text-slate-400 [color-scheme:dark] md:pt-20 md:pb-10"
      >
        <Container>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                to="/"
                aria-label={t.home}
                className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                <Wordmark onDark className="text-[1.75rem] leading-none" />
              </Link>
              <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-slate-400">
                {t.tagline}
              </p>
            </div>
            <Column title={t.quickNav} items={quickNav} />
            <Column title={t.legal} items={legal} />
          </div>

          <p
            aria-hidden="true"
            className="pointer-events-none mt-14 -mb-2 text-center text-[min(16.5vw,12.5rem)] leading-[0.85] font-extrabold tracking-[-0.04em] whitespace-nowrap text-slate-800/40 select-none md:mt-20"
          >
            {BRAND}
          </p>

          <div className="relative border-t border-white/10 pt-6">
            <p className="text-sm text-slate-500">{t.rights}</p>
          </div>
        </Container>
      </footer>
      <FloatingButtons />
    </>
  )
}
