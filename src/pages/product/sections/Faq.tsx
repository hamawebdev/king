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

/** Decorative ledger index ("01"): pseudo-content, hidden from assistive tech and from find-in-page. */
function Index({ n }: { n: number }) {
  return (
    <span
      aria-hidden="true"
      data-label={String(n).padStart(2, '0')}
      className="pt-px font-display text-[1.1875rem] leading-[1.35] text-z-accent italic before:content-[attr(data-label)]"
    />
  )
}

// FAQ: paper ground, ledger-indexed hairline rows in a text-width column (§9.2 #8). From lg the head sits
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
          <FaqItem
            key={f.q}
            defaultOpen={i === 0}
            className="[&>div]:pl-9 md:[&>div]:pl-12"
            question={
              <span className="grid grid-cols-[2.25rem_minmax(0,1fr)] md:grid-cols-[3rem_minmax(0,1fr)]">
                <Index n={i + 1} />
                <span>{f.q}</span>
              </span>
            }
          >
            <p>{f.a}</p>
          </FaqItem>
        ))}
      </FaqList>
    </Section>
  )
}
