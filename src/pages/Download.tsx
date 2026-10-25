import { Section, SectionHeading } from '@/components/kit'
import { AppsMatrix } from './home/sections/AppsMatrix'
import { InstallFaq, InstallHelpBanner, InstallHub } from './home/sections/Installation'
import { INSTALL_HEAD, INSTALL_KPIS } from './home/sections/install/content'
import { PageHero } from './theme/PageHero'
import { usePageTitle } from '@/lib/usePageTitle'

// Downloads (« Télécharger »): the official King 365 TV apps (S3 cards), then the 9-device installation
// hub, the install FAQ and the WhatsApp help banner (S11).
export default function Download() {
  usePageTitle('Télécharger l’application King 365 TV | NovaStream')
  return (
    <div className="overflow-x-clip">
      <PageHero
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Télécharger' }]}
        eyebrow="Applications officielles · Distributeur Agréé"
        title="Télécharger l’application King 365 TV"
        subtitle="Les versions V2, V3 et V4 de l’application King 365 TV, puis le guide d’installation pas à pas pour chacun de vos appareils."
      />

      <Section className="pt-0 md:pt-0" aria-labelledby="apps-title">
        <h2 id="apps-title" className="sr-only">
          Applications King 365 TV V2, V3 et V4
        </h2>
        <AppsMatrix installHref="#installation" />
      </Section>

      <Section id="installation" tone="mist-fade" className="scroll-mt-20" aria-labelledby="installation-title">
        <SectionHeading id="installation-title" eyebrow={INSTALL_HEAD.eyebrow} title={INSTALL_HEAD.title} subtitle={INSTALL_HEAD.subtitle} />
        <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-2.5 sm:gap-4">
          {INSTALL_KPIS.map((kpi) => (
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
