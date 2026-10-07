import { useId } from 'react'
import { Kw, Section, SectionHead, Stars, useReveal } from '@/components/brand'
import { BRAND } from '@/lib/site'
import { cn } from '@/lib/utils'

const REVIEWS = {
  eyebrow: 'Témoignages',
  title: ['La parole à nos', 'abonnés'] as [string, string],
  items: [
    {
      text: `« Avec ${BRAND}, les soirées foot en famille sont devenues un vrai rendez-vous. On ne rate plus un match ! »`,
      initials: 'JR',
      name: 'Julien R.',
      place: 'Lyon, France',
    },
    {
      text: '« Les enfants ont leurs dessins animés, moi mes séries : chacun y trouve son compte à la maison. Top ! »',
      initials: 'SM',
      name: 'Sofia M.',
      place: 'Genève, Suisse',
    },
    {
      text: '« Installation faite en dix minutes sur la télé du salon, sans aide. Le service client répond vite. »',
      initials: 'KT',
      name: 'Karim T.',
      place: 'Liège, Belgique',
    },
  ],
}

type Review = (typeof REVIEWS.items)[number]

/** Splits the opening guillemet off the quote so it can hang above it as the brass quote mark. */
function splitQuote(text: string): [string, string] {
  const m = text.match(/^(«)\s*([\s\S]*)$/)
  return m ? [m[1], m[2]] : ['', text]
}

/**
 * Testimonial card (DIRECTION §6.3-6). Built here rather than with the kit `Testimonial` so the content's
 * own opening « becomes the large quote mark (real text, brass-700 on ivory 5.78:1; no duplicate glyph) and the content's initials stay real text.
 * `wide` = the odd third card at tablet width, spanning both columns with the author set beside the quote.
 */
function ReviewCard({ review, index, wide }: { review: Review; index: number; wide: boolean }) {
  const { ref, className: revealClass, style } = useReveal<HTMLLIElement>(index)
  const [mark, quote] = splitQuote(review.text)
  return (
    <li
      ref={ref}
      style={style}
      className={cn(
        revealClass,
        // phone: the whole scroll row reveals once instead (a peeking card would never reach the IO threshold)
        'max-md:transform-none max-md:opacity-100',
        'flex shrink-0 snap-start max-md:w-[calc(100vw-2*var(--spacing-gutter)-36px)]',
        wide && 'md:col-span-2 lg:col-span-1',
      )}
    >
      <figure
        className={cn(
          'm-0 flex w-full flex-col rounded-card border border-z-line bg-z-card p-card',
          wide && 'md:max-lg:grid md:max-lg:grid-cols-[minmax(0,1fr)_13.5rem] md:max-lg:gap-x-10',
        )}
      >
        <div className="flex-1">
          <Stars />
          {mark && (
            <span className="mt-4 block h-8 font-display text-5xl leading-none text-z-accent">
              {mark}
            </span>
          )}
          <blockquote className="m-0 mt-2 font-display text-[1.125rem] leading-[1.45] text-z-fg italic md:text-[1.1875rem]">
            <p>{quote}</p>
          </blockquote>
        </div>
        <figcaption
          className={cn(
            'mt-6 flex items-center gap-3 border-t border-z-line pt-5',
            wide && 'md:max-lg:mt-0 md:max-lg:self-end md:max-lg:border-t-0 md:max-lg:border-l md:max-lg:pt-0 md:max-lg:pl-8',
          )}
        >
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-evergreen-100 font-sans text-[0.875rem] leading-none font-bold text-evergreen-700"
          >
            {review.initials}
          </span>
          <span className="grid min-w-0">
            <cite className="font-sans text-[0.9375rem] font-semibold text-z-fg not-italic">{review.name}</cite>
            <span className="font-sans text-meta text-z-muted">{review.place}</span>
          </span>
        </figcaption>
      </figure>
    </li>
  )
}

export function Reviews() {
  const headingId = useId()
  const count = REVIEWS.items.length
  const { ref: rowRef, className: rowReveal, style: rowStyle } = useReveal<HTMLDivElement>(0)
  return (
    <Section zone="sand" dataSection="product-reviews">
      <SectionHead
        id={headingId}
        align="center"
        eyebrow={REVIEWS.eyebrow}
        title={
          <>
            {REVIEWS.title[0]} <Kw>{REVIEWS.title[1]}</Kw>
          </>
        }
      />
      {/* Phone: scroll-snap row with a 24px peek of the next card; tablet 2-up; desktop 3-up (§4). */}
      <div
        ref={rowRef}
        style={rowStyle}
        role="region"
        aria-labelledby={headingId}
        tabIndex={0}
        className={cn(
          rowReveal,
          'md:transform-none md:opacity-100',
          'mt-head max-md:-mx-gutter max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto max-md:scroll-px-gutter max-md:pb-3',
          'outline-offset-4 focus-visible:outline-2 focus-visible:outline-z-focus md:rounded-card',
        )}
      >
        <ul className="m-0 flex list-none gap-3 p-0 max-md:w-max max-md:px-gutter md:grid md:grid-cols-2 md:gap-grid lg:grid-cols-3">
          {REVIEWS.items.map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} wide={count % 2 === 1 && i === count - 1} />
          ))}
        </ul>
      </div>
    </Section>
  )
}
