import { Placeholder } from '@/components/site/Placeholder'
import { BoxShot } from '../BoxShot'
import type { IconText, Product } from '../data'
import { BUY, HEADING, STARS, WRAP } from '../styles'

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

const STATS: { value?: string; label: string; star?: boolean }[] = [
  { label: 'Note 4.8/5', star: true },
  { value: '40K+', label: 'Foyers' },
  { value: '3900+', label: 'Chaînes' },
  { value: '60+', label: 'Pays' },
  { value: '24/7', label: 'Support' },
]

function BuyBox({ product: p, onBuy }: { product: Product; onBuy: (e: React.MouseEvent) => void }) {
  const save = p.oldPrice - p.price
  const pct = Math.round((save / p.oldPrice) * 100)
  return (
    <div className="relative rounded-[22px] border border-lp-line bg-white p-7 shadow-lp">
      <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-lp-blue px-[18px] py-[7px] text-[12.5px] font-extrabold whitespace-nowrap text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.55)]">
        <i className="ti ti-flame" /> {p.ribbon}
      </div>
      <div className="mt-2 mb-1.5 text-center text-[14px] font-bold text-lp-muted">{p.plan}</div>
      <div className="flex items-baseline justify-center gap-3 text-center">
        <s className="text-[24px] font-semibold text-lp-dim">{p.oldPrice}€</s>
        <b className="font-archivo text-[60px] leading-none font-black [@media(max-width:600px)]:text-[48px]">{p.price}€</b>
      </div>
      <div className="mt-1 text-center text-[13.5px] font-bold text-lp-muted">soit {p.perMonth}€/mois</div>
      <div className="mt-2 mb-[18px] text-center text-[14px] font-extrabold text-lp-blue-d">
        <span className="mr-1.5 rounded-[7px] bg-lp-blue-soft px-2.5 py-[3px]">−{pct}%</span> Remise {save}€ — {SAVE_TAIL}
      </div>
      <a href="/checkout/" onClick={onBuy} className={`${BUY} inline-flex w-full gap-[9px] rounded-[13px] px-[30px] py-4 text-[18px]`}>
        Acheter maintenant
      </a>
      <div className="mt-[18px] grid grid-cols-2 gap-[9px]">
        {BUY_FEATURES.map((f) => (
          <span key={f} className="flex items-center gap-2 text-[13.5px] font-semibold text-lp-muted">
            <i className="ti ti-check text-[16px] text-lp-blue" /> {f}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 border-t border-lp-line pt-3.5 text-[12px] font-semibold text-lp-dim">
        <span>{PAY_LABEL}</span>
        {PAY_METHODS.map((m) => (
          <b key={m} className="rounded-[5px] bg-lp-soft2 px-2 py-[3px] text-[11px] font-extrabold text-lp-ink">
            {m}
          </b>
        ))}
      </div>
      <div className="mt-3.5 flex flex-wrap justify-center gap-4 text-[12.5px] font-bold text-[#1aa861]">
        {GUARANTEES.map((g) => (
          <span key={g.text} className="flex items-center gap-[5px]">
            <i className={`ti ${g.icon}`} /> {g.text}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Hero({ product: p, onBuy }: { product: Product; onBuy: (e: React.MouseEvent) => void }) {
  return (
    <>
      {/* Hero: breadcrumb, rating chip, title, box shot + selling points, buy box */}
      <section data-section="product-hero" className="relative overflow-hidden bg-[#f7faff] pt-[46px] pb-[54px]">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <Placeholder tone="dark" bare label="" className="size-full" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(247,250,255,0.86),rgba(247,250,255,0.93))]" />
        </div>
        <div className={`${WRAP} relative z-[2]`}>
          <div className="mb-6 max-w-[780px]">
            <div className="mb-3.5 text-[13px] font-semibold text-lp-dim">Accueil › Abonnements › {p.plan}</div>
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-lp-line bg-white px-3.5 py-1.5 shadow-lp-sm">
              <span className="text-[14px] tracking-[1px] text-lp-gold">{STARS}</span>
              <small className="text-[13px] font-bold text-lp-muted">{RATING_TEXT}</small>
            </div>
            <h1 className={`${HEADING} mb-3.5 text-[clamp(30px,4vw,46px)] font-black text-heading`}>
              {p.title[0]} <span className="text-lp-blue">{p.title[1]}</span> {p.title[2]}
            </h1>
          </div>
          <div className="relative z-[2] grid grid-cols-[1.05fr_0.95fr] items-center gap-11 [@media(max-width:900px)]:grid-cols-1">
            <div>
              <div className="flex items-center justify-center">
                <BoxShot className="w-full max-w-[1304px]" label={p.title.join(' ').replace(/ [—–] /, ' ')} />
              </div>
              <p className="mt-[18px] mb-4 text-[17px] text-lp-muted">{HERO_LEAD}</p>
              <div className="mb-2 grid gap-2.5">
                {BULLETS.map((b) => (
                  <div key={b} className="flex items-center gap-[11px] text-[15.5px] font-semibold">
                    <i className="ti ti-check grid size-6 flex-none place-items-center rounded-full bg-lp-blue-soft text-[14px] text-lp-blue" />{' '}
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <BuyBox product={p} onBuy={onBuy} />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section data-section="product-trust" className="border-y border-lp-line bg-lp-soft">
        <div className="mx-auto flex max-w-[1140px] flex-wrap justify-between gap-3.5 py-5 [@media(max-width:900px)]:justify-center [@media(max-width:900px)]:gap-x-[26px] [@media(max-width:900px)]:gap-y-[18px]">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-[9px] text-[14.5px] font-bold text-lp-muted">
              {s.star && <i className="ti ti-star-filled text-lp-gold" />}
              {s.value && <b className="font-archivo text-[22px] font-bold text-lp-ink">{s.value}</b>} {s.label}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
