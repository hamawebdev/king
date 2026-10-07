import { BRAND } from '@/lib/site'
import { PANEL, SECTION, WRAP } from '../styles'
import { SectionHead } from '../ui'

const DESCRIPTION = {
  eyebrow: 'Description',
  title: ['Pensée pour toute la', 'maison'] as [string, string],
  paragraphs: [
    `Avec ${BRAND} Premium, chacun regarde ce qu'il aime sur l'écran de son choix : le match en direct au salon, les dessins animés sur la tablette et un bon documentaire le soir venu sur l'ordinateur portable.`,
    'Le catalogue s’enrichit chaque semaine et l’abonnement se gère en quelques clics depuis votre espace personnel, sans aucun frais caché ni démarche compliquée.',
  ],
}

export function Description() {
  return (
    <section data-section="product-description" className={SECTION}>
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
  )
}
