import { BRAND, BRAND_UPPER } from '@/lib/site'
import type { Card, IconText } from '../data'
import { BAND_TIGHT, COLUMN, TINT, cx } from '../styles'
import { Accent, ChipRow, FeatureGrid, SectionHead, StatGrid } from '../ui'

const DISCOVER = {
  eyebrow: `${BRAND_UPPER} · saison 2026`,
  titleStart: 'Explorez ',
  titleBlue: BRAND,
  text: `${BRAND} a bâti sa réputation sur la fiabilité de ses flux et sur la clarté de ses offres. Chaque formule associe confort de visionnage, simplicité d’usage et suivi attentif.`,
  stats: [
    { value: '5200+', label: 'Chaînes TV' },
    { value: '8000+', label: 'Films & Séries' },
    { value: '40K+', label: 'Abonnés Comblés' },
    { value: '99.95%', label: 'Service Continu' },
  ],
  subTitle: `Ce Qui Distingue ${BRAND} au Quotidien`,
  cards: [
    { icon: 'ti-flag', title: 'Référence Francophone', text: `${BRAND} accompagne chaque soir des milliers de foyers en France, en Suisse et au Québec.` },
    { icon: 'ti-settings', title: 'Architecture Robuste', text: 'Nos relais vidéo sont installés dans plusieurs centres de données pour réduire les délais d’attente.' },
    { icon: 'ti-box', title: 'Lecteur Maison', text: 'Notre lecteur intégré propose le contrôle du direct, des listes de favoris et un rattrapage de dix jours.' },
    { icon: 'ti-world', title: 'Présence Mondiale', text: 'Votre accès vous suit en voyage et reste actif dans plus de 60 pays répartis sur tous les continents.' },
    { icon: 'ti-lifebuoy', title: 'Assistance Réactive', text: 'Une question ? Écrivez-nous à toute heure, la réponse arrive vite.' },
    { icon: 'ti-coin-euro', title: 'Budget Maîtrisé', text: 'Une seule formule remplace plusieurs offres payantes, pour un coût annuel nettement plus léger.' },
  ] as Card[],
  cats: [
    { icon: 'ti-ball-football', label: 'Sport' },
    { icon: 'ti-movie', label: 'Cinéma' },
    { icon: 'ti-device-tv', label: 'Séries' },
    { icon: 'ti-world', label: 'International' },
  ] as IconText[],
}

/** Discover: figures, reasons, themes. */
export function HomeDiscover() {
  return (
    <section data-section="home-discover" className={cx(BAND_TIGHT, TINT)}>
      <div className={COLUMN}>
        <SectionHead
          eyebrow={DISCOVER.eyebrow}
          title={
            <>
              {DISCOVER.titleStart}
              <Accent>{DISCOVER.titleBlue}</Accent>
            </>
          }
          text={DISCOVER.text}
        />
        <StatGrid items={DISCOVER.stats} className="mb-[54px]" />
        <SectionHead minor title={DISCOVER.subTitle} />
        <FeatureGrid items={DISCOVER.cards} columns={3} />
        <ChipRow items={DISCOVER.cats} className="mt-[40px]" />
      </div>
    </section>
  )
}
