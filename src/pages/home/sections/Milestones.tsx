import { BRAND } from '@/lib/site'
import { BAND, COLUMN, QUAD_GRID, TILE, TITLE, cx } from '../styles'
import { Accent, SectionHead } from '../ui'

const TIMELINE = {
  titleStart: 'Les Étapes ',
  titleBlue: BRAND,
  items: [
    { yr: 'Lancement', title: 'Une Idée de Départ', text: 'Le projet est né d’une idée claire : rendre la télé en ligne simple pour tous.' },
    { yr: 'Croissance', title: 'Rayonnement Européen', text: 'L’équipe a conçu son propre lecteur vidéo, disponible sur chaque plateforme.' },
    { yr: 'Maintenant', title: 'Acteur de Confiance', text: 'Des milliers de foyers comptent désormais sur nous pour leurs soirées télé.' },
    { yr: 'Demain', title: 'Nouveautés à Venir', text: 'De nouveaux outils sont déjà en préparation pour nos abonnés.' },
  ],
}

type Milestone = { yr: string; title: string; text: string }

/** Timeline step: haloed dot, small caps label, title and text. */
function MilestoneCard({ step }: { step: Milestone }) {
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

/** Milestones: four timeline steps. */
export function HomeMilestones() {
  return (
    <section data-section="home-milestones" className={BAND}>
      <div className={COLUMN}>
        <SectionHead
          title={
            <>
              {TIMELINE.titleStart}
              <Accent>{TIMELINE.titleBlue}</Accent>
            </>
          }
        />
        <div className={cx(QUAD_GRID, 'gap-[20px]')}>
          {TIMELINE.items.map((step) => (
            <MilestoneCard key={step.yr} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}
