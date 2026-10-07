import { Kw, RatingPill, Recap, Reveal, Section, Stars } from '@/components/brand'
import type { StatItem } from '@/components/brand'
import { cn } from '@/lib/utils'
import { BoxShot } from '../BoxShot'
import type { IconText, Product } from '../data'

const RATING_TEXT = '4.8/5 — 40 000+ foyers équipés'

const HERO_LEAD =
  'Toute la famille trouve son programme : sport le samedi, dessins animés le matin et grands films le soir, sur la télé comme sur mobile.'

const BULLETS: string[] = [
  'Jusqu’à trois écrans connectés en même temps à la maison',
  'Guide des programmes et rappels avant vos émissions',
  'Profils séparés pour chaque membre de la famille, avec historique et favoris',
  'Résiliation libre, sans frais ni préavis à respecter',
]

const BUY_FEATURES = ['3900+ Chaînes', '8500+ VOD', 'Qualité 4K', 'Replay 14j']
const PAY_LABEL = 'Paiement sécurisé :'
const PAY_METHODS = ['VISA', 'MASTERCARD', 'PAYPAL', 'CRYPTO']
const SAVE_TAIL = 'Tarif de lancement'
const GUARANTEES: IconText[] = [
  { icon: 'ti-bolt', text: 'Accès en 20 min' },
  { icon: 'ti-gift', text: 'Essai 2h' },
  { icon: 'ti-lifebuoy', text: 'Service 7j/7' },
]
/** Seal on the box: the buy box's own guarantees, uppercased (DIRECTION §7.6). */
const SEAL_TEXT = `${GUARANTEES.map((g) => g.text.toUpperCase()).join(' · ')} ·`

const STATS: StatItem[] = [
  { label: 'Note 4.8/5', star: true },
  { value: '40K+', label: 'Foyers' },
  { value: '3900+', label: 'Chaînes' },
  { value: '60+', label: 'Pays' },
  { value: '24/7', label: 'Support' },
]

const CRUMBS = ['Accueil', 'Abonnements']

/** Route variant of the coffret: 3 / 6 / 12 / 24 months, or the ivory renewal box. */
function boxVariant(p: Product) {
  if (p.slug.startsWith('renouvellement')) return 'renew' as const
  const m = p.slug.match(/-(\d+)-mois/)?.[1]
  return m === '3' || m === '6' || m === '24' ? m : ('12' as const)
}

function BuyBox({ product: p, onBuy, className }: { product: Product; onBuy: (e: React.MouseEvent) => void; className?: string }) {
  const save = p.oldPrice - p.price
  const pct = Math.round((save / p.oldPrice) * 100)
  return (
    <Recap
      as="p"
      sticky
      ribbon={p.ribbon}
      plan={p.plan}
      old={`${p.oldPrice}€`}
      price={`${p.price}€`}
      perMonth={`soit ${p.perMonth}€/mois`}
      saving={`−${pct}%`}
      info={`Remise ${save}€ — ${SAVE_TAIL}`}
      features={BUY_FEATURES}
      cta={{ label: 'Acheter maintenant', href: '/checkout/', onClick: onBuy }}
      guarantees={GUARANTEES.map((g) => ({ icon: g.icon, label: g.text }))}
      payment={{ label: PAY_LABEL, methods: PAY_METHODS }}
      className={className}
    />
  )
}

/**
 * Stat strip (DIRECTION §6.3.7) without its own top/bottom rules (the ivory band draws them). The rating cell
 * shows its stars at figure height so every label sits on one line across the row.
 */
function TrustStrip({ items }: { items: StatItem[] }) {
  return (
    <ul className="m-0 grid list-none grid-cols-2 p-0 md:grid-cols-3 lg:flex lg:justify-between">
      {items.map((it) => (
        <li
          key={it.label}
          className={cn(
            'flex flex-col gap-2.5 border-z-line px-5 py-5 md:px-6 lg:flex-1 lg:py-2',
            'max-md:even:border-l max-md:[&:nth-child(n+3)]:border-t max-md:last:odd:col-span-2',
            'md:max-lg:[&:not(:nth-child(3n+1))]:border-l md:max-lg:[&:nth-child(n+4)]:border-t',
            'lg:border-l lg:first:border-l-0 lg:first:pl-0',
          )}
        >
          <span className="flex h-[1em] items-center text-stat-lg leading-none">
            {it.value && <span className="price-num text-stat-lg text-z-fg">{it.value}</span>}
            {it.star && <Stars size={16} className="gap-1 text-[clamp(1.125rem,1rem+0.4vw,1.375rem)]" />}
          </span>
          <span className="font-sans text-meta font-semibold text-z-muted">{it.label}</span>
        </li>
      ))}
    </ul>
  )
}

export function Hero({ product: p, onBuy }: { product: Product; onBuy: (e: React.MouseEvent) => void }) {
  const months = p.title[2].match(/\d+/)?.[0] ?? '12'
  return (
    <>
      {/* Hero: breadcrumb, rating pill, title; coffret + selling points left, sticky buy box right */}
      <Section zone="paper" dataSection="product-hero" rhythm="hero" container="wide">
        <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-12 lg:gap-x-grid xl:gap-x-10">
          {/* Title block */}
          <div className="min-w-0 md:col-span-2 lg:col-span-7 lg:row-start-1 lg:pr-4">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-meta font-medium text-z-muted">
              {CRUMBS.map((c) => (
                <span key={c} className="inline-flex items-center gap-2">
                  {c}
                  <i className="ti ti-chevron-right text-[12px]" aria-hidden="true" />
                </span>
              ))}
              <span aria-current="page" className="font-semibold text-z-fg">
                {p.plan}
              </span>
            </div>
            <RatingPill className="mt-6">{RATING_TEXT}</RatingPill>
            <h1 className="mt-5 font-display text-display-lg text-z-fg">
              {p.title[0]} <Kw>{p.title[1]}</Kw> {p.title[2]}
            </h1>
          </div>

          {/* Box shot */}
          <div className="relative flex min-w-0 justify-center md:col-start-1 md:row-start-2 md:justify-start lg:col-span-7 lg:row-start-2 xl:col-span-3">
            <BoxShot
              label={p.title.join(' ').replace(/ [—–] /, ' ')}
              months={months}
              plan={p.plan}
              variant={boxVariant(p)}
              seal={SEAL_TEXT}
              className="max-w-[320px] md:max-w-[360px] xl:max-w-none"
            />
          </div>

          {/* Buy box (stacked under the box on phone, beside it on tablet, sticky right column from lg) */}
          <BuyBox
            product={p}
            onBuy={onBuy}
            className="min-w-0 self-start md:col-start-2 md:row-start-2 lg:col-span-5 lg:col-start-8 lg:row-span-3 lg:row-start-1 xl:row-span-2"
          />

          {/* Lead and selling points */}
          <div className="min-w-0 md:col-span-2 md:row-start-3 lg:col-span-7 lg:row-start-3 xl:col-span-4 xl:col-start-4 xl:row-start-2 xl:pl-4">
            <p className="max-w-[56ch] font-sans text-lead text-z-soft">{HERO_LEAD}</p>
            <ul className="m-0 mt-7 grid list-none border-t border-ink p-0 md:max-lg:grid-cols-2 md:max-lg:gap-x-8">
              {BULLETS.map((b) => (
                <li key={b} className="flex gap-3 border-b border-z-line py-3.5 font-sans text-copy text-z-body">
                  <i className="ti ti-check mt-[0.2em] shrink-0 text-[18px] text-evergreen-600" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Trust strip */}
      <Section zone="ivory" dataSection="product-trust" rhythm="sm" container="wide">
        <Reveal>
          <TrustStrip items={STATS} />
        </Reveal>
      </Section>
    </>
  )
}
