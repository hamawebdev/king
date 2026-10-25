import { Section, SectionHeading } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { cn } from '@/lib/utils'

type Stage = 'past' | 'now' | 'next'

type Milestone = {
  /** « 2021 », « Aujourd'hui », « Horizon 2027 » */
  when: string
  /** « Origine », « Partenariat » … */
  phase: string
  title: string
  text: string
}

/** Stage of each milestone, in order: past steps solid, today highlighted, 2027 dashed. */
const STAGES: Stage[] = ['past', 'past', 'now', 'next']

/** Spec S7 (p. 7–8), copy word for word (French source; other languages mirror it). */
const fr: { eyebrow: string; title: string; milestones: Milestone[] } = {
  eyebrow: 'NOTRE PARCOURS · CONFIANCE & ENGAGEMENT',
  title: "Les Étapes d'un Partenariat d'Excellence",
  milestones: [
    {
      when: '2021',
      phase: 'Origine',
      title: 'Une Volonté de Clarté',
      text: "Face aux saturations fréquentes du marché, NovaStream est né d'un objectif précis : réconcilier haute fidélité visuelle, clarté des offres et suivi client rigoureux.",
    },
    {
      when: '2023',
      phase: 'Partenariat',
      title: 'Distributeur Agréé King 365',
      text: "Sélectionné pour la distribution officielle de l'infrastructure King 365 TV. Déploiement de relais d'activation dédiés garantissant un accès officiel, stable et conforme.",
    },
    {
      when: "Aujourd'hui",
      phase: 'Expérience Client',
      title: '+50 000 Accès & Support 7j/7',
      text: "Mise en place d'un système de distribution direct : livraison instantanée des accès via WhatsApp et e-mail, accompagnement technique personnalisé et garantie continue.",
    },
    {
      when: 'Horizon 2027',
      phase: 'Innovation',
      title: 'Écosystème & Mises à Jour',
      text: "Préparation constante des prochaines évolutions applicatives King 365 TV, optimisation des guides multi-écrans et portails d'assistance proactive.",
    },
  ],
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    eyebrow: 'OUR JOURNEY · TRUST & COMMITMENT',
    title: 'The Milestones of a Partnership Built on Excellence',
    milestones: [
      {
        when: '2021',
        phase: 'Origins',
        title: 'A Commitment to Clarity',
        text: 'Faced with a market plagued by frequent overloads, NovaStream was founded with one clear goal: to bring together high visual fidelity, clear offers and rigorous customer follow-up.',
      },
      {
        when: '2023',
        phase: 'Partnership',
        title: 'Authorized King 365 Distributor',
        text: 'Selected for the official distribution of the King 365 TV infrastructure. Dedicated activation relays deployed to guarantee official, stable and compliant access.',
      },
      {
        when: 'Today',
        phase: 'Customer Experience',
        title: '+50,000 Access Codes & Support 7 Days a Week',
        text: 'A direct distribution system: instant delivery of your access via WhatsApp and email, personalized technical support and an ongoing guarantee.',
      },
      {
        when: 'Horizon 2027',
        phase: 'Innovation',
        title: 'Ecosystem & Updates',
        text: 'Ongoing preparation of the next King 365 TV app releases, optimization of multi-screen guides and proactive support portals.',
      },
    ],
  },
  de: {
    eyebrow: 'UNSER WEG · VERTRAUEN & ENGAGEMENT',
    title: 'Die Etappen einer erstklassigen Partnerschaft',
    milestones: [
      {
        when: '2021',
        phase: 'Ursprung',
        title: 'Der Anspruch auf Klarheit',
        text: 'Angesichts häufiger Überlastungen am Markt entstand NovaStream mit einem klaren Ziel: hohe Bildqualität, transparente Angebote und eine sorgfältige Kundenbetreuung in Einklang zu bringen.',
      },
      {
        when: '2023',
        phase: 'Partnerschaft',
        title: 'Autorisierter King 365 Vertriebspartner',
        text: 'Ausgewählt für den offiziellen Vertrieb der King 365 TV Infrastruktur. Aufbau eigener Aktivierungsrelais, die einen offiziellen, stabilen und konformen Zugang garantieren.',
      },
      {
        when: 'Heute',
        phase: 'Kundenerlebnis',
        title: '+50.000 Zugänge & Support 7 Tage die Woche',
        text: 'Ein direktes Vertriebssystem: sofortige Zustellung der Zugänge per WhatsApp und E-Mail, persönliche technische Betreuung und fortlaufende Garantie.',
      },
      {
        when: 'Horizont 2027',
        phase: 'Innovation',
        title: 'Ökosystem & Updates',
        text: 'Laufende Vorbereitung der nächsten Versionen der King 365 TV Apps, Optimierung der Multiscreen-Anleitungen und proaktive Support-Portale.',
      },
    ],
  },
  es: {
    eyebrow: 'NUESTRA TRAYECTORIA · CONFIANZA Y COMPROMISO',
    title: 'Las etapas de una colaboración de excelencia',
    milestones: [
      {
        when: '2021',
        phase: 'Origen',
        title: 'Una apuesta por la claridad',
        text: 'Ante las frecuentes saturaciones del mercado, NovaStream nació con un objetivo preciso: conciliar alta fidelidad visual, ofertas claras y un seguimiento riguroso del cliente.',
      },
      {
        when: '2023',
        phase: 'Colaboración',
        title: 'Distribuidor Autorizado King 365',
        text: 'Seleccionado para la distribución oficial de la infraestructura King 365 TV. Despliegue de relés de activación dedicados que garantizan un acceso oficial, estable y conforme.',
      },
      {
        when: 'Hoy',
        phase: 'Experiencia del cliente',
        title: '+50.000 accesos y soporte 7 días a la semana',
        text: 'Puesta en marcha de un sistema de distribución directa: entrega instantánea de los accesos por WhatsApp y correo electrónico, acompañamiento técnico personalizado y garantía continua.',
      },
      {
        when: 'Horizonte 2027',
        phase: 'Innovación',
        title: 'Ecosistema y actualizaciones',
        text: 'Preparación constante de las próximas versiones de las aplicaciones King 365 TV, optimización de las guías multipantalla y portales de soporte proactivo.',
      },
    ],
  },
  pt: {
    eyebrow: 'O NOSSO PERCURSO · CONFIANÇA E COMPROMISSO',
    title: 'As etapas de uma parceria de excelência',
    milestones: [
      {
        when: '2021',
        phase: 'Origem',
        title: 'Uma vontade de clareza',
        text: 'Perante as saturações frequentes do mercado, a NovaStream nasceu com um objetivo preciso: conciliar alta fidelidade visual, clareza das ofertas e um acompanhamento rigoroso do cliente.',
      },
      {
        when: '2023',
        phase: 'Parceria',
        title: 'Distribuidor Autorizado King 365',
        text: 'Selecionada para a distribuição oficial da infraestrutura King 365 TV. Implementação de relés de ativação dedicados que garantem um acesso oficial, estável e conforme.',
      },
      {
        when: 'Hoje',
        phase: 'Experiência do cliente',
        title: '+50.000 acessos e suporte 7 dias por semana',
        text: 'Criação de um sistema de distribuição direta: entrega instantânea dos acessos por WhatsApp e e-mail, acompanhamento técnico personalizado e garantia contínua.',
      },
      {
        when: 'Horizonte 2027',
        phase: 'Inovação',
        title: 'Ecossistema e atualizações',
        text: 'Preparação constante das próximas evoluções das aplicações King 365 TV, otimização dos guias multiecrã e portais de suporte proativo.',
      },
    ],
  },
  fi: {
    eyebrow: 'MATKAMME · LUOTTAMUS JA SITOUTUMINEN',
    title: 'Erinomaisen kumppanuuden vaiheet',
    milestones: [
      {
        when: '2021',
        phase: 'Alku',
        title: 'Tavoitteena selkeys',
        text: 'Markkinoiden toistuvien ruuhkien keskellä NovaStream syntyi selkeällä tavoitteella: yhdistää huippuluokan kuvanlaatu, selkeät tarjoukset ja huolellinen asiakkaiden seuranta.',
      },
      {
        when: '2023',
        phase: 'Kumppanuus',
        title: 'Valtuutettu King 365 -jälleenmyyjä',
        text: 'Valittu King 365 TV -infrastruktuurin viralliseksi jakelijaksi. Omat aktivointivälittimet takaavat virallisen, vakaan ja vaatimustenmukaisen pääsyn.',
      },
      {
        when: 'Tänään',
        phase: 'Asiakaskokemus',
        title: '+50 000 käyttöoikeutta ja tuki 7 päivää viikossa',
        text: 'Suora jakelujärjestelmä: käyttöoikeudet toimitetaan heti WhatsAppilla ja sähköpostilla, henkilökohtainen tekninen tuki ja jatkuva takuu.',
      },
      {
        when: 'Tähtäimessä 2027',
        phase: 'Innovaatio',
        title: 'Ekosysteemi ja päivitykset',
        text: 'Seuraavien King 365 TV -sovellusversioiden jatkuva valmistelu, monen näytön oppaiden optimointi ja ennakoivat tukiportaalit.',
      },
    ],
  },
}

function Marker({ stage }: { stage: Stage }) {
  if (stage === 'now') {
    return (
      <span className="relative flex size-6 items-center justify-center rounded-full bg-brand ring-4 ring-brand/15">
        <span className="absolute inset-0 animate-ping rounded-full bg-brand/30 motion-reduce:hidden" />
        <span className="relative size-2 rounded-full bg-white" />
      </span>
    )
  }
  if (stage === 'next') {
    return (
      <span className="flex size-6 items-center justify-center rounded-full border-2 border-dashed border-slate-300 bg-canvas">
        <span className="size-1.5 rounded-full bg-slate-300" />
      </span>
    )
  }
  return (
    <span className="flex size-6 items-center justify-center rounded-full border border-brand/20 bg-brand-soft">
      <span className="size-2 rounded-full bg-brand" />
    </span>
  )
}

/**
 * S7 — Notre Parcours: four milestones from 2021 to the 2027 horizon. Phone: vertical rail;
 * desktop: one horizontal connector. Past steps solid, « Aujourd'hui » highlighted, 2027 dashed (still ahead).
 */
export function HomeRoadmap() {
  const t = useCopy(COPY)
  const milestones = t.milestones.map((m, i) => ({ ...m, stage: STAGES[i] }))
  return (
    <Section id="parcours" aria-labelledby="parcours-title" className="scroll-mt-20">
      <SectionHeading
        id="parcours-title"
        eyebrow={t.eyebrow}
        title={t.title}
      />

      <ol className="m-0 mt-12 grid list-none p-0 md:mt-16 lg:grid-cols-4">
        {milestones.map((m, i) => {
          const last = i === milestones.length - 1
          // The segment leading to the future milestone is dashed.
          const dashedNext = milestones[i + 1]?.stage === 'next'
          return (
            <li key={i} className={cn('relative pl-11 lg:pt-12 lg:pr-8 lg:pl-0', !last && 'pb-10 lg:pb-0')}>
              {/* connector: vertical on phone/tablet, horizontal on desktop */}
              {!last ? (
                <>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute top-8 bottom-1 left-[11px] lg:hidden',
                      dashedNext ? 'border-l-2 border-dashed border-slate-300' : 'w-0.5 bg-brand/25',
                    )}
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute top-[11px] right-2 left-8 hidden lg:block',
                      dashedNext ? 'border-t-2 border-dashed border-slate-300' : 'h-0.5 bg-brand/25',
                    )}
                  />
                </>
              ) : null}
              <span aria-hidden="true" className="absolute top-0 left-0">
                <Marker stage={m.stage} />
              </span>

              <p
                className={cn(
                  'inline-flex items-center gap-1.5 text-sm font-semibold',
                  m.stage === 'next' ? 'text-body' : 'text-brand',
                )}
              >
                <span>{m.when}</span>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <span className={m.stage === 'next' ? 'text-body' : 'text-heading'}>{m.phase}</span>
              </p>
              <h3 className="mt-2 text-lg leading-snug font-semibold tracking-tight text-balance text-heading sm:text-xl">
                {m.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-pretty text-body">{m.text}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
