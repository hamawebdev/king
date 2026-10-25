import { Section, SectionHeading } from '@/components/kit'
import { AppsMatrix } from './home/sections/AppsMatrix'
import { InstallFaq, InstallHelpBanner, InstallHub } from './home/sections/Installation'
import { useInstallHead, useInstallKpis } from './home/sections/install/content'
import { PageHero } from './theme/PageHero'
import { useCopy, type Localized } from '@/lib/i18n'
import { useNavLabels } from '@/lib/site'
import { usePageTitle } from '@/lib/usePageTitle'

const fr = {
  pageTitle: 'Télécharger l’application King 365 TV | NovaStream',
  eyebrow: 'Applications officielles · Distributeur Agréé',
  title: 'Télécharger l’application King 365 TV',
  subtitle:
    'Les versions V2, V3 et V4 de l’application King 365 TV, puis le guide d’installation pas à pas pour chacun de vos appareils.',
  appsTitle: 'Applications King 365 TV V2, V3 et V4',
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    pageTitle: 'Download the King 365 TV App | NovaStream',
    eyebrow: 'Official Apps · Authorized Distributor',
    title: 'Download the King 365 TV App',
    subtitle:
      'Versions V2, V3 and V4 of the King 365 TV app, followed by a step-by-step installation guide for each of your devices.',
    appsTitle: 'King 365 TV Apps V2, V3 and V4',
  },
  de: {
    pageTitle: 'King 365 TV App herunterladen | NovaStream',
    eyebrow: 'Offizielle Apps · Autorisierter Vertriebspartner',
    title: 'King 365 TV App herunterladen',
    subtitle:
      'Die Versionen V2, V3 und V4 der King 365 TV App, dazu eine Schritt-für-Schritt-Installationsanleitung für jedes Ihrer Geräte.',
    appsTitle: 'King 365 TV Apps V2, V3 und V4',
  },
  es: {
    pageTitle: 'Descargar la aplicación King 365 TV | NovaStream',
    eyebrow: 'Aplicaciones oficiales · Distribuidor Autorizado',
    title: 'Descargar la aplicación King 365 TV',
    subtitle:
      'Las versiones V2, V3 y V4 de la aplicación King 365 TV y, a continuación, la guía de instalación paso a paso para cada uno de tus dispositivos.',
    appsTitle: 'Aplicaciones King 365 TV V2, V3 y V4',
  },
  pt: {
    pageTitle: 'Transferir a aplicação King 365 TV | NovaStream',
    eyebrow: 'Aplicações oficiais · Distribuidor Autorizado',
    title: 'Transferir a aplicação King 365 TV',
    subtitle:
      'As versões V2, V3 e V4 da aplicação King 365 TV e, em seguida, o guia de instalação passo a passo para cada um dos seus dispositivos.',
    appsTitle: 'Aplicações King 365 TV V2, V3 e V4',
  },
  // « King 365 TV -sana »: NBSP before the hyphen and a word joiner (U+2060) after it keep the compound on one line.
  fi: {
    pageTitle: 'Lataa King 365 TV -⁠sovellus | NovaStream',
    eyebrow: 'Viralliset sovellukset · Valtuutettu jälleenmyyjä',
    title: 'Lataa King 365 TV -⁠sovellus',
    subtitle:
      'King 365 TV -⁠sovelluksen versiot V2, V3 ja V4 sekä vaiheittainen asennusopas jokaiselle laitteellesi.',
    appsTitle: 'King 365 TV -⁠sovellukset V2, V3 ja V4',
  },
}

// Downloads (« Télécharger »): the official King 365 TV apps (S3 cards), then the 9-device installation
// hub, the install FAQ and the WhatsApp help banner (S11).
export default function Download() {
  const t = useCopy(COPY)
  const nav = useNavLabels()
  usePageTitle(t.pageTitle)
  const installHead = useInstallHead()
  const installKpis = useInstallKpis()
  return (
    <div className="overflow-x-clip">
      <PageHero
        crumbs={[{ label: nav.main.home, to: '/' }, { label: nav.main.download }]}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <Section className="pt-0 md:pt-0" aria-labelledby="apps-title">
        <h2 id="apps-title" className="sr-only">
          {t.appsTitle}
        </h2>
        <AppsMatrix installHref="#installation" />
      </Section>

      <Section id="installation" tone="mist-fade" className="scroll-mt-20" aria-labelledby="installation-title">
        <SectionHeading id="installation-title" eyebrow={installHead.eyebrow} title={installHead.title} subtitle={installHead.subtitle} />
        <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-2.5 sm:gap-4">
          {installKpis.map((kpi) => (
            <div key={kpi.label} className="flex flex-col-reverse rounded-2xl border border-line bg-canvas px-3 py-4 text-center shadow-card sm:px-5 sm:py-6">
              <dt className="mt-1.5 text-xs leading-snug text-body sm:text-sm">{kpi.label}</dt>
              <dd className="text-lg leading-tight font-bold tracking-tight text-balance text-heading tabular-nums sm:text-3xl">{kpi.value}</dd>
            </div>
          ))}
        </dl>
        <InstallHub className="mt-14 md:mt-20" />
        <InstallFaq className="mt-20 md:mt-28" />
        <InstallHelpBanner className="mt-16 md:mt-20" />
      </Section>
    </div>
  )
}
