import { useEffect, type ComponentType } from 'react'
import { useLocation } from 'react-router'
import { useCopy, type Localized } from '@/lib/i18n'
import { usePageTitle } from '@/lib/usePageTitle'
import { SectionBoundary } from './home/SectionBoundary'
import { HomeActivation } from './home/sections/Activation'
import { HomeAppsMatrix } from './home/sections/AppsMatrix'
import { HomeFaq } from './home/sections/Faq'
import { HomeFeatureGrid } from './home/sections/FeatureGrid'
import { HomeHero } from './home/sections/Hero'
import { HomeInfoCards } from './home/sections/InfoCards'
import { HomeInstallation } from './home/sections/Installation'
import { HomeLiveSport } from './home/sections/LiveSport'
import { HomePillars } from './home/sections/Pillars'
import { HomeResolution } from './home/sections/Resolution'
import { HomeRoadmap } from './home/sections/Roadmap'
import { HomeTechBar } from './home/sections/TechBar'
import { HomeTestimonials } from './home/sections/Testimonials'
import { HomeVodLibrary } from './home/sections/VodLibrary'

/** Spec sections 1–14 in spec order (section 15, the footer, is site chrome). Each lives in ./home/sections. */
const SECTIONS: { key: string; Component: ComponentType }[] = [
  { key: 's01', Component: HomeHero },
  { key: 's02', Component: HomeFeatureGrid },
  { key: 's03', Component: HomeAppsMatrix },
  { key: 's04', Component: HomeTechBar },
  { key: 's05', Component: HomeResolution },
  { key: 's06', Component: HomeInfoCards },
  { key: 's07', Component: HomeRoadmap },
  { key: 's08', Component: HomeLiveSport },
  { key: 's09', Component: HomeVodLibrary },
  { key: 's10', Component: HomeActivation },
  { key: 's11', Component: HomeInstallation },
  { key: 's12', Component: HomePillars },
  { key: 's13', Component: HomeTestimonials },
  { key: 's14', Component: HomeFaq },
]

/** Homepage document title (French = index.html's static title). */
const TITLE: Localized<string> = {
  fr: 'King 365 TV Abonnement Officiel | NovaStream, Distributeur Agréé',
  en: 'Official King 365 TV Subscription | NovaStream, Authorized Distributor',
  de: 'Offizielles King 365 TV Abonnement | NovaStream, Autorisierter Vertriebspartner',
  es: 'Suscripción Oficial King 365 TV | NovaStream, Distribuidor Autorizado',
  pt: 'Subscrição Oficial King 365 TV | NovaStream, Distribuidor Autorizado',
  fi: 'Virallinen King 365 TV\u00A0-tilaus | NovaStream, valtuutettu jälleenmyyjä',
}

/** Dev only: `/?only=s05` or `/?only=s05,s08` renders just those sections, for screenshots. */
function visibleSections() {
  if (!import.meta.env.DEV || typeof window === 'undefined') return SECTIONS
  const only = new URLSearchParams(window.location.search).get('only')
  if (!only) return SECTIONS
  const keys = only.split(',')
  return SECTIONS.filter((s) => keys.includes(s.key))
}

export default function Home() {
  const { hash } = useLocation()
  usePageTitle(useCopy(TITLE))

  // Arriving on /#signature (or any anchor) from another page: scroll there once the sections exist.
  // Deferred a frame so it runs after the layout's scroll-to-top on route change.
  useEffect(() => {
    if (!hash) return
    const frame = requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [hash])

  return (
    <div className="overflow-x-clip">
      {visibleSections().map(({ key, Component }) => (
        <SectionBoundary key={key} name={key}>
          <Component />
        </SectionBoundary>
      ))}
    </div>
  )
}
