import { Eyebrow, Kw, PaymentRow, PlanCard, Reveal, TrustRow, Section } from '@/components/brand'
import { ROUTES } from '../data'

type Plan = {
  badge: string
  badgeAlt?: boolean
  featured?: boolean
  name: string
  price: string
  per: string
  perMonth: string
  lastFeature: string
  to: string
}

const PLANS_HEAD = {
  eyebrow: 'Abonnements',
  titleStart: 'Comparez Toutes Nos ',
  titleBlue: 'Formules',
  text: 'Quatre durées au choix, toutes avec le même contenu et la même assistance.',
}

/** Label pinned on the highlighted plan card. */
const PLAN_FLAG = 'PLUS POPULAIRE'

const PLAN_FEATURES = [
  'Toutes les chaînes incluses',
  'Assistance prioritaire',
  '99,95% de disponibilité',
  'Du SD jusqu’à l’Ultra HD 4K',
  'Rattrapage 7 à 10 jours',
]

const PLANS: Plan[] = [
  { badge: 'Découverte', badgeAlt: true, name: 'Accès 3 Mois', price: '38€', per: '/3 mois', perMonth: 'soit 12,67€/mois', lastFeature: 'Image nette et flux sans coupure', to: ROUTES.p3 },
  { badge: 'Économisez 40%', name: 'Accès 6 Mois', price: '45€', per: '/6 mois', perMonth: 'soit 7,50€/mois', lastFeature: 'Image nette et flux sans coupure', to: ROUTES.p6 },
  { badge: 'Économisez 62%', featured: true, name: 'Accès 12 Mois', price: '59€', per: '/12 mois', perMonth: 'soit 4,92€/mois', lastFeature: 'Image nette et flux sans coupure', to: ROUTES.p12 },
  { badge: 'Tarif le plus bas', badgeAlt: true, name: 'Ultra PRO 24 Mois', price: '109€', per: '/24 mois', perMonth: 'soit 4,54€/mois', lastFeature: 'Image nette & zéro coupure', to: ROUTES.p24 },
]

const PLANS_TRUST = {
  secure: 'Règlement 100% protégé',
  fast: 'Accès livré sans délai',
  pay: 'Paiement :',
  methods: ['VISA', 'MASTERCARD', 'PAYPAL'],
}

/**
 * Plans (sand band): editorial split head, four plan cards 1 / 2 / 4 with the 12-month plan as the lifted
 * vault card, then the shared reassurance ledger (trust items + means of payment) right under the grid.
 * The #abonnements anchor lands here.
 */
export function HomePlans() {
  return (
    <Section zone="sand" dataSection="home-plans" id="abonnements" container="wide">
      <Reveal as="header" className="grid gap-4 lg:grid-cols-12 lg:items-end lg:gap-grid">
        <div className="lg:col-span-7">
          <Eyebrow>{PLANS_HEAD.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-display-md text-z-fg">
            {PLANS_HEAD.titleStart}
            <Kw>{PLANS_HEAD.titleBlue}</Kw>
          </h2>
        </div>
        <p className="max-w-[56ch] font-sans text-lead text-z-soft lg:col-span-5 lg:max-w-[34ch] lg:justify-self-end lg:pb-1.5">
          {PLANS_HEAD.text}
        </p>
      </Reveal>

      <ul className="m-0 mt-head grid list-none gap-grid p-0 pt-3 md:grid-cols-2 xl:grid-cols-4 xl:pt-4">
        {PLANS.map((plan) => (
          <li key={plan.name} className="flex">
            <PlanCard
              className="w-full"
              featured={plan.featured}
              ribbon={plan.featured ? PLAN_FLAG : undefined}
              name={plan.name}
              tag={{ label: plan.badge, tone: plan.badgeAlt ? 'neutral' : 'saving' }}
              price={plan.price}
              unit={plan.per}
              perMonth={plan.perMonth}
              features={[...PLAN_FEATURES, plan.lastFeature]}
              cta={{ label: 'Acheter maintenant', to: plan.to }}
              details={{ label: 'Voir les détails', to: plan.to }}
            />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-4 border-t border-z-line pt-5 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-8">
        <TrustRow
          items={[
            { icon: 'ti-shield-check', label: PLANS_TRUST.secure },
            { icon: 'ti-bolt', label: PLANS_TRUST.fast },
          ]}
        />
        <PaymentRow label={PLANS_TRUST.pay} methods={PLANS_TRUST.methods} />
      </div>
    </Section>
  )
}
