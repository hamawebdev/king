import { Link } from 'react-router'
import { Attr, CheckMark, Col, Hr, Section, Wrap } from '../theme/builder'
import { CountUp } from './CountUp'

// Shop: the three plan cards (three across on desktop, two per row on tablets, stacked on phones).

type Plan = { label: string; tone: 'turquoise' | 'yellow' | 'pink'; price: number; to: string }

const PLANS: Plan[] = [
  { label: 'Plan 6 mois', tone: 'turquoise', price: 29, to: '/produit/abonnement-6-mois/' },
  { label: 'Plan 12 mois', tone: 'yellow', price: 49, to: '/produit/abonnement-12-mois/' },
  { label: 'Plan 24 mois', tone: 'pink', price: 119, to: '/produit/abonnement-24-mois/' },
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

/** Shop plan: cream card with a coloured pill, counted price, check list and the CTA. */
function PriceCard({ plan, features }: { plan: Plan; features: string[] }) {
  return (
    <Wrap d="1-3" t="1-2" style={{ padding: '20px 1%' }}>
      <Col>
        <Attr align="center" className="mfp-card">
          <span className={`mfp-pill mfp-pill--${plan.tone}`}>{plan.label}</span>
          <div className="mfp-price">
            <CountUp to={plan.price} />€
          </div>
          <p>
            <span className="mfp-ink">TTC</span>
          </p>
          <Hr mb={15} />
          <ul className="mfp-checks">
            {features.map((f) => (
              <li key={f}>
                <CheckMark /> {f}
              </li>
            ))}
          </ul>
        </Attr>
      </Col>
      <Col kind="button">
        <Link to={plan.to} className="mfp-btn mfp-btn--s3 mfp-btn--navy">
          Abonner Maintenant
        </Link>
      </Col>
    </Wrap>
  )
}

export function ShopPlans() {
  return (
    <Section dataSection="shop-plans" eqh className="mfp-cards" style={{ paddingBottom: 60 }}>
      {PLANS.map((plan) => (
        <PriceCard key={plan.label} plan={plan} features={FEATURES} />
      ))}
    </Section>
  )
}
