import { Placeholder } from '@/components/site/Placeholder'
import { Attr, Col, Hr, Section, SepBadge, SepDashes, Wrap } from './theme/builder'
import { NavyArcs } from './theme/art'
import { ContactButtons, FormCard, HeroSection, HeroTitle, NavySection, PriceCard, type Plan } from './theme/sections'
import { WHATSAPP_HREF } from '@/lib/site'
import { Link } from 'react-router'

// Shop page ("Boutique"): hero, three plan cards, reseller teaser, free-trial teaser and the
// question form on the navy band. All copy is placeholder text.

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

/** Illustration box of the two teaser blocks (325 × 239 artwork, centred in its column). */
function TeaserArt() {
  return (
    <span className="mfp-art" style={{ width: 325, maxWidth: '100%', aspectRatio: '325 / 239' }}>
      <Placeholder tone="illustration" label="Illustration" className="absolute inset-0 rounded-[14px]" />
    </span>
  )
}

export default function Pricing() {
  return (
    <div className="bt mfp mfp-pricing">
      <HeroSection variant="phone" layout="shop" tablet={['2-3', '1-3']} bottomPad={100}>
        <HeroTitle>
          Des formules pensées <span className="mfp-themecolor">pour chaque salon.</span>
        </HeroTitle>
      </HeroSection>

      <Section eqh className="mfp-cards" style={{ paddingBottom: 60 }}>
        {PLANS.map((plan) => (
          <PriceCard key={plan.label} plan={plan} features={FEATURES} />
        ))}
      </Section>

      <Section eqh rev style={{ paddingTop: 180, paddingBottom: 140 }}>
        <Wrap d="1" middle style={{ padding: '0 2%' }}>
          <Col d="1-2" kind="image">
            <TeaserArt />
          </Col>
          <Col d="1-2">
            <Attr mobileAlign="center">
              <h2>
                <span className="mfp-light">Devenir Revendeur</span>
                <br />
                Offre NovaStream
              </h2>
              <Hr mb={15} />
              <ContactButtons />
            </Attr>
          </Col>
        </Wrap>
      </Section>

      <Section style={{ paddingTop: 100, paddingBottom: 60, backgroundColor: '#fff7f2' }}>
        <Wrap d="1">
          <Col d="1-2">
            <Attr className="mfp-trial">
              <SepBadge />
              <Hr />
              <h2>
                <span className="mfp-themecolor">Découverte 24h</span>
                <br />
                Offre NovaStream
              </h2>
              <SepDashes />
              <Hr />
              <p />
              <p>
                <span className="mfp-hl">
                  <Link to="/contact/" className="mfp-btn mfp-btn--theme">
                    Email
                  </Link>
                  {' \u00a0'}
                </span>
                <span className="mfp-hl2">
                  <a className="mfp-btn mfp-btn--theme" href={WHATSAPP_HREF}>
                    Whatsapp
                  </a>
                </span>
                <br />
              </p>
            </Attr>
          </Col>
          <Col d="1-2" kind="image">
            <TeaserArt />
          </Col>
        </Wrap>
      </Section>

      <NavySection decor={<NavyArcs />}>
        <FormCard heading="Un mot pour l'équipe ?" idPrefix="shop-form" />
      </NavySection>
    </div>
  )
}
