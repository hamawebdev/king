import { Check, ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import { Aura, ButtonLink, Card, Container, Eyebrow, Section, SectionHeading, WaButton } from '@/components/kit'
import { productPath, usePack, usePacks, type Pack } from '@/lib/packs'
import { useCopy, type Localized } from '@/lib/i18n'
import { WHATSAPP_DISPLAY, useNavLabels } from '@/lib/site'
import { usePageTitle } from '@/lib/usePageTitle'
import { cn } from '@/lib/utils'
import { ActivationSteps } from '../home/sections/Activation'
import { useActivationHead, usePackCta } from '../home/sections/Activation.data'
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

/** Display only: keep « 1-to-1 » (and its translations: 1-zu-1, 1 a 1, 1 para 1) on one line; pack text is unchanged. */
function nb(s: string) {
  return s.replace(/\b1-(to|zu)-1\b/g, '1\u2011$1\u20111').replace(/\b1 (a|para) 1\b/g, '1\u00a0$1\u00a01')
}

/** Lower-case the first letter for mid-sentence use, unless it starts an acronym (DNS). */
function lowerFirst(s: string) {
  return /^[A-ZÀ-Ý][a-zà-ÿ]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s
}

// Pack page copy. Functions get the pack already localized (usePack); its waMessage stays French.
const fr = {
  pageTitle: (p: Pack) => `${p.name} ${p.duration} — King 365 TV Abonnement | NovaStream`,
  eyebrow: 'Distributeur Agréé King 365 TV · Activation Instantanée 24/7',
  /** Duration line of the h1. */
  headlineDuration: (p: Pack) => p.duration,
  intro: (p: Pack) => `King 365 TV abonnement officiel de ${p.duration} chez NovaStream : ${lowerFirst(p.inclusions)}`,
  process:
    'Commande, renouvellement et activation se font en direct avec un conseiller NovaStream sur WhatsApp : vos identifiants sont envoyés dès la confirmation du paiement.',
  recommended: '⭐ Recommandé',
  perMonth: (perMonth: string) => `soit ${perMonth}`,
  advisor: 'Conseiller NovaStream',
  othersEyebrow: 'Tarifs officiels · Distributeur Agréé King 365 TV',
  othersTitle: 'Les autres formules NovaStream',
  compare: 'Comparer les 4 formules',
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    pageTitle: (p) => `${p.name} ${p.duration} — King 365 TV Subscription | NovaStream`,
    eyebrow: 'Authorized King 365 TV Distributor · Instant Activation 24/7',
    headlineDuration: (p) => p.duration,
    intro: (p) => `Official ${p.months}-month King 365 TV subscription from NovaStream: ${lowerFirst(p.inclusions)}`,
    process:
      'Orders, renewals and activation are handled directly with a NovaStream advisor on WhatsApp: your login details are sent as soon as your payment is confirmed.',
    recommended: '⭐ Recommended',
    perMonth: (perMonth) => `that’s ${perMonth}`,
    advisor: 'NovaStream Advisor',
    othersEyebrow: 'Official Prices · Authorized King 365 TV Distributor',
    othersTitle: 'The Other NovaStream Plans',
    compare: 'Compare All 4 Plans',
  },
  de: {
    pageTitle: (p) => `${p.name} ${p.duration} — King 365 TV Abonnement | NovaStream`,
    eyebrow: 'Autorisierter King 365 TV Vertriebspartner · Sofortige Aktivierung 24/7',
    headlineDuration: (p) => p.duration,
    // German keeps the inclusions' capitals (nouns), so they follow as their own sentence.
    intro: (p) => `Das offizielle King 365 TV Abonnement für ${p.duration} bei NovaStream. ${p.inclusions}`,
    process:
      'Bestellung, Verlängerung und Aktivierung erfolgen direkt mit einem NovaStream-Berater auf WhatsApp: Ihre Zugangsdaten erhalten Sie, sobald die Zahlung bestätigt ist.',
    recommended: '⭐ Empfohlen',
    perMonth: (perMonth) => `entspricht ${perMonth}`,
    advisor: 'NovaStream-Berater',
    othersEyebrow: 'Offizielle Preise · Autorisierter King 365 TV Vertriebspartner',
    othersTitle: 'Die weiteren NovaStream-Pakete',
    compare: 'Alle 4 Pakete vergleichen',
  },
  es: {
    pageTitle: (p) => `${p.name} ${p.duration} — Suscripción King 365 TV | NovaStream`,
    eyebrow: 'Distribuidor Autorizado King 365 TV · Activación Instantánea 24/7',
    headlineDuration: (p) => p.duration,
    intro: (p) => `Suscripción oficial King 365 TV de ${p.duration} con NovaStream: ${lowerFirst(p.inclusions)}`,
    process:
      'El pedido, la renovación y la activación se gestionan directamente con un asesor NovaStream por WhatsApp: tus credenciales se envían en cuanto se confirma el pago.',
    recommended: '⭐ Recomendado',
    perMonth: (perMonth) => `equivale a ${perMonth}`,
    advisor: 'Asesor NovaStream',
    othersEyebrow: 'Precios oficiales · Distribuidor Autorizado King 365 TV',
    othersTitle: 'Los demás planes NovaStream',
    compare: 'Comparar los 4 planes',
  },
  pt: {
    pageTitle: (p) => `${p.name} ${p.duration} — Subscrição King 365 TV | NovaStream`,
    eyebrow: 'Distribuidor Autorizado King 365 TV · Ativação Instantânea 24/7',
    headlineDuration: (p) => p.duration,
    intro: (p) => `Subscrição oficial King 365 TV de ${p.duration} na NovaStream: ${lowerFirst(p.inclusions)}`,
    process:
      'A encomenda, a renovação e a ativação são feitas diretamente com um consultor NovaStream no WhatsApp: as suas credenciais são enviadas assim que o pagamento for confirmado.',
    recommended: '⭐ Recomendado',
    perMonth: (perMonth) => `ou seja, ${perMonth}`,
    advisor: 'Consultor NovaStream',
    othersEyebrow: 'Preços oficiais · Distribuidor Autorizado King 365 TV',
    othersTitle: 'Os outros planos NovaStream',
    compare: 'Comparar os 4 planos',
  },
  // « King 365 TV -sana »: NBSP before the hyphen and a word joiner (U+2060) after it keep the compound on one line.
  fi: {
    pageTitle: (p) => `${p.name} ${p.months} kuukautta — King 365 TV -⁠tilaus | NovaStream`,
    eyebrow: 'Valtuutettu King 365 TV -⁠jälleenmyyjä · Välitön aktivointi 24/7',
    // The pack data abbreviates months (« 12 kk »); the headline spells them out.
    headlineDuration: (p) => `${p.months} kuukautta`,
    intro: (p) => `Virallinen ${p.months} kuukauden King 365 TV -⁠tilaus NovaStreamilta: ${lowerFirst(p.inclusions)}`,
    process:
      'Tilaus, uusiminen ja aktivointi hoidetaan suoraan NovaStreamin asiakasneuvojan kanssa WhatsAppissa: tunnuksesi lähetetään heti, kun maksu on vahvistettu.',
    recommended: '⭐ Suositeltu',
    perMonth: (perMonth) => `eli ${perMonth}`,
    advisor: 'NovaStreamin asiakasneuvoja',
    othersEyebrow: 'Viralliset hinnat · Valtuutettu King 365 TV -⁠jälleenmyyjä',
    othersTitle: 'NovaStreamin muut paketit',
    compare: 'Vertaa kaikkia 4 pakettia',
  },
}

function PriceCard({ pack }: { pack: Pack }) {
  const t = useCopy(COPY)
  const packCta = usePackCta()
  return (
    <Card className={cn('relative p-6 sm:p-8', pack.highlighted && 'border-brand/40 ring-4 ring-brand/10')}>
      {pack.highlighted ? (
        <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white shadow-cta">
          {t.recommended}
        </span>
      ) : null}
      <p className="text-sm font-semibold text-heading">{pack.name}</p>
      <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
        <span className="text-5xl font-bold tracking-tight text-heading">{pack.price}</span>
        <span className="text-base text-body">/ {pack.duration}</span>
      </p>
      <p className="mt-1 text-sm font-medium text-brand">{t.perMonth(pack.perMonth)}</p>
      <ul className="mt-6 space-y-3 border-t border-line pt-6">
        {inclusionItems(pack).map((item) => (
          <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-heading">
            <Check aria-hidden="true" className="mt-0.5 size-4.5 shrink-0 text-brand" strokeWidth={2.5} />
            {nb(item)}
          </li>
        ))}
      </ul>
      <WaButton message={pack.waMessage} size="lg" fullWidth className="mt-8">
        {packCta}
      </WaButton>
      <p className="mt-3 text-center text-xs text-body">{t.advisor} · {WHATSAPP_DISPLAY}</p>
      <PaymentNote className="mt-6 border-t border-line pt-5" />
    </Card>
  )
}

function OtherPacks({ current }: { current: Pack }) {
  const t = useCopy(COPY)
  const others = usePacks().filter((p) => p.id !== current.id)
  return (
    <Section tone="mist-fade" aria-labelledby="autres-formules">
      <SectionHeading id="autres-formules" eyebrow={t.othersEyebrow} title={t.othersTitle} />
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
              <span className="mt-4 text-sm leading-relaxed text-body">{nb(p.inclusions)}</span>
            </Card>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <ButtonLink to="/pricing/" variant="outline">
          {t.compare}
        </ButtonLink>
      </div>
    </Section>
  )
}

/** One product page per pack, built from PACKS (spec S10 values), shown in the current language. */
export function PackPage({ pack: source }: { pack: Pack }) {
  const pack = usePack(source.id)
  const t = useCopy(COPY)
  const nav = useNavLabels()
  usePageTitle(t.pageTitle(pack))
  const activationHead = useActivationHead()
  return (
    <>
      <section className="relative isolate overflow-hidden bg-canvas pt-8 pb-16 md:pt-10 md:pb-24">
        <Aura variant="hero" />
        <Container>
          <Breadcrumbs
            items={[{ label: nav.main.home, to: '/' }, { label: nav.main.shop, to: '/pricing/' }, { label: pack.name }]}
            className="mb-10 md:mb-14"
          />
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16">
            <div className="flex flex-col items-start gap-5 lg:pt-6">
              <Eyebrow>{t.eyebrow}</Eyebrow>
              <h1 className="text-[2.125rem] leading-[1.08] font-bold tracking-tight text-heading sm:text-5xl lg:text-[3.5rem]">
                <span className="block">
                  {pack.name}
                  {pack.highlighted ? '\u00a0⭐' : ''}
                </span>{' '}
                <span className="sr-only">· </span>
                <span className="block text-brand">{t.headlineDuration(pack)}</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-body">
                {nb(t.intro(pack))}
              </p>
              <p className="max-w-xl text-[0.9375rem] leading-relaxed text-body">
                {t.process}
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
        <SectionHeading id="activation-title" eyebrow={activationHead.badge} title={activationHead.title} subtitle={activationHead.subtitle} />
        <ActivationSteps className="mt-12" />
      </Section>
      <OtherPacks current={pack} />
      <FaqBlock ids={['commander', 'delai', 'renouveler', 'memes-identifiants', 'multi-ecrans']} />
    </>
  )
}
