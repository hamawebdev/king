import type { ReactNode } from 'react'
import { Placeholder } from '@/components/site/Placeholder'
import { WHATSAPP_HREF } from '@/lib/site'
import { BoxShot } from './BoxShot'
import {
  BAND,
  BULLETS,
  BUY_FEATURES,
  DESCRIPTION,
  FAQ,
  FINAL_CTA,
  GUARANTEES,
  HERO_LEAD,
  INCLUDED,
  PAY_LABEL,
  PAY_METHODS,
  QUALITY,
  RATING_TEXT,
  REVIEWS,
  SAVE_TAIL,
  STATS,
  type Product,
} from './data'

// Landing block shown on every product page. Breakpoints follow the original block: 900px (single column)
// and 600px (tighter sections + sticky buy bar), both inclusive max-width queries.

const STARS = '★★★★★'

const WRAP = 'mx-auto max-w-[1140px] px-[22px]'
const SECTION = 'py-[54px] [@media(max-width:600px)]:py-10'
const HEADING = 'font-archivo leading-[1.1] tracking-[-0.025em]'
const PANEL = 'border border-lp-line bg-white shadow-lp-sm'
const TITLE_SIZE = 'text-[clamp(26px,3.6vw,38px)]'
// Primary call to action; size, padding, radius and layout are set per use.
const BUY =
  'cursor-pointer items-center justify-center border-[1.5px] border-transparent bg-lp-blue font-extrabold text-white shadow-[0_14px_30px_-12px_rgba(37,99,235,0.65)] transition-all duration-200 ease-[ease] hover:-translate-y-0.5 hover:bg-lp-blue-d'

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-lp-blue-soft px-[15px] py-[7px] text-[13px] font-extrabold tracking-[0.08em] text-lp-blue uppercase">
      {children}
    </span>
  )
}

function SectionHead({ eyebrow, title, spacing = 'mb-10' }: { eyebrow?: string; title: [string, string]; spacing?: string }) {
  return (
    <div className={`mx-auto max-w-[620px] text-center ${spacing}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`${HEADING} mt-3.5 mb-2.5 font-extrabold text-heading ${TITLE_SIZE}`}>
        {title[0]} <span className="text-lp-blue">{title[1]}</span>
      </h2>
    </div>
  )
}

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

export function Landing({ product: p, onBuy }: { product: Product; onBuy: (e: React.MouseEvent) => void }) {
  return (
    <div className="w-full overflow-x-hidden font-jakarta leading-[1.6] text-lp-ink antialiased">
      {/* Hero: breadcrumb, rating chip, title, box shot + selling points, buy box */}
      <section className="relative overflow-hidden bg-[#f7faff] pt-[46px] pb-[54px]">
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
      <section className="border-y border-lp-line bg-lp-soft">
        <div className="mx-auto flex max-w-[1140px] flex-wrap justify-between gap-3.5 py-5 [@media(max-width:900px)]:justify-center [@media(max-width:900px)]:gap-x-[26px] [@media(max-width:900px)]:gap-y-[18px]">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-[9px] text-[14.5px] font-bold text-lp-muted">
              {s.star && <i className="ti ti-star-filled text-lp-gold" />}
              {s.value && <b className="font-archivo text-[22px] font-bold text-lp-ink">{s.value}</b>} {s.label}
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className={SECTION}>
        <div className={WRAP}>
          <SectionHead eyebrow={DESCRIPTION.eyebrow} title={DESCRIPTION.title} spacing="mb-[22px]" />
          <div className={`${PANEL} rounded-[16px] px-7 py-[26px]`}>
            {DESCRIPTION.paragraphs.map((t) => (
              <p key={t} className="mb-2.5 text-[15.5px] text-lp-muted last:mb-0">
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className={SECTION}>
        <div className={WRAP}>
          <SectionHead eyebrow={INCLUDED.eyebrow} title={INCLUDED.title} />
          <div className="grid grid-cols-3 gap-4 [@media(max-width:900px)]:grid-cols-1">
            {INCLUDED.cards.map((c) => (
              <div key={c.title} className={`${PANEL} rounded-[16px] p-[22px]`}>
                <div className="mb-3 grid size-[46px] place-items-center rounded-[12px] bg-lp-blue-soft text-[21px] text-lp-blue">
                  <i className={`ti ${c.icon}`} />
                </div>
                <h4 className={`${HEADING} mb-1.5 text-[16px] font-extrabold text-heading`}>{c.title}</h4>
                <p className="text-[14px] text-lp-muted">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Picture quality and categories */}
      <section className={`${SECTION} bg-lp-soft`}>
        <div className={WRAP}>
          <SectionHead title={QUALITY.title} />
          <div className="mb-[22px] grid grid-cols-4 gap-3.5 [@media(max-width:900px)]:grid-cols-2">
            {QUALITY.tiles.map((q) => (
              <div key={q.value} className={`${PANEL} rounded-[14px] p-5 text-center`}>
                <b className="block font-archivo text-[26px] font-black text-lp-blue">{q.value}</b>
                <span className="text-[13.5px] font-bold text-lp-muted">{q.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {QUALITY.categories.map((c) => (
              <span key={c.text} className={`${PANEL} flex items-center gap-2 rounded-[12px] px-[18px] py-[11px] text-[14.5px] font-bold`}>
                <i className={`ti ${c.icon} text-lp-blue`} /> {c.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className={SECTION}>
        <div className={WRAP}>
          <SectionHead eyebrow={REVIEWS.eyebrow} title={REVIEWS.title} />
          <div className="grid grid-cols-3 gap-4 [@media(max-width:900px)]:grid-cols-1">
            {REVIEWS.items.map((r) => (
              <div key={r.name} className={`${PANEL} rounded-[16px] p-[22px]`}>
                <div className="mb-2.5 tracking-[2px] text-lp-gold">{STARS}</div>
                <p className="mb-3.5 text-[14.5px] italic">{r.text}</p>
                <div className="flex items-center gap-[11px]">
                  <div className="grid size-10 place-items-center rounded-full bg-lp-blue font-archivo text-[13px] font-extrabold text-white">
                    {r.initials}
                  </div>
                  <div>
                    <b className="block text-[14px] font-bold">{r.name}</b>
                    <span className="text-[12.5px] text-lp-dim">{r.place}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees band */}
      <section className={`${SECTION} bg-lp-soft`}>
        <div className={WRAP}>
          <div className="grid grid-cols-3 gap-6 rounded-[24px] bg-[linear-gradient(135deg,#2563eb,#143a96)] p-10 text-center text-white [@media(max-width:900px)]:grid-cols-1">
            {BAND.map((g) => (
              <div key={g.title}>
                <i className={`ti ${g.icon} mb-2 block text-[30px]`} />
                <h4 className={`${HEADING} mb-[5px] text-[17px] font-extrabold text-white`}>{g.title}</h4>
                <p className="text-[13.5px] text-[#cfe0ff]">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (always open on the original) */}
      <section className={SECTION}>
        <div className={WRAP}>
          <SectionHead eyebrow={FAQ.eyebrow} title={FAQ.title} />
          <div className="mx-auto grid max-w-[860px] gap-2.5">
            {FAQ.items.map((f) => (
              <div key={f.q} className={`${PANEL} rounded-[13px] px-5 py-4`}>
                <h4 className={`${HEADING} mb-1.5 flex gap-[9px] text-[15.5px] font-extrabold text-heading`}>
                  <i className="ti ti-help text-lp-blue" /> {f.q}
                </h4>
                <p className="text-[14px] text-lp-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className={`${SECTION} bg-lp-soft`}>
        <div className={`${WRAP} text-center`}>
          <h2 className={`${HEADING} mb-3 font-extrabold text-heading ${TITLE_SIZE}`}>{FINAL_CTA.title}</h2>
          <p className="mb-[22px] text-[16px] text-lp-muted">{FINAL_CTA.text}</p>
          <a href="/checkout/" onClick={onBuy} className={`${BUY} inline-flex gap-[9px] rounded-[13px] px-[30px] py-4 text-[16px]`}>
            Acheter maintenant — {p.price}€
          </a>
        </div>
      </section>

      {/* Sticky buy bar, phones only */}
      <div className="fixed inset-x-0 bottom-0 z-[80] hidden items-center justify-between gap-3 border-t border-lp-line bg-white px-3.5 py-[11px] shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] [@media(max-width:600px)]:flex">
        <div>
          <s className="mr-[5px] text-[13px] text-lp-dim">{p.oldPrice}€</s>
          <b className="font-archivo text-[22px] font-black">{p.price}€</b>
          <span className="hidden">{p.barLabel}</span>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-[12px] bg-[#25d366] px-2 text-[13.5px] font-extrabold whitespace-nowrap text-white hover:bg-[#1ebe5b]"
          >
            <i className="ti ti-brand-whatsapp text-[18px]" /> WhatsApp
          </a>
          <a href="/checkout/" onClick={onBuy} className={`${BUY} flex h-12 flex-1 gap-1.5 rounded-[12px] px-2 text-[13.5px] whitespace-nowrap`}>
            {p.barCta}
          </a>
        </div>
      </div>
    </div>
  )
}
