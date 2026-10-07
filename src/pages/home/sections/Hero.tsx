import { ButtonLink, ChannelMosaic, DeviceFrame, Kw, RatingPill, Recap, Seal, Section, StatStrip } from '@/components/brand'
import { BRAND } from '@/lib/site'
import { ROUTES, type IconText } from '../data'

const HERO = {
  rating: 'Service préféré en 2026 · 4.8/5',
  titleStart: 'Découvrez ',
  titleKeyword: '+5200 Chaînes TV',
  titleEnd: ' sans Limite',
  sub: `${BRAND} rassemble le sport en live, les sorties ciné et des milliers d’épisodes au même endroit. Formules dès 39€ par an.`,
  cta: 'Activer mon accès TV',
  renew: 'Je renouvelle',
  trust: [
    { icon: 'ti-lock', label: 'Paiement Protégé' },
    { icon: 'ti-bolt', label: 'Envoi Quasi Immédiat' },
    { icon: 'ti-users', label: '40 000+ Inscrits' },
  ] as IconText[],
}

const OFFER = {
  ribbon: 'COUP DE CŒUR',
  plan: 'Pack Intégral 12 Mois',
  oldPrice: '108€/an',
  price: '59€',
  per: '/an',
  pct: '−45%',
  save: 'Tarif spécial jusqu’à fin octobre',
  cta: 'Abonner Maintenant',
  feats: ['5200+ Chaînes', '8000+ VOD', 'Ultra HD 4K', 'Rattrapage'],
}

/** Seal text: the hero trust row, uppercased (DIRECTION §7.6). */
const SEAL = `${HERO.trust.map((t) => t.label.toUpperCase()).join(' · ')} ·`

/** "Avis 4.8/5" is split into its figure and its label so the rating reads as a stat (stars beside it). */
const PROOF = [
  { value: '4.8/5', label: 'Avis', star: true },
  { value: '40K+', label: 'Abonnés fidèles' },
  { value: '5200+', label: 'Chaînes en direct' },
  { value: '60+', label: 'Pays couverts' },
  { value: '24/7', label: 'Assistance dédiée' },
]

/** Strip of key figures under the hero: ivory band, ruled cells (2 / 3 + 2 / 5 in a row). */
function ProofStrip() {
  return (
    <Section zone="ivory" dataSection="home-proof" rhythm="sm" container="wide">
      <StatStrip items={PROOF} className="border-y-0" />
    </Section>
  )
}

/**
 * Opening band on paper: the pitch on the left (7 columns), and on the right (5) the offer card (vault Recap)
 * in front of a framed channel mosaic, with the guarantee seal on its corner. Then the proof strip.
 */
export function HomeHero() {
  return (
    <>
      <Section
        zone="paper"
        dataSection="home-hero"
        rhythm="hero"
        container="wide"
        containerClassName="grid items-center gap-x-grid gap-y-12 md:gap-y-14 lg:grid-cols-12"
      >
        <div className="lg:col-span-7 lg:pr-6 xl:pr-12">
          <RatingPill>{HERO.rating}</RatingPill>
          <h1 className="mt-7 font-display text-display-xl text-z-fg md:mt-8">
            {HERO.titleStart}
            {/* The keyword never breaks inside "+5200 Chaînes TV" (fits 358px at 42px). */}
            <span className="whitespace-nowrap">
              <Kw>{HERO.titleKeyword}</Kw>
            </span>
            {HERO.titleEnd}
          </h1>
          <p className="mt-6 max-w-[56ch] font-sans text-lead text-z-soft lg:max-w-[36ch]">{HERO.sub}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink to={ROUTES.p12} size="lg" iconEnd="arrow" full className="sm:w-auto">
              {HERO.cta}
            </ButtonLink>
            <ButtonLink to={ROUTES.renew} variant="secondary" size="md" full className="max-sm:min-h-14 sm:w-auto">
              {HERO.renew}
            </ButtonLink>
          </div>
        </div>

        <div className="relative w-full max-w-[560px] lg:col-span-5 lg:max-w-none">
          {/* TV frame behind the card, peeking above and to the right (lg only); below lg the card carries a mosaic strip. */}
          <DeviceFrame kind="tv" className="absolute top-0 -right-[4%] w-full opacity-90 max-lg:hidden">
            <ChannelMosaic />
          </DeviceFrame>
          <Recap
            as="p"
            ribbon={OFFER.ribbon}
            plan={OFFER.plan}
            old={OFFER.oldPrice}
            price={OFFER.price}
            unit={OFFER.per}
            saving={OFFER.pct}
            info={OFFER.save}
            features={OFFER.feats}
            cta={{ label: OFFER.cta, to: ROUTES.p12 }}
            guarantees={HERO.trust}
            mosaicStrip
            className="lg:mt-[22%] lg:mr-10 lg:-ml-6"
          />
          {/* Guarantee seal on the card's corner, outside the text: bottom-right on tablet, bottom-left from lg. */}
          <Seal text={SEAL} className="absolute z-[2] md:max-lg:-right-20 md:max-lg:-bottom-8 lg:-bottom-8 lg:-left-24 lg:max-xl:size-[112px] xl:-left-32" />
        </div>
      </Section>
      <ProofStrip />
    </>
  )
}
