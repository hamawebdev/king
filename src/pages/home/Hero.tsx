import { Link } from 'react-router'
import { Placeholder } from '@/components/site/Placeholder'
import { HERO, OFFER, PROOF, PROOF_RATING, ROUTES } from './data'
import { COLUMN, EASE_200, TITLE_FACE, buttonClass, cx } from './styles'
import { Accent } from './ui'

/** Overlapping avatar dots of the rating pill, darkest first. */
const AVATAR_TINTS = ['bg-lp-blue-d', 'bg-lp-blue', 'bg-lp-azure', 'bg-[#60a5fa]']

/** Below 680px both hero buttons share the row equally. */
const HERO_BUTTON_NARROW = 'lp-md:flex-1 lp-md:px-[14px] lp-md:py-[15px]'

function RatingPill() {
  return (
    <div className="mb-[22px] inline-flex items-center gap-[11px] rounded-full border border-lp-line bg-white px-[15px] py-[7px] shadow-lp-sm lp-md:flex-wrap lp-md:justify-center lp-md:text-center">
      <span className="flex">
        {AVATAR_TINTS.map((tint) => (
          <i key={tint} className={cx('-ml-[8px] block size-[24px] rounded-full border-2 border-white', tint)} />
        ))}
      </span>
      <span className="text-[13px] tracking-[1px] text-lp-gold">★★★★★</span>
      <small className="text-[13px] font-bold text-lp-muted">{HERO.rating}</small>
    </div>
  )
}

/** Featured-offer card on the right of the hero. */
function OfferCard() {
  return (
    <div className="relative rounded-[22px] border border-lp-line bg-white p-[30px] shadow-lp lp-md:p-[22px]">
      <div className="absolute top-[-14px] left-1/2 flex -translate-x-1/2 items-center gap-[6px] rounded-full bg-lp-blue px-[18px] py-[7px] text-[12.5px] font-extrabold whitespace-nowrap text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.55)]">
        <i className="ti ti-flame" /> {OFFER.ribbon}
      </div>
      {/* Framed plan name: on the original it inherits the pricing-card frame and hover lift. */}
      <div
        className={cx(
          'relative mt-[8px] mb-[4px] flex flex-col rounded-[22px] border border-lp-line bg-white px-[24px] py-[30px] text-center text-[14px] font-bold text-lp-muted shadow-lp-sm hover:-translate-y-[5px] hover:shadow-lp',
          EASE_200,
        )}
      >
        {OFFER.plan}
      </div>
      <div className="flex items-baseline justify-center gap-[12px] text-center">
        <s className="text-[24px] font-semibold text-lp-dim">{OFFER.oldPrice}</s>
        <b className="font-archivo text-[62px] leading-none font-black text-lp-ink lp-md:text-[46px] lp-sm:text-[40px]">
          {OFFER.price}
          <small className="text-[20px] font-semibold text-lp-muted">{OFFER.per}</small>
        </b>
      </div>
      <div className="mt-[6px] mb-[18px] text-center text-[14px] font-extrabold text-lp-blue-d">
        <span className="mr-[6px] rounded-[7px] bg-lp-blue-soft px-[10px] py-[3px]">{OFFER.pct}</span> {OFFER.save}
      </div>
      <Link to={ROUTES.p12} className={buttonClass('primary', null, 'w-full px-[30px] py-[15px] text-[18px]')}>
        {OFFER.cta}
      </Link>
      <div className="mt-[20px] grid grid-cols-[repeat(2,1fr)] gap-[9px]">
        {OFFER.feats.map((feat) => (
          <span key={feat} className="flex items-center gap-[8px] text-[13.5px] font-semibold text-lp-muted">
            <i className="ti ti-check text-[16px] text-lp-blue" /> {feat}
          </span>
        ))}
      </div>
    </div>
  )
}

/** Opening band: pitch on the left, offer card on the right, over a veiled backdrop. */
export function Hero() {
  return (
    <section className="hm-veil relative overflow-hidden bg-[#f7faff] pt-[56px] pb-[70px] lp-md:pt-[30px] lp-md:pb-[42px]">
      <Placeholder tone="dark" bare label="Arrière-plan" className="pointer-events-none absolute inset-0 z-0" />
      <div className={cx(COLUMN, 'relative z-[2] grid grid-cols-[1.06fr_0.94fr] items-center gap-[50px] lp-lg:grid-cols-[1fr]')}>
        <div>
          <RatingPill />
          <h1
            className={cx(
              TITLE_FACE,
              'mb-[18px] text-[length:clamp(40px,5.3vw,62px)] font-black text-heading',
              'lp-md:text-[length:clamp(30px,8.4vw,40px)] lp-md:leading-[1.07] lp-sm:text-[28px]',
            )}
          >
            {HERO.titleStart}
            <Accent>{HERO.titleBlue}</Accent>
            {HERO.titleEnd}
          </h1>
          <p className="mb-[24px] max-w-[500px] text-[18px] text-lp-muted lp-md:text-[16px]">{HERO.sub}</p>
          <div className="mb-[22px] flex flex-wrap items-center gap-[13px] lp-md:flex-nowrap">
            <Link to={ROUTES.p12} className={buttonClass('primary', 'lg', HERO_BUTTON_NARROW)}>
              {HERO.cta}
            </Link>
            <Link to={ROUTES.renew} className={buttonClass('outline', 'md', HERO_BUTTON_NARROW)}>
              {HERO.renew}
            </Link>
          </div>
          <div className="flex flex-wrap gap-[20px] text-[13.5px] font-bold text-lp-dim lp-md:gap-x-[18px] lp-md:gap-y-[12px] lp-md:text-[13px]">
            {HERO.trust.map((item) => (
              <span key={item.label} className="flex items-center gap-[7px]">
                <i className={cx('ti', item.icon, 'text-[15px] text-lp-blue')} /> {item.label}
              </span>
            ))}
          </div>
        </div>
        <OfferCard />
      </div>
    </section>
  )
}

const PROOF_ITEM =
  'flex items-center gap-[9px] text-[15px] font-bold text-lp-muted lp-md:flex-col lp-md:gap-[3px] lp-md:text-center lp-md:text-[13.5px]'

/** Strip of key figures under the hero (a row, then a 2-column and 1-column grid on phones). */
export function ProofStrip() {
  const last = PROOF.length - 1
  return (
    <section className="relative border-y border-lp-line bg-lp-soft">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-[18px] py-[22px] lp-lg:justify-center lp-lg:gap-x-[26px] lp-lg:gap-y-[14px] lp-md:grid lp-md:grid-cols-[repeat(2,1fr)] lp-md:gap-x-[12px] lp-md:gap-y-[22px] lp-sm:grid-cols-[1fr]">
        <div className={PROOF_ITEM}>
          <i className="ti ti-star-filled text-lp-gold" /> <span>{PROOF_RATING}</span>
        </div>
        {PROOF.map((item, index) => (
          <div key={item.label} className={cx(PROOF_ITEM, index === last && 'lp-md:col-span-full')}>
            <b className="font-archivo text-[23px] font-bold text-lp-ink">{item.value}</b> {item.label}
          </div>
        ))}
      </div>
    </section>
  )
}
