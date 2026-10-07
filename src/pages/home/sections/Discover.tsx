import { Chip, Eyebrow, Kw, Reveal, Section } from '@/components/brand'
import { BRAND, BRAND_UPPER } from '@/lib/site'
import { cn } from '@/lib/utils'
import type { Card, IconText } from '../data'

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

/** Discover: figures, reasons, themes. Sand band: split head, ruled statement of figures, 3×2 ledger. */
export function HomeDiscover() {
  return (
    <Section zone="sand" dataSection="home-discover" aria-labelledby="home-discover-title">
      {/* Head: title left, intro and themes right (stacked below lg). */}
      <div className="grid gap-x-grid gap-y-6 lg:grid-cols-12 lg:items-end">
        <header className="flex flex-col lg:col-span-6">
          <Eyebrow>{DISCOVER.eyebrow}</Eyebrow>
          <h2 id="home-discover-title" className="mt-4 font-display text-display-md text-z-fg">
            {DISCOVER.titleStart}
            <Kw>{DISCOVER.titleBlue}</Kw>
          </h2>
        </header>
        <div className="lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8">
          <p className="max-w-[56ch] font-sans text-lead text-z-soft">{DISCOVER.text}</p>
          <ul className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0">
            {DISCOVER.cats.map((c) => (
              <li key={c.label}>
                <Chip icon={c.icon}>{c.label}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Figures: a ruled statement, 2×2 on phone, one row from tablet. */}
      <ul className="m-0 mt-head grid list-none grid-cols-2 border-y border-z-line p-0 md:grid-cols-4">
        {DISCOVER.stats.map((s, i) => (
          <li
            key={s.label}
            className={cn(
              'flex flex-col gap-2.5 border-z-line px-4 py-6 md:px-6 md:py-8',
              'max-md:even:border-l max-md:[&:nth-child(n+3)]:border-t',
              'md:border-l md:first:border-l-0 md:first:pl-0',
              i === 0 && 'max-md:pl-0',
              i === 2 && 'max-md:pl-0',
            )}
          >
            <span className="price-num text-stat-lg text-z-fg">{s.value}</span>
            <span className="font-sans text-meta font-semibold text-z-muted">{s.label}</span>
          </li>
        ))}
      </ul>

      {/* Reasons: ledger rows, no box, ink rule on top. */}
      <div className="mt-section-sm">
        <h3 className="max-w-[24ch] font-display text-display-sm text-z-fg">{DISCOVER.subTitle}</h3>
        <ul className="m-0 mt-10 grid list-none gap-x-6 gap-y-10 p-0 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
          {DISCOVER.cards.map((c, i) => (
            <Reveal as="li" key={c.title} index={i % 3} className="ledger">
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-display text-title text-z-fg">{c.title}</h4>
                <i className={cn('ti', c.icon, 'mt-0.5 shrink-0 text-[22px] text-evergreen-700')} aria-hidden="true" />
              </div>
              <p className="mt-2 max-w-[38ch] font-sans text-small text-z-soft">{c.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
