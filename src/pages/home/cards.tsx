import { Link } from 'react-router'
import type { Plan } from './data'
import { EASE_200, TILE, TITLE, buttonClass, cx } from './styles'

const STARS = '★★★★★'

type PlanCardProps = { plan: Plan; features: string[]; flag: string }

/** Pricing card. The highlighted plan gets a thicker blue frame and a pill label on its top edge. */
export function PlanCard({ plan, features, flag }: PlanCardProps) {
  return (
    <div
      data-flag={plan.featured ? flag : undefined}
      className={cx(
        'relative flex flex-col rounded-[22px] bg-white px-[24px] py-[30px] hover:-translate-y-[5px] hover:shadow-lp',
        EASE_200,
        plan.featured ? 'hm-flag border-2 border-lp-blue shadow-lp' : 'border border-lp-line shadow-lp-sm',
      )}
    >
      <span
        className={cx(
          'mb-[10px] self-start rounded-full px-[11px] py-[4px] text-[12px] font-extrabold',
          plan.badgeAlt ? 'bg-lp-soft2 text-lp-muted' : 'bg-lp-blue-soft text-lp-blue-d',
        )}
      >
        {plan.badge}
      </span>
      <div className="mb-[12px] text-[18px] font-extrabold">{plan.name}</div>
      <div className="font-archivo text-[42px] font-black text-lp-ink">
        {plan.price}
        <small className="text-[14px] font-semibold text-lp-muted">{plan.per}</small>
      </div>
      <div className="mt-[4px] mb-[2px] text-[13.5px] font-bold text-lp-muted">{plan.perMonth}</div>
      <ul className="my-[20px] grid gap-[11px]">
        {[...features, plan.lastFeature].map((feature) => (
          <li key={feature} className="flex items-center gap-[9px] text-[14px] text-lp-muted">
            <i className="ti ti-check flex-none text-[17px] text-lp-blue" /> {feature}
          </li>
        ))}
      </ul>
      <Link to={plan.to} className={buttonClass('primary', 'md', 'mt-auto w-full')}>
        Acheter maintenant
      </Link>
      <Link to={plan.to} className="mt-[10px] block text-center text-[13px] font-bold text-lp-muted hover:text-lp-blue">
        Voir les détails
      </Link>
    </div>
  )
}

type Review = { quote: string; initials: string; name: string; meta: string; tag: string }

/** Testimonial: stars, italic quote, avatar initials, name/meta and a topic tag. */
export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className={cx(TILE, 'rounded-[18px] p-[26px]')}>
      <div className="mb-[12px] tracking-[2px] text-lp-gold">{STARS}</div>
      <p className="mb-[18px] text-[15px] text-lp-ink italic">{review.quote}</p>
      <div className="flex items-center gap-[12px]">
        <div className="grid size-[44px] flex-none place-items-center rounded-full bg-lp-blue font-archivo text-[14px] font-extrabold text-white">
          {review.initials}
        </div>
        <div>
          <b className="block text-[15px] font-bold">{review.name}</b>
          <span className="text-[13px] text-lp-dim">{review.meta}</span>
        </div>
        {/* The original's tag ends up in the meta text style (grey, 13px) on a light blue chip. */}
        <span className="ml-auto rounded-[8px] bg-lp-blue-soft px-[11px] py-[4px] text-[13px] font-extrabold text-lp-dim">
          {review.tag}
        </span>
      </div>
    </div>
  )
}

type Device = { icon: string; title: string; text: string; tags: string[] }

/** Device family card with model tags. */
export function DeviceCard({ device }: { device: Device }) {
  return (
    <div className={cx(TILE, 'rounded-[18px] p-[26px]')}>
      <div className="mb-[14px] grid size-[48px] place-items-center rounded-[12px] bg-lp-blue-soft text-[23px] text-lp-blue">
        <i className={cx('ti', device.icon)} />
      </div>
      <h4 className={cx(TITLE, 'mb-[7px] text-[17px]')}>{device.title}</h4>
      <p className="mb-[14px] text-[13.5px] text-lp-muted">{device.text}</p>
      <div className="flex flex-wrap gap-[7px]">
        {device.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[8px] border border-lp-line bg-lp-soft px-[11px] py-[5px] text-[12.5px] font-bold text-lp-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

type Milestone = { yr: string; title: string; text: string }

/** Timeline step: haloed dot, small caps label, title and text. */
export function MilestoneCard({ step }: { step: Milestone }) {
  return (
    <div className={cx(TILE, 'rounded-[18px] p-[26px]')}>
      <div className="mb-[14px] size-[14px] rounded-full bg-lp-blue shadow-[0_0_0_5px_#e8f0ff]" />
      <div className="mb-[10px] font-archivo text-[13px] font-extrabold tracking-[0.08em] text-lp-blue uppercase">
        {step.yr}
      </div>
      <h4 className={cx(TITLE, 'mb-[7px] text-[17px]')}>{step.title}</h4>
      <p className="text-[14px] text-lp-muted">{step.text}</p>
    </div>
  )
}

/** Small figure tile (catalogue counts per genre). */
export function CountTile({ value, label }: { value: string; label: string }) {
  return (
    <div className={cx(TILE, 'rounded-[14px] p-[18px] text-center')}>
      <b className="block font-archivo text-[24px] font-black text-lp-blue">{value}</b>
      <span className="text-[13px] font-bold text-lp-muted">{label}</span>
    </div>
  )
}

/** Quality level tile (4K / FHD / HD / SD). */
export function QualityTile({ value, label }: { value: string; label: string }) {
  return (
    <div className={cx(TILE, 'rounded-[16px] p-[24px] text-center')}>
      <b className="block font-archivo text-[28px] font-black text-lp-blue">{value}</b>
      <span className="text-[14px] font-bold text-lp-muted">{label}</span>
    </div>
  )
}
