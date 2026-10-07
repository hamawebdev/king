import { HEADING, PANEL, SECTION, WRAP } from '../styles'
import { SectionHead } from '../ui'

const FAQ = {
  eyebrow: 'Foire aux questions',
  title: ['Bon à', 'savoir'] as [string, string],
  items: [
    {
      q: 'Puis-je changer de formule en cours de route ?',
      a: 'Oui, il suffit de choisir une nouvelle durée depuis votre espace client ; le temps restant sur l’ancienne formule est automatiquement reporté.',
    },
    {
      q: 'Combien d’écrans en même temps ?',
      a: 'La formule Premium autorise trois appareils connectés simultanément dans le même foyer, que ce soit une télévision, un ordinateur ou un téléphone.',
    },
    {
      q: 'Faut-il installer une parabole ou une antenne ?',
      a: 'Non, une simple connexion internet suffit, en Wi-Fi ou en filaire (8 Mbps conseillés pour profiter de la 4K).',
    },
    {
      q: 'Et à la fin de l’abonnement ?',
      a: 'Vous recevez un rappel par e-mail quelques jours avant l’échéance. Sans action de votre part, l’accès s’arrête simplement, sans aucun frais.',
    },
    {
      q: 'Comment joindre l’assistance ?',
      a: 'Notre équipe répond par e-mail et par messagerie tous les jours de 9h à 23h, en général en moins d’une heure, pour vous aider à tout régler.',
    },
  ],
}

// FAQ (always open on the original)
export function Faq() {
  return (
    <section data-section="product-faq" className={SECTION}>
      <div className={WRAP}>
        <SectionHead eyebrow={FAQ.eyebrow} title={FAQ.title} />
        <div className="mx-auto grid max-w-[860px] gap-2.5">
          {FAQ.items.map((f) => (
            <div key={f.q} className={`${PANEL} rounded-[13px] px-5 py-4`}>
              <h4 className={`${HEADING} mb-1.5 flex gap-[9px] text-[15.5px] font-extrabold text-heading`}>
                <i className="ti ti-help text-lp-blue" /> {f.q}
              </h4>
              <p className="text-[14px] text-lp-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
