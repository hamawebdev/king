import { Card, Section } from '@/components/kit'

/**
 * Section 06 — two cards answering the two recurring questions (how many screens, which countries).
 * Copy word for word from the spec; the spec approves no heading, so the h2 is visually hidden.
 */
export function HomeInfoCards() {
  return (
    <Section id="multi-ecrans" aria-labelledby="infocards-title" className="scroll-mt-20">
      <h2 id="infocards-title" className="sr-only">
        Multi-Écrans Flexibles et Bouquets Multi-Pays Complets
      </h2>
      <ul className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <Card as="li" interactive className="group flex flex-col gap-4 p-6 sm:p-8">
          <CardIcon emoji="📱" />
          <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">Multi-Écrans Flexibles</h3>
          <p className="text-base leading-relaxed text-body">
            Profitez de votre accès sur Smart TV, Google TV, boîtier TV Box, smartphone, tablette et ordinateur.{' '}
            <em className="text-slate-500">
              (1 écran actif en simultané par code d'accès, options multi-connexions disponibles sur demande)
            </em>
            .
          </p>
        </Card>
        <Card as="li" interactive className="group flex flex-col gap-4 p-6 sm:p-8">
          <CardIcon emoji="🌍" />
          <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">Bouquets Multi-Pays Complets</h3>
          <p className="text-base leading-relaxed text-body">
            Diffusion internationale couvrant plus de 50 régions : France, Belgique, Suisse, Canada, Maghreb, Royaume-Uni,
            USA, Italie, Espagne, Allemagne et bien d'autres bouquets thématiques.
          </p>
        </Card>
      </ul>
    </Section>
  )
}

function CardIcon({ emoji }: { emoji: string }) {
  return (
    <span
      aria-hidden="true"
      className="grid size-12 place-items-center rounded-xl bg-brand-soft text-2xl ring-1 ring-brand/10 transition-transform duration-200 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
    >
      {emoji}
    </span>
  )
}
