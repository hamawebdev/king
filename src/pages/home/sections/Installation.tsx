import { Section, SectionHeading } from '@/components/kit'
import { useInstallHead, useInstallKpis } from './install/content'
import { GuaranteeStrip } from './install/GuaranteeStrip'
import { HelpBanner } from './install/HelpBanner'
import { InstallFaq } from './install/InstallFaq'
import { InstallHub } from './install/InstallHub'
import { nb } from './install/text'

// Reused by foundation's inner pages (Shop: GuaranteeStrip under the packs; Downloads: the 9-device hub).
export { GuaranteeStrip } from './install/GuaranteeStrip'
export { InstallHub } from './install/InstallHub'
export { InstallFaq } from './install/InstallFaq'
export { HelpBanner as InstallHelpBanner } from './install/HelpBanner'

/** Section 11 — guarantee strip, installation hub (9 devices), 4 FAQs and the WhatsApp help banner. */
export function HomeInstallation() {
  const head = useInstallHead()
  const kpis = useInstallKpis()
  return (
    <Section className="pt-10 md:pt-14" aria-labelledby="installation-title">
      <GuaranteeStrip />

      {/* #installation (footer, S3 APK buttons, FAQ links) lands on the hub header, not on the guarantee strip above it. */}
      <div id="installation" className="mt-20 scroll-mt-20 md:mt-28">
        <SectionHeading
          id="installation-title"
          eyebrow={head.eyebrow}
          title={nb(head.title)}
          subtitle={head.subtitle}
        />
      </div>

      <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-2.5 sm:gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="flex flex-col-reverse rounded-2xl border border-line bg-canvas px-3 py-4 text-center shadow-card sm:px-5 sm:py-6">
            <dt className="mt-1.5 text-xs leading-snug text-body sm:text-sm">{kpi.label}</dt>
            <dd className="text-lg leading-tight font-bold tracking-tight text-balance text-heading tabular-nums sm:text-3xl">{kpi.value}</dd>
          </div>
        ))}
      </dl>

      <InstallHub className="mt-14 md:mt-20" />
      <InstallFaq className="mt-20 md:mt-28" />
      <HelpBanner className="mt-16 md:mt-20" />
    </Section>
  )
}
