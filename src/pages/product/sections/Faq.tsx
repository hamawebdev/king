import { FaqItem, FaqList, Kw, Reveal, Section, SectionHead } from '@/components/brand'

// French typography: U+00A0 before « ? » and between a figure and its unit (DIRECTION §3.3-4).
const FAQ = {
  eyebrow: 'Foire aux questions',
  title: ['Bon à', 'savoir'] as [string, string],
  items: [
    {
      q: 'Puis-je changer de formule en cours de route ?',
      a: 'Oui, il suffit de choisir une nouvelle durée depuis votre espace client ; le temps restant sur l’ancienne formule est automatiquement reporté.',
    },
    {
      q: 'Combien d’écrans en même temps ?',
      a: 'La formule Premium autorise trois appareils connectés simultanément dans le même foyer, que ce soit une télévision, un ordinateur ou un téléphone.',
    },
    {
      q: 'Faut-il installer une parabole ou une antenne ?',
      a: 'Non, une simple connexion internet suffit, en Wi-Fi ou en filaire (8 Mbps conseillés pour profiter de la 4K).',
    },
    {
      q: 'Et à la fin de l’abonnement ?',
      a: 'Vous recevez un rappel par e-mail quelques jours avant l’échéance. Sans action de votre part, l’accès s’arrête simplement, sans aucun frais.',
    },
    {
      q: 'Comment joindre l’assistance ?',
      a: 'Notre équipe répond par e-mail et par messagerie tous les jours de 9h à 23h, en général en moins d’une heure, pour vous aider à tout régler.',
    },
  ],
}

// FAQ: paper ground, hairline rows in a text-width column (§9.2 #8). From lg the head sits
// sticky in a 4/8 split (§4 "FAQ and guides"); below lg it stacks above the list. The first answer opens by
// default (the original showed every answer); all answers stay in the DOM for find-in-page.
export function Faq() {
  return (
    <Section
      zone="paper"
      dataSection="product-faq"
      containerClassName="max-lg:max-w-text lg:grid lg:grid-cols-12 lg:gap-x-grid"
    >
      <Reveal className="lg:col-span-4 lg:self-start lg:sticky lg:top-24">
        <SectionHead eyebrow={FAQ.eyebrow} title={<>{FAQ.title[0]} <Kw>{FAQ.title[1]}</Kw></>} />
      </Reveal>
      <FaqList className="mt-head max-w-text lg:col-span-8 lg:mt-0">
        {FAQ.items.map((f, i) => (
          <FaqItem key={f.q} defaultOpen={i === 0} question={f.q}>
            <p>{f.a}</p>
          </FaqItem>
        ))}
      </FaqList>
    </Section>
  )
}
