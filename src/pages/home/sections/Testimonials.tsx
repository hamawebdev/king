import { ImagePlus, Star } from 'lucide-react'
import { Pill, Section, SectionHeading } from '@/components/kit'
import { cn } from '@/lib/utils'
import { useTestimonials, type Review, type TestimonialsCopy } from './Testimonials.data'

/** French typography: no-break space before ! ? : ; » and after «, so punctuation never orphans. Text is unchanged. */
const nbsp = (t: string) => t.replace(/ ([!?:;»])/g, ' $1').replace(/« /g, '« ')

/** Resolve a public/ path under the deploy base (GitHub Pages sub-path). */
const publicUrl = (path: string) => import.meta.env.BASE_URL + path.replace(/^\/+/, '')

function Stars({ label, className }: { label: string; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-0.5 text-amber-400', className)} role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} aria-hidden="true" className="size-4 fill-current" strokeWidth={0} />
      ))}
    </span>
  )
}

/** Phone-proportioned frame for the client's WhatsApp screenshot; an empty, clearly-marked slot until one is set. */
function ScreenshotSlot({ review, ui }: { review: Review; ui: TestimonialsCopy['ui'] }) {
  const frame =
    'relative overflow-hidden rounded-xl border bg-slate-50 aspect-[4/3] w-full lg:aspect-[9/16] lg:w-36 lg:shrink-0 xl:w-40'
  if (review.screenshot) {
    return (
      <div className={cn(frame, 'border-line')}>
        <img
          src={publicUrl(review.screenshot)}
          alt={ui.screenshotAlt(review.name)}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-top"
        />
      </div>
    )
  }
  return (
    <div aria-hidden="true" className={cn(frame, 'grid place-items-center border-dashed border-slate-300')}>
      <span className="flex flex-col items-center gap-2 px-3 text-center text-xs font-medium text-slate-400">
        <span className="grid size-9 place-items-center rounded-full bg-canvas shadow-card">
          <ImagePlus className="size-4 text-slate-400" strokeWidth={1.75} />
        </span>
        📸 {ui.screenshotPlaceholder}
      </span>
    </div>
  )
}

function ReviewCard({ review, ui }: { review: Review; ui: TestimonialsCopy['ui'] }) {
  return (
    <figure className="m-0 flex h-full flex-col gap-5 rounded-2xl border border-line bg-canvas p-5 shadow-card transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6 lg:flex-row lg:gap-6">
      <ScreenshotSlot review={review} ui={ui} />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/15 bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand">
            <span aria-hidden="true">{review.badgeEmoji}</span>
            {review.badge}
          </span>
          <Stars label={ui.rating} />
        </div>
        <blockquote className="m-0 mt-4 text-[0.9375rem] leading-relaxed text-pretty text-heading">{nbsp(review.quote)}</blockquote>
        <figcaption className="mt-auto border-t border-line pt-4 text-sm">
          <span className="mt-1 block">
            <span className="font-semibold text-heading">{review.name}</span>
            <span className="text-body"> — {review.meta}</span>
          </span>
        </figcaption>
      </div>
    </figure>
  )
}

function TrustBar({ stats, ui }: { stats: TestimonialsCopy['trustStats']; ui: TestimonialsCopy['ui'] }) {
  return (
    <dl className="mx-auto mt-10 grid max-w-4xl grid-cols-1 divide-y divide-line rounded-2xl border border-line bg-canvas shadow-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center gap-1 px-5 py-4 text-center sm:py-6">
          <dt className="sr-only">{s.label}</dt>
          <dd className="m-0 flex items-center gap-2 text-2xl font-bold tracking-tight text-heading tabular-nums sm:text-[1.75rem]">
            {s.stars ? <Stars label={ui.rating} /> : null}
            {s.value}
          </dd>
          <dd aria-hidden="true" className="m-0 text-sm text-body">
            {s.label}
          </dd>
        </div>
      ))}
    </dl>
  )
}

/** Section 13 — Témoignages: trust bar, 6 review cards with a WhatsApp screenshot slot, 8 pills. */
export function HomeTestimonials() {
  const t = useTestimonials()
  return (
    <Section id="avis" tone="mist" aria-labelledby="home-testimonials-title" className="scroll-mt-20">
      <SectionHeading
        id="home-testimonials-title"
        eyebrow={t.head.eyebrow}
        title={t.head.title}
        subtitle={t.head.subtitle}
      />
      <TrustBar stats={t.trustStats} ui={t.ui} />

      {/* Phone: horizontal snap scroller (contained; focusable for keyboard scrolling). md+: grid. */}
      <ul
        role="list"
        tabIndex={0}
        aria-label={t.ui.reviewsLabel}
        className="-mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto overscroll-x-contain px-4 pb-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:mt-14"
      >
        {t.reviews.map((r) => (
          <li key={r.name} className="w-[85%] max-w-[22rem] shrink-0 snap-start md:w-auto md:max-w-none">
            <ReviewCard review={r} ui={t.ui} />
          </li>
        ))}
      </ul>

      <ul role="list" aria-label={t.ui.pillsLabel} className="mt-10 flex flex-wrap justify-center gap-2.5 md:mt-14">
        {t.pills.map((p) => (
          <li key={p.label}>
            <Pill icon={p.emoji}>{p.label}</Pill>
          </li>
        ))}
      </ul>
    </Section>
  )
}
