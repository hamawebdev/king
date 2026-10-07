import { Chip, Kw, Section, SectionHead, Stars, Tag, useReveal } from '@/components/brand'
import { BRAND } from '@/lib/site'
import { cn } from '@/lib/utils'
import type { IconText } from '../data'

const REVIEWS = {
  eyebrow: 'Témoignages',
  titleStart: 'L’Avis de Ceux Qui Regardent ',
  titleBlue: BRAND,
  text: 'Des retours de spectateurs qui utilisent notre service chaque semaine depuis des années.',
  stats: [
    { value: '4.8/5', label: 'Note Globale', star: true },
    { value: '40K+', label: 'Abonnés Fidélisés' },
    { value: '98%', label: 'Recommandent' },
  ],
  items: [
    {
      quote: `« Depuis que nous avons ${BRAND}, les soirées en famille ont vraiment changé. Une offre honnête et complète ! »`,
      initials: 'LM',
      name: 'Lucas M.',
      meta: 'Lyon, France · Février 2026',
      tag: 'Ciné',
    },
    {
      quote: `« Installée à l’étranger, je retrouve grâce à ${BRAND} mes émissions préférées. Une image parfaite ! »`,
      initials: 'SB',
      name: 'Sophie B.',
      meta: 'Québec, Canada · Novembre 2025',
      tag: 'International',
    },
    {
      quote: '« J’ai essayé plusieurs offres avant celle-ci : aucune coupure, un choix énorme, je recommande. »',
      initials: 'KD',
      name: 'Karim D.',
      meta: 'Namur, Belgique · Décembre 2025',
      tag: 'Fiabilité',
    },
  ],
  cats: [
    { icon: 'ti-sparkles', label: 'Image 4K' },
    { icon: 'ti-bolt', label: 'Zapping Express' },
    { icon: 'ti-world', label: 'En Voyage' },
    { icon: 'ti-coin-euro', label: 'Tarif Très Doux' },
    { icon: 'ti-movie', label: 'Films à Volonté' },
    { icon: 'ti-lifebuoy', label: 'Aide Très Rapide' },
    { icon: 'ti-devices', label: 'Tous Les Écrans' },
    { icon: 'ti-clock', label: 'Rattrapage' },
  ] as IconText[],
}

const TITLE_ID = 'home-reviews-title'

/** French typography: a no-break space before ! ? : ; » and after «, so punctuation never orphans. Text is unchanged. */
const frSpace = (t: string) => t.replace(/ ([!?:;»])/g, '\u00A0$1').replace(/« /g, '«\u00A0')

type Review = { quote: string; initials: string; name: string; meta: string; tag: string }

/** Testimonial (DIRECTION §6.3.6): stars and topic tag, serif italic quote, hairline, monogram + name + meta. */
function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="m-0 flex h-full flex-col rounded-card border border-z-line bg-z-card p-card">
      <div className="flex items-center justify-between gap-3">
        <Stars />
        <Tag>{review.tag}</Tag>
      </div>
      <blockquote className="m-0 mt-5 font-display text-[1.125rem] leading-[1.45] text-z-fg italic md:text-[1.1875rem]">
        {frSpace(review.quote)}
      </blockquote>
      <figcaption className="mt-auto pt-6">
        <span className="flex items-center gap-3 border-t border-z-line pt-5">
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-evergreen-100 font-sans text-[0.875rem] leading-none font-bold text-evergreen-700"
          >
            {review.initials}
          </span>
          <span className="grid min-w-0">
            <span className="font-sans text-[0.9375rem] font-semibold text-z-fg">{review.name}</span>
            <span className="font-sans text-meta text-z-muted">{review.meta}</span>
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

/** Reviews: centred intro, ruled figures, three testimonials, the topics viewers mention. Sand band. */
export function HomeReviews() {
  // One reveal for the whole list: per-card reveals would keep the phone peek hidden (off-screen horizontally).
  const { ref: revealRef, className: revealClass, style: revealStyle } = useReveal<HTMLUListElement>()
  return (
    <Section zone="sand" dataSection="home-reviews" aria-labelledby={TITLE_ID}>
      <SectionHead
        align="center"
        id={TITLE_ID}
        eyebrow={REVIEWS.eyebrow}
        title={
          <>
            {REVIEWS.titleStart}
            <Kw>{REVIEWS.titleBlue}</Kw>
          </>
        }
        lead={REVIEWS.text}
      />

      {/* Figures: three ruled cells, one row at every width; subgrid keeps values and labels aligned. */}
      <ul className="m-0 mx-auto mt-head grid max-w-[760px] list-none grid-cols-3 grid-rows-[auto_auto_auto] border-y border-z-line p-0">
        {REVIEWS.stats.map((s) => (
          <li
            key={s.label}
            className="row-span-3 grid grid-rows-subgrid justify-items-center gap-y-2.5 border-l border-z-line px-2 py-5 text-center first:border-l-0 md:px-6 md:py-7"
          >
            <span className="flex h-[15px] items-end">{s.star && <Stars />}</span>
            <span className="price-num text-stat-md text-z-fg">{s.value}</span>
            <span className="font-sans text-meta font-semibold text-z-muted">{s.label}</span>
          </li>
        ))}
      </ul>

      {/* Testimonials: scroll-snap with a 24px peek on phone, 2 + 1 on tablet, 3 in a row on desktop. */}
      <ul
        ref={revealRef}
        style={revealStyle}
        tabIndex={0}
        aria-labelledby={TITLE_ID}
        className={cn(
          revealClass,
          'm-0 mt-12 list-none p-0 md:mt-14',
          'max-md:-mx-gutter max-md:flex max-md:snap-x max-md:snap-mandatory max-md:scroll-px-gutter max-md:gap-3 max-md:overflow-x-auto max-md:px-gutter max-md:pb-2',
          'md:grid md:grid-cols-2 md:gap-grid lg:grid-cols-3',
        )}
      >
        {REVIEWS.items.map((review, i) => (
          <li
            key={review.name}
            className={cn(
              'max-md:w-[calc(100%-2.25rem)] max-md:shrink-0 max-md:snap-start',
              i === REVIEWS.items.length - 1 && 'md:col-span-2 lg:col-span-1',
            )}
          >
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>

      {/* Topics: the themes viewers mention, wrapping chips under a hairline. */}
      <div className="mt-12 border-t border-z-line pt-10 md:mt-14">
        {/* Capped so the eight chips settle into two even rows of four from tablet up. */}
        <ul className="m-0 mx-auto flex max-w-[640px] list-none flex-wrap justify-center gap-2 p-0">
          {REVIEWS.cats.map((c) => (
            <li key={c.label}>
              <Chip icon={c.icon}>{c.label}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
