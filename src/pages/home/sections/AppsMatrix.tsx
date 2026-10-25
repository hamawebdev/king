import { ArrowDownToLine, MonitorSmartphone, Tv } from 'lucide-react'
import { ButtonLink, Card, Section, SectionHeading } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { routeHref } from '@/lib/site'
import { cn } from '@/lib/utils'

type AppCopy = {
  name: string
  badge: string
  target: string
  /** Spec note shown after the target, in italics. */
  targetNote?: string
  description: string
  cta: string
}

/** Structure per card, left to right (same order as the copy). */
const APP_META: {
  version: 'V2' | 'V3' | 'V4'
  /** Spec « [Mise en avant] »: the featured card (visual emphasis only, no label). */
  featured?: boolean
  tvOnly?: boolean
}[] = [{ version: 'V2' }, { version: 'V3' }, { version: 'V4', featured: true, tvOnly: true }]

/** Spec S3 — the three official apps, left to right, word for word (French source; other languages mirror it). */
const fr: { eyebrow: string; title: string; subtitle: string; targetLabel: string; apps: AppCopy[] } = {
  eyebrow: 'ÉCOSYSTÈME CERTIFIÉ · APPLICATIONS DÉDIÉES',
  title: "L'Expérience King 365 TV sur Vos Écrans",
  subtitle:
    "Propulsé par NovaStream. Accédez à vos flux avec une fluidité absolue grâce aux applications officielles King 365 TV, calibrées sur-mesure pour chaque type d'appareil.",
  targetLabel: 'Cible : ',
  apps: [
    {
      name: 'King 365 TV Version 2 (V2)',
      badge: 'Édition Classique Éprouvée',
      target: 'Google TV, boîtiers TV Box, téléviseurs Smart TV et smartphones Android.',
      description:
        'Légèreté exemplaire, stabilité maximale sur tous types de débits (même modérés) et faible consommation de mémoire vive.',
      cta: 'Télécharger King 365 V2 (APK)',
    },
    {
      name: 'King 365 TV Version 3 (V3)',
      badge: 'Version Majeure · Multi-Écrans',
      target: 'Google TV, Android TV, TV Box, smartphones et tablettes Android.',
      description:
        'Polyvalence maximale, interface dynamique, guide des programmes (EPG) interactif, gestion optimisée des favoris et excellente réactivité.',
      cta: 'Télécharger King 365 V3 (APK)',
    },
    {
      name: 'King 365 TV Version 4 (V4 - Édition 2026)',
      badge: 'Dernière Version 2026 · TV Uniquement',
      target: 'Google TV récents, Smart TV Android, boîtiers TV Box et Fire TV Stick compatibles.',
      targetNote: '(Non compatible smartphones)',
      description:
        'Interface cinéma moderne et immersive dédiée aux grands écrans, navigation ultra-fluide, zapping instantané et optimisation native 4K.',
      cta: 'Télécharger King 365 V4 (APK)',
    },
  ],
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    eyebrow: 'CERTIFIED ECOSYSTEM · DEDICATED APPS',
    title: 'The King 365 TV Experience on Your Screens',
    subtitle:
      'Powered by NovaStream. Enjoy your streams with absolute smoothness thanks to the official King 365 TV apps, custom-tuned for every type of device.',
    targetLabel: 'Target devices: ',
    apps: [
      {
        name: 'King 365 TV Version 2 (V2)',
        badge: 'Proven Classic Edition',
        target: 'Google TV, TV boxes, Smart TVs and Android smartphones.',
        description:
          'Exceptionally lightweight, maximum stability at any connection speed (even modest ones) and low RAM usage.',
        cta: 'Download King 365 V2 (APK)',
      },
      {
        name: 'King 365 TV Version 3 (V3)',
        badge: 'Major Release · Multi-Screen',
        target: 'Google TV, Android TV, TV boxes, Android smartphones and tablets.',
        description:
          'Maximum versatility, a dynamic interface, an interactive program guide (EPG), optimized favorites management and excellent responsiveness.',
        cta: 'Download King 365 V3 (APK)',
      },
      {
        name: 'King 365 TV Version 4 (V4 - 2026 Edition)',
        badge: 'Latest 2026 Release · TV Only',
        target: 'Recent Google TV devices, Android Smart TVs, TV boxes and compatible Fire TV Sticks.',
        targetNote: '(Not compatible with smartphones)',
        description:
          'A modern, immersive cinema interface built for big screens, ultra-smooth navigation, instant channel switching and native 4K optimization.',
        cta: 'Download King 365 V4 (APK)',
      },
    ],
  },
  de: {
    eyebrow: 'ZERTIFIZIERTES ÖKOSYSTEM · EIGENE APPS',
    title: 'Das King 365 TV Erlebnis auf Ihren Bildschirmen',
    subtitle:
      'Powered by NovaStream. Genießen Sie Ihre Streams absolut flüssig – mit den offiziellen King 365 TV Apps, maßgeschneidert für jeden Gerätetyp.',
    targetLabel: 'Zielgeräte: ',
    apps: [
      {
        name: 'King 365 TV Version 2 (V2)',
        badge: 'Bewährte klassische Edition',
        target: 'Google TV, TV-Boxen, Smart TVs und Android-Smartphones.',
        description:
          'Außergewöhnlich schlank, maximale Stabilität bei jeder Bandbreite (auch bei moderaten Verbindungen) und geringer Arbeitsspeicherbedarf.',
        cta: 'King 365 V2 herunterladen (APK)',
      },
      {
        name: 'King 365 TV Version 3 (V3)',
        badge: 'Hauptversion · Multiscreen',
        target: 'Google TV, Android TV, TV-Boxen, Android-Smartphones und -Tablets.',
        description:
          'Maximale Vielseitigkeit, dynamische Oberfläche, interaktiver Programmführer (EPG), optimierte Favoritenverwaltung und hervorragende Reaktionsschnelligkeit.',
        cta: 'King 365 V3 herunterladen (APK)',
      },
      {
        name: 'King 365 TV Version 4 (V4 - Edition 2026)',
        badge: 'Neueste Version 2026 · Nur TV',
        target: 'Aktuelle Google-TV-Geräte, Android Smart TVs, TV-Boxen und kompatible Fire TV Sticks.',
        targetNote: '(Nicht mit Smartphones kompatibel)',
        description:
          'Moderne, immersive Kino-Oberfläche für große Bildschirme, ultraflüssige Navigation, blitzschnelles Umschalten und native 4K-Optimierung.',
        cta: 'King 365 V4 herunterladen (APK)',
      },
    ],
  },
  es: {
    eyebrow: 'ECOSISTEMA CERTIFICADO · APLICACIONES DEDICADAS',
    title: 'La experiencia King 365 TV en tus pantallas',
    subtitle:
      'Con la tecnología de NovaStream. Accede a tus emisiones con una fluidez absoluta gracias a las aplicaciones oficiales King 365 TV, ajustadas a medida para cada tipo de dispositivo.',
    targetLabel: 'Dispositivos: ',
    apps: [
      {
        name: 'King 365 TV Version 2 (V2)',
        badge: 'Edición clásica probada',
        target: 'Google TV, TV Box, Smart TV y smartphones Android.',
        description:
          'Ligereza ejemplar, máxima estabilidad con cualquier tipo de conexión (incluso moderada) y bajo consumo de memoria RAM.',
        cta: 'Descargar King 365 V2 (APK)',
      },
      {
        name: 'King 365 TV Version 3 (V3)',
        badge: 'Versión principal · Multipantalla',
        target: 'Google TV, Android TV, TV Box, smartphones y tabletas Android.',
        description:
          'Máxima versatilidad, interfaz dinámica, guía de programación (EPG) interactiva, gestión optimizada de favoritos y excelente capacidad de respuesta.',
        cta: 'Descargar King 365 V3 (APK)',
      },
      {
        name: 'King 365 TV Version 4 (V4 - Edición 2026)',
        badge: 'Última versión 2026 · Solo TV',
        target: 'Google TV recientes, Smart TV Android, TV Box y Fire TV Stick compatibles.',
        targetNote: '(No compatible con smartphones)',
        description:
          'Interfaz de cine moderna e inmersiva pensada para grandes pantallas, navegación ultrafluida, zapping instantáneo y optimización nativa en 4K.',
        cta: 'Descargar King 365 V4 (APK)',
      },
    ],
  },
  pt: {
    eyebrow: 'ECOSSISTEMA CERTIFICADO · APLICAÇÕES DEDICADAS',
    title: 'A experiência King 365 TV nos seus ecrãs',
    subtitle:
      'Com a tecnologia NovaStream. Aceda às suas emissões com fluidez absoluta graças às aplicações oficiais King 365 TV, calibradas à medida para cada tipo de dispositivo.',
    targetLabel: 'Dispositivos: ',
    apps: [
      {
        name: 'King 365 TV Version 2 (V2)',
        badge: 'Edição clássica comprovada',
        target: 'Google TV, TV Box, Smart TV e telemóveis Android.',
        description:
          'Leveza exemplar, estabilidade máxima com qualquer tipo de ligação (mesmo moderada) e baixo consumo de memória RAM.',
        cta: 'Transferir King 365 V2 (APK)',
      },
      {
        name: 'King 365 TV Version 3 (V3)',
        badge: 'Versão principal · Multiecrã',
        target: 'Google TV, Android TV, TV Box, telemóveis e tablets Android.',
        description:
          'Máxima versatilidade, interface dinâmica, guia de programação (EPG) interativo, gestão otimizada dos favoritos e excelente capacidade de resposta.',
        cta: 'Transferir King 365 V3 (APK)',
      },
      {
        name: 'King 365 TV Version 4 (V4 - Edição 2026)',
        badge: 'Versão mais recente 2026 · Apenas TV',
        target: 'Google TV recentes, Smart TV Android, TV Box e Fire TV Stick compatíveis.',
        targetNote: '(Não compatível com telemóveis)',
        description:
          'Interface de cinema moderna e imersiva dedicada aos grandes ecrãs, navegação ultrafluida, zapping instantâneo e otimização nativa em 4K.',
        cta: 'Transferir King 365 V4 (APK)',
      },
    ],
  },
  fi: {
    eyebrow: 'SERTIFIOITU EKOSYSTEEMI · OMAT SOVELLUKSET',
    title: 'King 365 TV -elämys näytöilläsi',
    subtitle:
      'NovaStreamin tarjoama. Katso lähetyksiäsi täysin sujuvasti virallisilla King 365 TV -sovelluksilla, jotka on hienosäädetty kullekin laitetyypille.',
    targetLabel: 'Laitteet: ',
    apps: [
      {
        name: 'King 365 TV Version 2 (V2)',
        badge: 'Hyväksi havaittu klassikkoversio',
        target: 'Google TV, TV-boksit, älytelevisiot ja Android-älypuhelimet.',
        description:
          'Erittäin kevyt, mahdollisimman vakaa kaikilla yhteysnopeuksilla (myös hitaammilla) ja vähäinen keskusmuistin käyttö.',
        cta: 'Lataa King 365 V2 (APK)',
      },
      {
        name: 'King 365 TV Version 3 (V3)',
        badge: 'Pääversio · Moninäyttö',
        target: 'Google TV, Android TV, TV-boksit, Android-älypuhelimet ja -tabletit.',
        description:
          'Maksimaalinen monipuolisuus, dynaaminen käyttöliittymä, interaktiivinen ohjelmaopas (EPG), optimoitu suosikkien hallinta ja erinomainen reagointikyky.',
        cta: 'Lataa King 365 V3 (APK)',
      },
      {
        name: 'King 365 TV Version 4 (V4 - versio 2026)',
        badge: 'Uusin versio 2026 · Vain TV',
        target: 'Uudet Google TV -laitteet, Android-älytelevisiot, TV-boksit ja yhteensopivat Fire TV Stickit.',
        targetNote: '(Ei yhteensopiva älypuhelimien kanssa)',
        description:
          'Moderni ja mukaansatempaava elokuvakäyttöliittymä suurille näytöille, erittäin sujuva navigointi, välitön kanavanvaihto ja natiivi 4K-optimointi.',
        cta: 'Lataa King 365 V4 (APK)',
      },
    ],
  },
}

/**
 * The spec gives no APK URL, so every CTA leads to the installation hub (S11), which lists the
 * Downloader codes per version.
 */
const APK_HREF = routeHref('/#installation')

/** The three app cards (V2 → V3 → V4) without the section shell. Reused on the Downloads page. */
export function AppsMatrix({
  className,
  headingLevel = 'h3',
  installHref = APK_HREF,
}: {
  className?: string
  headingLevel?: 'h2' | 'h3'
  /** Where the APK CTAs point (default: the homepage install hub). Pass '#installation' when the hub is on the same page. */
  installHref?: string
}) {
  const H = headingLevel
  const t = useCopy(COPY)
  return (
    <ul className={cn('m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3 lg:gap-6', className)}>
      {t.apps.map((copy, i) => {
        const app = { ...APP_META[i], ...copy }
        const TargetIcon = app.tvOnly ? Tv : MonitorSmartphone
        return (
          <Card
            as="li"
            key={app.version}
            interactive
            className={cn(
              'relative flex flex-col p-6 sm:p-7',
              app.featured && 'border-brand ring-1 ring-brand shadow-card-hover md:-my-3 md:py-9',
            )}
          >
            <div className="flex flex-col items-start gap-4">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex size-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold tracking-tight',
                  app.featured ? 'bg-brand text-white' : 'bg-brand-soft text-brand',
                )}
              >
                {app.version}
              </span>
              <p
                className={cn(
                  'inline-flex rounded-full border px-2.5 py-1 text-[11px] leading-snug font-semibold tracking-[0.06em] uppercase',
                  app.featured ? 'border-brand/20 bg-brand-soft text-brand' : 'border-line bg-slate-50 text-body',
                )}
              >
                {app.badge}
              </p>
            </div>

            <H className="mt-5 text-xl leading-snug font-bold tracking-tight text-balance text-heading">{app.name}</H>

            <div className="mt-4 flex gap-2.5 rounded-xl border border-line bg-slate-50/70 p-3.5 text-sm leading-relaxed">
              <TargetIcon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
              <p>
                <span className="font-semibold text-heading">{t.targetLabel}</span>
                {app.target}
                {app.targetNote ? (
                  <>
                    {' '}
                    <em className="font-medium text-heading">{app.targetNote}</em>.
                  </>
                ) : null}
              </p>
            </div>

            <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-pretty text-body">{app.description}</p>

            <ButtonLink href={installHref} variant={app.featured ? 'brand' : 'outline'} fullWidth className="mt-6">
              <ArrowDownToLine aria-hidden="true" className="size-4.5 shrink-0" />
              {app.cta}
            </ButtonLink>
          </Card>
        )
      })}
    </ul>
  )
}

/** Section 03 — Official apps matrix V2 → V3 → V4 on the mist → white fade. */
export function HomeAppsMatrix() {
  const t = useCopy(COPY)
  return (
    <Section id="applications" tone="mist-fade" className="scroll-mt-20">
      <SectionHeading
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />
      <AppsMatrix className="mt-12 md:mt-16" />
    </Section>
  )
}
