import { Check, ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import { Aura, ButtonLink, Card, Container, Eyebrow, Section, SectionHeading, WaButton } from '@/components/kit'
import { PACKS, productPath, type Pack } from '@/lib/packs'
import { WHATSAPP_DISPLAY } from '@/lib/site'
import { usePageTitle } from '@/lib/usePageTitle'
import { cn } from '@/lib/utils'
import { ActivationSteps } from '../home/sections/Activation'
import { ACTIVATION_HEAD, PACK_CTA } from '../home/sections/Activation.data'
import { GuaranteeStrip } from '../home/sections/Installation'
import { IncludedMetrics } from '../home/sections/PricingTable'
import { FaqBlock } from '../theme/FaqBlock'
import { Breadcrumbs } from '../theme/PageHero'
import { PaymentNote } from '../theme/PaymentNote'

/** Inclusions sentence → bullet list (the spec writes them comma-separated). */
function inclusionItems(pack: Pack) {
  return pack.inclusions
    .replace(/\.$/, '')
    .split(/,\s*/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
}

/** Lower-case the first letter for mid-sentence use, unless it starts an acronym (DNS). */
function lowerFirst(s: string) {
  return /^[A-ZÀ-Ý][a-zà-ÿ]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s
}

function PriceCard({ pack }: { pack: Pack }) {
  return (
    <Card className={cn('relative p-6 sm:p-8', pack.highlighted && 'border-brand/40 ring-4 ring-brand/10')}>
      {pack.highlighted ? (
        <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white shadow-cta">
          ⭐ Recommandé
        </span>
      ) : null}
      <p className="text-sm font-semibold text-heading">{pack.name}</p>
      <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
        <span className="text-5xl font-bold tracking-tight text-heading">{pack.price}</span>
        <span className="text-base text-body">/ {pack.duration}</span>
      </p>
      <p className="mt-1 text-sm font-medium text-brand">soit {pack.perMonth}</p>
      <ul className="mt-6 space-y-3 border-t border-line pt-6">
        {inclusionItems(pack).map((item) => (
          <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-heading">
            <Check aria-hidden="true" className="mt-0.5 size-4.5 shrink-0 text-brand" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>
      <WaButton message={pack.waMessage} size="lg" fullWidth className="mt-8">
        {PACK_CTA}
      </WaButton>
      <p className="mt-3 text-center text-xs text-body">Conseiller NovaStream · {WHATSAPP_DISPLAY}</p>
      <PaymentNote className="mt-6 border-t border-line pt-5" />
    </Card>
  )
}

function OtherPacks({ current }: { current: Pack }) {
  const others = PACKS.filter((p) => p.id !== current.id)
  return (
    <Section tone="mist-fade" aria-labelledby="autres-formules">
      <SectionHeading id="autres-formules" eyebrow="Tarifs officiels · Distributeur Agréé King 365 TV" title="Les autres formules NovaStream" />
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {others.map((p) => (
          <li key={p.id}>
            <Card as={Link} to={productPath(p)} interactive className="group flex h-full flex-col p-6">
              <span className="flex items-center justify-between gap-3">
                <span className="font-semibold text-heading">
                  {p.name}
                  {p.highlighted ? ' ⭐' : ''}
                </span>
                <ChevronRight aria-hidden="true" className="size-4 text-slate-400 transition-colors group-hover:text-brand" />
              </span>
              <span className="mt-3 text-2xl font-bold tracking-tight text-heading">
                {p.price} <span className="text-sm font-normal text-body">/ {p.duration}</span>
              </span>
              <span className="mt-1 text-sm text-brand">{p.perMonth}</span>
              <span className="mt-4 text-sm leading-relaxed text-body">{p.inclusions}</span>
            </Card>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <ButtonLink to="/pricing/" variant="outline">
          Comparer les 4 formules
        </ButtonLink>
      </div>
    </Section>
  )
}

/** One product page per pack, built from PACKS (spec S10 values). */
export function PackPage({ pack }: { pack: Pack }) {
  usePageTitle(`${pack.name} ${pack.duration} — King 365 TV Abonnement | NovaStream`)
  return (
    <>
      <section className="relative isolate overflow-hidden bg-canvas pt-8 pb-16 md:pt-10 md:pb-24">
        <Aura variant="hero" />
        <Container>
          <Breadcrumbs
            items={[{ label: 'Accueil', to: '/' }, { label: 'Boutique', to: '/pricing/' }, { label: pack.name }]}
            className="mb-10 md:mb-14"
          />
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16">
            <div className="flex flex-col items-start gap-5 lg:pt-6">
              <Eyebrow>Distributeur Agréé King 365 TV · Activation Instantanée 24/7</Eyebrow>
              <h1 className="text-[2.125rem] leading-[1.08] font-bold tracking-tight text-heading sm:text-5xl lg:text-[3.5rem]">
                <span className="block">
                  {pack.name}
                  {pack.highlighted ? '\u00a0⭐' : ''}
                </span>
                <span className="block text-brand">{pack.duration}</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-body">
                King 365 TV abonnement officiel de {pack.duration} chez NovaStream : {lowerFirst(pack.inclusions)}
              </p>
              <p className="max-w-xl text-[0.9375rem] leading-relaxed text-body">
                Commande, renouvellement et activation se font en direct avec un conseiller NovaStream sur WhatsApp : vos
                identifiants sont envoyés dès la confirmation du paiement.
              </p>
            </div>
            <PriceCard pack={pack} />
          </div>
          <GuaranteeStrip className="mt-12 md:mt-16" />
        </Container>
      </section>
      <Section tone="mist">
        <IncludedMetrics headingAs="h2" />
      </Section>
      <Section aria-labelledby="activation-title">
        <SectionHeading id="activation-title" eyebrow={ACTIVATION_HEAD.badge} title={ACTIVATION_HEAD.title} subtitle={ACTIVATION_HEAD.subtitle} />
        <ActivationSteps className="mt-12" />
      </Section>
      <OtherPacks current={pack} />
      <FaqBlock ids={['commander', 'delai', 'renouveler', 'memes-identifiants', 'multi-ecrans']} />
    </>
  )
}
