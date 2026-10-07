import { ButtonLink, CheckList, Price, Section } from '@/components/brand'
import { cn } from '@/lib/utils'
import { DurationRule } from './Plans.parts'

// Shop: the three plan cards on a sand band (one centred column up to tablet, three across from lg).
// Plan 12 mois is the featured card: vault panel, brass frame, lifted, brass CTA. Prices are static.

type Plan = { label: string; months: number; price: number; to: string; featured?: boolean }

const PLANS: Plan[] = [
  { label: 'Plan 6 mois', months: 6, price: 29, to: '/produit/abonnement-6-mois/' },
  { label: 'Plan 12 mois', months: 12, price: 49, to: '/produit/abonnement-12-mois/', featured: true },
  { label: 'Plan 24 mois', months: 24, price: 119, to: '/produit/abonnement-24-mois/' },
]

const FEATURES = [
  'Sans engagement.',
  'Activation immédiate.',
  'Paiement sécurisé.',
  'Deux écrans en même temps.',
  'Favoris synchronisés entre vos différents écrans.',
  'Contrôle parental.',
  'Mode basse consommation.',
]

/** Shop plan card: name, statement price with its TTC unit, duration ruler, checklist and the CTA. */
function PriceCard({ plan, features, index }: { plan: Plan; features: string[]; index: number }) {
  const { featured } = plan
  return (
    <article
      className={cn(
        'relative flex flex-col rounded-panel border p-card',
        featured
          ? 'panel-vault cert-frame border-brass-500/60 shadow-float lg:-mt-4 lg:pt-[calc(var(--spacing-card)+1rem)]'
          : 'border-z-line bg-z-card',
      )}
    >
      <h2 className="font-display text-title-lg text-z-fg">{plan.label}</h2>
      <Price value={`${plan.price}€`} unit="TTC" size="lg" className="mt-5" />
      <DurationRule months={plan.months} index={index} className="mt-7 mb-7" />
      <CheckList items={features} />
      <div className="relative z-[1] mt-auto pt-8">
        <ButtonLink to={plan.to} variant={featured ? 'brass' : 'primary'} size="lg" iconEnd="arrow" full>
          Abonner Maintenant
        </ButtonLink>
      </div>
    </article>
  )
}

export function ShopPlans() {
  return (
    <Section zone="sand" dataSection="shop-plans">
      <div className="mx-auto grid max-w-[560px] gap-grid lg:max-w-none lg:grid-cols-3 lg:items-stretch">
        {PLANS.map((plan, i) => (
          <PriceCard key={plan.label} plan={plan} features={FEATURES} index={i} />
        ))}
      </div>
    </Section>
  )
}
