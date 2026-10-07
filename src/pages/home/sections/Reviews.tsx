import { BRAND } from '@/lib/site'
import type { IconText } from '../data'
import { BAND, COLUMN, TILE, cx } from '../styles'
import { Accent, ChipRow, SectionHead, StatGrid } from '../ui'

const REVIEWS = {
  eyebrow: 'Témoignages',
  titleStart: 'L’Avis de Ceux Qui Regardent ',
  titleBlue: BRAND,
  text: 'Des retours de spectateurs qui utilisent notre service chaque semaine depuis des années.',
  stats: [
    { value: '4.8/5', label: 'Note Globale' },
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

const STARS = '★★★★★'

type Review = { quote: string; initials: string; name: string; meta: string; tag: string }

/** Testimonial: stars, italic quote, avatar initials, name/meta and a topic tag. */
function ReviewCard({ review }: { review: Review }) {
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

/** Reviews: figures, testimonials and topics. */
export function HomeReviews() {
  return (
    <section data-section="home-reviews" className={BAND}>
      <div className={COLUMN}>
        <SectionHead
          eyebrow={REVIEWS.eyebrow}
          title={
            <>
              {REVIEWS.titleStart}
              <Accent>{REVIEWS.titleBlue}</Accent>
            </>
          }
          text={REVIEWS.text}
        />
        <StatGrid items={REVIEWS.stats} trio className="mx-auto mb-[44px] max-w-[680px]" />
        <div className="grid grid-cols-[repeat(3,1fr)] gap-[20px] lp-lg:grid-cols-[1fr]">
          {REVIEWS.items.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
        <ChipRow items={REVIEWS.cats} className="mt-[40px]" />
      </div>
    </section>
  )
}
