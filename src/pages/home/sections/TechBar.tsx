import { Section } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'

/** Spec S4 « Technical Micro-Interactions Bar », word for word (emoji kept). French source; other languages mirror it. */
const fr = {
  items: [
    { emoji: '⚡', title: 'Zapping Instantané', text: "Changement de chaîne fluide en moins d'une seconde, sans latence." },
    { emoji: '📅', title: 'EPG Dynamique', text: 'Grille complète des programmes en direct avec résumés des diffusions.' },
    { emoji: '⏪', title: 'Replay & Timeshift', text: "Pause du direct et rattrapage de vos émissions favorites jusqu'à 15 jours." },
    { emoji: '📺', title: 'Qualité Adaptative', text: 'Ajustement intelligent de la résolution selon votre débit Internet réel.' },
  ],
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    items: [
      { emoji: '⚡', title: 'Instant Channel Switching', text: 'Smooth channel changes in under a second, with zero latency.' },
      { emoji: '📅', title: 'Dynamic EPG', text: 'A complete live program guide with show summaries.' },
      { emoji: '⏪', title: 'Replay & Timeshift', text: 'Pause live TV and catch up on your favorite shows for up to 15 days.' },
      { emoji: '📺', title: 'Adaptive Quality', text: 'Smart resolution adjustment based on your actual Internet speed.' },
    ],
  },
  de: {
    items: [
      { emoji: '⚡', title: 'Blitzschnelles Umschalten', text: 'Flüssiger Senderwechsel in weniger als einer Sekunde, ohne Latenz.' },
      { emoji: '📅', title: 'Dynamischer EPG', text: 'Vollständiger Live-Programmführer mit Inhaltsangaben zu den Sendungen.' },
      { emoji: '⏪', title: 'Replay & Timeshift', text: 'Live-TV pausieren und Ihre Lieblingssendungen bis zu 15 Tage lang nachholen.' },
      { emoji: '📺', title: 'Adaptive Qualität', text: 'Intelligente Anpassung der Auflösung an Ihre tatsächliche Internetgeschwindigkeit.' },
    ],
  },
  es: {
    items: [
      { emoji: '⚡', title: 'Zapping instantáneo', text: 'Cambio de canal fluido en menos de un segundo, sin latencia.' },
      { emoji: '📅', title: 'EPG dinámica', text: 'Parrilla completa de la programación en directo con resúmenes de las emisiones.' },
      { emoji: '⏪', title: 'Replay y Timeshift', text: 'Pausa el directo y recupera tus programas favoritos hasta 15 días después.' },
      { emoji: '📺', title: 'Calidad adaptativa', text: 'Ajuste inteligente de la resolución según tu velocidad real de Internet.' },
    ],
  },
  pt: {
    items: [
      { emoji: '⚡', title: 'Zapping instantâneo', text: 'Mudança de canal fluida em menos de um segundo, sem latência.' },
      { emoji: '📅', title: 'EPG dinâmico', text: 'Grelha completa da programação em direto com resumos das emissões.' },
      { emoji: '⏪', title: 'Replay e Timeshift', text: 'Pause o direto e recupere os seus programas favoritos até 15 dias depois.' },
      { emoji: '📺', title: 'Qualidade adaptativa', text: 'Ajuste inteligente da resolução de acordo com a sua velocidade real de Internet.' },
    ],
  },
  fi: {
    items: [
      { emoji: '⚡', title: 'Välitön kanavanvaihto', text: 'Sujuva kanavanvaihto alle sekunnissa, ilman viivettä.' },
      { emoji: '📅', title: 'Dynaaminen EPG', text: 'Kattava suorien lähetysten ohjelmaopas ohjelmakuvauksineen.' },
      { emoji: '⏪', title: 'Replay & Timeshift', text: 'Pysäytä suora lähetys ja katso suosikkiohjelmasi jälkikäteen jopa 15 päivän ajalta.' },
      { emoji: '📺', title: 'Mukautuva laatu', text: 'Älykäs resoluution säätö internetyhteytesi todellisen nopeuden mukaan.' },
    ],
  },
}

/**
 * Section 04 — compact horizontal bar between the apps matrix and the TV grid: four technical pillars.
 * The spec approves no heading for this band, so the h2 is visually hidden (structure only).
 */
export function HomeTechBar() {
  const t = useCopy(COPY)
  return (
    <Section id="specifications" aria-labelledby="techbar-title" className="scroll-mt-20 py-10 md:py-14">
      <h2 id="techbar-title" className="sr-only">
        {t.items.map((item) => item.title).join(', ')}
      </h2>
      <ul className="grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-canvas shadow-card sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item, i) => (
          <li
            key={i}
            className={[
              'group relative flex gap-4 p-5 transition-colors duration-200 hover:bg-mist/70 motion-reduce:transition-none sm:p-6 lg:flex-col lg:gap-3',
              i > 0 ? 'border-t border-line' : '',
              i === 1 ? 'sm:border-t-0 sm:border-l' : '',
              i === 2 ? 'lg:border-t-0 lg:border-l' : '',
              i === 3 ? 'sm:border-l lg:border-t-0' : '',
            ].join(' ')}
          >
            <span
              aria-hidden="true"
              className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-xl ring-1 ring-brand/10 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
            >
              {item.emoji}
            </span>
            <div className="min-w-0">
              <h3 className="text-[0.9375rem] font-semibold tracking-tight text-heading transition-colors duration-200 group-hover:text-brand motion-reduce:transition-none">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-body">{item.text}</p>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
