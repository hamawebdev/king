import { ArrowRight, BadgeCheck } from 'lucide-react'
import { Aura, Eyebrow, Section, WaButton } from '@/components/kit'
import { packById } from '@/lib/packs'

const RENEW_MESSAGE = 'Bonjour NovaStream, je souhaite renouveler mon code King 365 TV'

/** Spec S1 « Barre de Statistiques (4 Colonnes) », word for word. */
const STATS = [
  { value: '+5 700', label: 'Chaînes Directes Mondiales', detail: "Diffusion en direct à l'échelle mondiale" },
  { value: '+16 000', label: 'Films & Séries', detail: 'Catalogue VOD HD, FHD et 4K Native' },
  { value: '99,99%', label: 'Stabilité Réseau Garantie', detail: 'Infrastructure haute disponibilité' },
  { value: '+50 000', label: 'Utilisateurs Accompagnés', detail: "Clients satisfaits sur l'écosystème NovaStream" },
] as const

/** Section 01 — Hero (trust header, the page's only h1, two WhatsApp CTAs) and the 4-column stats strip. */
export function HomeHero() {
  const signature = packById('signature')
  return (
    <Section id="hero" aria-labelledby="hero-title" className="scroll-mt-20 pt-12 sm:pt-16 md:pt-20">
      <Aura variant="hero" />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Eyebrow tone="neutral" className="normal-case tracking-normal sm:text-[13px]">
          <BadgeCheck aria-hidden="true" className="hidden size-4 shrink-0 text-brand sm:block" />
          <span>Distributeur Agréé King 365 TV · Activation Instantanée 24/7</span>
        </Eyebrow>

        <h1
          id="hero-title"
          className="mt-6 font-sans text-[2.125rem] leading-[1.08] font-bold tracking-tight text-balance text-heading sm:text-5xl lg:text-[3.75rem]"
        >
          L'Expérience Télévisuelle Ultime : Vos Flux King 365 TV en <span className="text-brand">Véritable 4K HDR</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-body sm:text-lg">
          Propulsé par NovaStream. Accédez à une diffusion continue sans coupure, à un catalogue VOD colossal de +16 000
          titres et aux applications officielles King 365 TV sur l'ensemble de vos écrans.
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <WaButton message={signature.waMessage} variant="brand" size="lg" className="group w-full sm:w-auto">
            Commander mon Accès Signature (59,99 €)
            <ArrowRight
              aria-hidden="true"
              className="size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            />
          </WaButton>
          <WaButton message={RENEW_MESSAGE} variant="outline" size="lg" className="w-full sm:w-auto">
            Renouveler mon Code Actuel
          </WaButton>
        </div>
      </div>

      <dl className="mx-auto mt-14 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-line bg-canvas/80 shadow-card backdrop-blur-sm sm:mt-16 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.value}
            className={[
              'flex flex-col gap-1 p-4 text-left sm:p-6',
              i % 2 === 1 ? 'border-l border-line' : '',
              i >= 2 ? 'border-t border-line lg:border-t-0' : '',
              i === 2 ? 'lg:border-l' : '',
            ].join(' ')}
          >
            <dt className="order-2 text-sm leading-snug font-semibold text-heading sm:text-[0.9375rem]">{stat.label}</dt>
            <dd className="order-1 text-[1.75rem] leading-none font-bold tracking-tight whitespace-nowrap text-heading tabular-nums sm:text-4xl">
              {stat.value}
            </dd>
            <dd className="order-3 text-xs leading-snug text-body sm:text-sm">{stat.detail}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
