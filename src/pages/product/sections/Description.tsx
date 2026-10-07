import { Kw, Reveal, Section, SectionHead } from '@/components/brand'
import { BRAND } from '@/lib/site'

const DESCRIPTION = {
  eyebrow: 'Description',
  title: ['Pensée pour toute la', 'maison'] as [string, string],
  paragraphs: [
    `Avec ${BRAND} Premium, chacun regarde ce qu'il aime sur l'écran de son choix : le match en direct au salon, les dessins animés sur la tablette et un bon documentaire le soir venu sur l'ordinateur portable.`,
    'Le catalogue s’enrichit chaque semaine et l’abonnement se gère en quelques clics depuis votre espace personnel, sans aucun frais caché ni démarche compliquée.',
  ],
}

export function Description() {
  const [lead, ...rest] = DESCRIPTION.paragraphs
  return (
    <Section zone="paper" dataSection="product-description" container="text">
      <SectionHead
        eyebrow={DESCRIPTION.eyebrow}
        title={
          <>
            {DESCRIPTION.title[0]} <Kw>{DESCRIPTION.title[1]}</Kw>
          </>
        }
      />

      <div className="mt-head">
        <Reveal>
          <p className="max-w-[56ch] font-sans text-lead text-z-soft">{lead}</p>
        </Reveal>
        {rest.map((t, i) => (
          <Reveal key={t} index={i + 1} className="mt-6 border-t border-z-line pt-6 md:mt-7 md:pt-7">
            <p className="max-w-[66ch] font-sans text-copy text-z-body">{t}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
