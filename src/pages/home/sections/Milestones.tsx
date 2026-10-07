import { Kw, Reveal, Section, SectionHead, Timeline } from '@/components/brand'
import { BRAND } from '@/lib/site'

const TIMELINE = {
  titleStart: 'Les Étapes ',
  titleBlue: BRAND,
  items: [
    { yr: 'Lancement', title: 'Une Idée de Départ', text: 'Le projet est né d’une idée claire\u00a0: rendre la télé en ligne simple pour tous.' },
    { yr: 'Croissance', title: 'Rayonnement Européen', text: 'L’équipe a conçu son propre lecteur vidéo, disponible sur chaque plateforme.' },
    { yr: 'Maintenant', title: 'Acteur de Confiance', text: 'Des milliers de foyers comptent désormais sur nous pour leurs soirées télé.' },
    { yr: 'Demain', title: 'Nouveautés à Venir', text: 'De nouveaux outils sont déjà en préparation pour nos abonnés.' },
  ],
}

/**
 * Milestones (zone P): the company story as a brass-connected timeline. Phone: head over a vertical rail;
 * tablet: head left, rail right (5/7); desktop: head on top, the four steps along one horizontal connector.
 */
export function HomeMilestones() {
  return (
    <Section
      zone="paper"
      dataSection="home-milestones"
      containerClassName="md:grid md:grid-cols-12 md:gap-x-grid lg:block"
    >
      <SectionHead
        className="md:sticky md:top-24 md:col-span-5 md:self-start lg:static lg:max-w-[40rem]"
        title={
          <>
            {TIMELINE.titleStart}
            <Kw>{TIMELINE.titleBlue}</Kw>
          </>
        }
      />
      <Reveal className="mt-head md:col-span-7 md:mt-1.5 lg:mt-head">
        <Timeline items={TIMELINE.items.map((s) => ({ label: s.yr, title: s.title, text: s.text }))} />
      </Reveal>
    </Section>
  )
}
