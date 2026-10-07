import { Link } from 'react-router'
import { ROUTES } from '../data'
import { BAND_TIGHT, COLUMN, EASE_200, QUAD_GRID, TINT, buttonClass, cx } from '../styles'
import { Accent, SectionHead } from '../ui'

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
  { badge: 'Tarif le plus bas', name: 'Ultra PRO 24 Mois', price: '109€', per: '/24 mois', perMonth: 'soit 4,54€/mois', lastFeature: 'Image nette & zéro coupure', to: ROUTES.p24 },
]

const PLANS_TRUST = {
  secure: 'Règlement 100% protégé',
  fast: 'Accès livré sans délai',
  pay: 'Paiement :',
  methods: ['VISA', 'MASTERCARD', 'PAYPAL'],
}

type PlanCardProps = { plan: Plan; features: string[]; flag: string }

/** Pricing card. The highlighted plan gets a thicker blue frame and a pill label on its top edge. */
function PlanCard({ plan, features, flag }: PlanCardProps) {
  return (
    <div
      data-flag={plan.featured ? flag : undefined}
      className={cx(
        'relative flex flex-col rounded-[22px] bg-white px-[24px] py-[30px] hover:-translate-y-[5px] hover:shadow-lp',
        EASE_200,
        plan.featured ? 'hm-flag border-2 border-lp-blue shadow-lp' : 'border border-lp-line shadow-lp-sm',
      )}
    >
      <span
        className={cx(
          'mb-[10px] self-start rounded-full px-[11px] py-[4px] text-[12px] font-extrabold',
          plan.badgeAlt ? 'bg-lp-soft2 text-lp-muted' : 'bg-lp-blue-soft text-lp-blue-d',
        )}
      >
        {plan.badge}
      </span>
      <div className="mb-[12px] text-[18px] font-extrabold">{plan.name}</div>
      <div className="font-archivo text-[42px] font-black text-lp-ink">
        {plan.price}
        <small className="text-[14px] font-semibold text-lp-muted">{plan.per}</small>
      </div>
      <div className="mt-[4px] mb-[2px] text-[13.5px] font-bold text-lp-muted">{plan.perMonth}</div>
      <ul className="my-[20px] grid gap-[11px]">
        {[...features, plan.lastFeature].map((feature) => (
          <li key={feature} className="flex items-center gap-[9px] text-[14px] text-lp-muted">
            <i className="ti ti-check flex-none text-[17px] text-lp-blue" /> {feature}
          </li>
        ))}
      </ul>
      <Link to={plan.to} className={buttonClass('primary', 'md', 'mt-auto w-full')}>
        Acheter maintenant
      </Link>
      <Link to={plan.to} className="mt-[10px] block text-center text-[13px] font-bold text-lp-muted hover:text-lp-blue">
        Voir les détails
      </Link>
    </div>
  )
}

/** Plans: four pricing cards and the payment trust line. The #abonnements anchor lands here. */
export function HomePlans() {
  return (
    <section id="abonnements" data-section="home-plans" className={cx(BAND_TIGHT, TINT)}>
      <div className={COLUMN}>
        <SectionHead
          eyebrow={PLANS_HEAD.eyebrow}
          title={
            <>
              {PLANS_HEAD.titleStart}
              <Accent>{PLANS_HEAD.titleBlue}</Accent>
            </>
          }
          text={PLANS_HEAD.text}
        />
        <div className={cx(QUAD_GRID, 'items-stretch gap-[20px]')}>
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} features={PLAN_FEATURES} flag={PLAN_FLAG} />
          ))}
        </div>
        <div className="mt-[28px] flex flex-wrap items-center justify-center gap-[18px] text-[13.5px] font-bold text-lp-dim">
          <span className="flex items-center gap-[7px]">
            <i className="ti ti-lock text-[16px] text-lp-blue" /> {PLANS_TRUST.secure}
          </span>
          <span className="flex items-center gap-[7px]">
            <i className="ti ti-bolt text-[16px] text-lp-blue" /> {PLANS_TRUST.fast}
          </span>
          <span className="flex items-center gap-[7px]">
            {PLANS_TRUST.pay}{' '}
            {PLANS_TRUST.methods.map((method) => (
              <b
                key={method}
                className="ml-[5px] rounded-[5px] bg-lp-soft2 px-[8px] py-[3px] text-[11px] font-extrabold text-lp-ink"
              >
                {method}
              </b>
            ))}
          </span>
        </div>
      </div>
    </section>
  )
}
