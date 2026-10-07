import type { ReactNode } from 'react'
import { ChannelMosaic, FormCard, IconTile, Reveal, Rosette, Section, WhatsAppButton } from '@/components/brand'
import type { Zone } from '@/components/brand'
import { WHATSAPP_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ContactFormCard } from './ContactFormCard'

// Closing bands of the four inner pages, « Réserve » direction §9.3–9.6. Shop and contact: a 5/7 split
// with the form heading on the left (sticky from lg) and the form in an ivory card on the right. Reseller:
// the "Contactez-Nous" WhatsApp block as a contained vault panel on the left, the titled form card on the
// right. Downloads: the content is empty, so it closes the page as a quiet screen strip (mosaic + rosette).

/** 1px brass rule, the same mark that opens the inner-page heroes. */
function BrassRule({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn('block h-px w-12 bg-brass-500', className)} />
}

/** Form heading + form (light section): heading left (5 cols), ivory form card right (7 cols). */
function FormBand({
  dataSection,
  zone,
  heading,
  idPrefix,
}: {
  /** data-section id of the band (kept from the original). */
  dataSection: string
  zone: Zone
  /** The form heading (exact content string). */
  heading: string
  idPrefix: string
}) {
  return (
    <Section
      zone={zone}
      dataSection={dataSection}
      containerClassName="grid items-start gap-x-grid gap-y-8 md:gap-y-10 lg:grid-cols-12"
    >
      <Reveal className="lg:sticky lg:top-24 lg:col-span-5 lg:pt-2 lg:pr-8">
        <IconTile icon="ti-mail-opened" size={56} />
        <h2 className="mt-6 font-display text-display-sm text-z-fg md:mt-8">{heading}</h2>
        <BrassRule className="mt-6 md:mt-8" />
      </Reveal>
      <FormCard className="md:p-8 lg:col-span-7 lg:p-10">
        <ContactFormCard idPrefix={idPrefix} />
      </FormCard>
    </Section>
  )
}

/** Shop: question form on the sand band. */
export function ShopBand() {
  return <FormBand dataSection="shop-band" zone="sand" heading="Un mot pour l'équipe ?" idPrefix="shop-form" />
}

/** Reseller: "Contactez-Nous" vault panel with the Whatsapp button, then the titled question form. */
export function ResellerBand() {
  return (
    <Section
      zone="sand"
      dataSection="reseller-band"
      containerClassName="grid items-start gap-x-grid gap-y-6 md:gap-y-8 lg:grid-cols-12"
    >
      <Reveal className="relative overflow-hidden rounded-panel panel-vault cert-frame shadow-float p-8 md:p-10 lg:sticky lg:top-24 lg:col-span-5">
        {/* Tablet (stacked): title and button share one row; phone and desktop: one column. */}
        <div className="md:max-lg:flex md:max-lg:items-end md:max-lg:justify-between md:max-lg:gap-8">
          <div>
            <BrassRule />
            <h2 className="mt-6 font-display text-display-sm text-z-fg">Contactez-Nous</h2>
          </div>
          <WhatsAppButton
            label="Whatsapp"
            href={WHATSAPP_HREF}
            size="lg"
            full
            className="mt-8 sm:w-auto md:max-lg:mt-0 md:max-lg:shrink-0"
          />
        </div>
        {/* Two quiet rows of channels: the television cue of the panel, beside the form (desktop only). */}
        <ChannelMosaic
          rows={2}
          cols={6}
          fill={false}
          osd={false}
          selected={4}
          className="mt-10 -mx-[3px] opacity-50 max-lg:hidden"
        />
      </Reveal>
      <FormCard className="md:p-8 lg:col-span-7 lg:p-10">
        <h3 className="font-display text-title-lg text-z-fg">Un mot pour l'équipe ?</h3>
        <BrassRule className="mt-4 mb-8 w-7" />
        <ContactFormCard idPrefix="reseller-form" />
      </FormCard>
    </Section>
  )
}

/** Downloads: the band is empty in the content, so it closes the page as a screen strip above the footer. */
export function DownloadBand() {
  return (
    <Section
      zone="vault"
      rhythm="sm"
      dataSection="download-band"
      container="wide"
      className="border-b border-brass-500/40"
    >
      <Strip>
        <ChannelMosaic rows={2} cols={8} fill={false} osd={false} selected={5} className="md:hidden" />
        <ChannelMosaic rows={2} cols={16} fill={false} osd={false} selected={11} className="max-md:hidden" />
      </Strip>
      <Rosette className="absolute -right-24 top-1/2 w-[360px] -translate-y-1/2 opacity-[.10] md:-right-32 md:w-[520px]" />
    </Section>
  )
}

/** Decorative wrapper of the downloads strip (aria-hidden, no text). */
function Strip({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden="true" className="pointer-events-none relative opacity-[.35]">
      {children}
    </div>
  )
}

/** Contact: e-mail form on the paper band. */
export function ContactBand() {
  return <FormBand dataSection="contact-band" zone="paper" heading="Laissez-nous un mot." idPrefix="contact-form" />
}
