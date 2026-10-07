import type { ReactNode } from 'react'
import { AppMock, ChannelMosaic, DeviceFrame, Kw, Rosette, Section } from '@/components/brand'
import { BRAND_UPPER } from '@/lib/site'
import { cn } from '@/lib/utils'

// Heroes of the four inner pages (shop, reseller, downloads, contact), « Réserve » direction §9.3–9.6:
// paper ground, a two-line page H1 in display-lg on the left of a 7/5 split, and one quiet decorative
// object on the right (TV frame, app mock, chat phone) held in brass crop marks, or a rosette in the corner.

type HeroProps = {
  /** data-section id of the hero (kept from the original). */
  dataSection: string
  /** The H1 content (exact title text). */
  title: ReactNode
  /** Decorative object of the right column (aria-hidden). */
  visual?: ReactNode
  /** Visibility and sizing of the visual column. */
  visualClassName?: string
  /** Guilloché rosette in the top-right corner (shop, reseller). */
  rosette?: boolean
}

/** Shared hero: brass rule, H1, and the decorative right column. Nothing in it is revealed on scroll. */
function InnerHero({ dataSection, title, visual, visualClassName, rosette }: HeroProps) {
  return (
    <Section
      zone="paper"
      rhythm="hero"
      dataSection={dataSection}
      containerClassName={cn('grid items-center gap-x-grid gap-y-10 md:gap-y-12 lg:grid-cols-12', visual && 'lg:min-h-[22rem]')}
    >
      {rosette && (
        <Rosette
          className={cn(
            'absolute max-md:hidden',
            'md:-top-56 md:-right-72 md:w-[560px] md:opacity-[.10]',
            'lg:-top-24 lg:-right-40 lg:w-[640px] lg:opacity-[.12]',
          )}
        />
      )}
      <div className="relative lg:col-span-7">
        <span aria-hidden="true" className="block h-px w-12 bg-brass-500" />
        <h1 className="mt-6 font-display text-display-lg text-z-fg md:mt-8">{title}</h1>
      </div>
      {visual && (
        <div aria-hidden="true" className={cn('pointer-events-none relative lg:col-span-5', visualClassName)}>
          {visual}
        </div>
      )}
    </Section>
  )
}

/** One line of the two-line H1 (each line balances on its own if it has to wrap). */
function Line({ children }: { children: ReactNode }) {
  return <span className="block">{children}</span>
}

/** Four 1px brass crop marks around a decorative object (certificate framing, never a box). */
function CropMarks({ children, className }: { children: ReactNode; className?: string }) {
  const mark = 'absolute size-4 border-brass-500'
  return (
    <div className={cn('relative p-5 md:p-6', className)}>
      <span className={cn(mark, 'top-0 left-0 border-t border-l')} />
      <span className={cn(mark, 'top-0 right-0 border-t border-r')} />
      <span className={cn(mark, 'bottom-0 left-0 border-b border-l')} />
      <span className={cn(mark, 'right-0 bottom-0 border-r border-b')} />
      {children}
    </div>
  )
}

/** Contact visual: a phone showing an abstract conversation (three bars, no text). */
function ChatPhone() {
  const bar = 'h-9 rounded-card'
  return (
    <DeviceFrame kind="phone" className="mx-auto w-[176px] xl:w-[188px]">
      <div className="flex size-full flex-col px-3 pt-10 pb-3">
        <div className="flex items-center gap-2 border-b border-vault-line pb-3">
          <span className="size-6 rounded-full bg-evergreen-700" />
          <span className="h-1.5 w-16 rounded-full bg-vault-line" />
          <span className="ml-auto size-2 rounded-full bg-evergreen-600" />
        </div>
        <div className="flex flex-1 flex-col justify-end gap-3 pb-4">
          <span className={cn(bar, 'h-14 w-[74%] self-start rounded-bl-tag bg-evergreen-100')} />
          <span className={cn(bar, 'w-[56%] self-end rounded-br-tag bg-ivory')} />
          <span className={cn(bar, 'h-20 w-[78%] self-start rounded-bl-tag bg-evergreen-100')} />
        </div>
        <div className="flex h-9 items-center gap-2 rounded-control bg-vault-raised px-3">
          <span className="h-1.5 flex-1 rounded-full bg-vault-line" />
          <span className="size-5 rounded-full bg-brass-500" />
        </div>
      </div>
    </DeviceFrame>
  )
}

/** Shop ("Boutique"): H1 left, the TV frame with the channel mosaic right (lg), rosette corner. */
export function ShopHero() {
  return (
    <InnerHero
      dataSection="shop-hero"
      rosette
      title={
        <>
          <Line>Des formules pensées</Line> <Kw className="block">pour chaque salon.</Kw>
        </>
      }
      visualClassName="hidden lg:block"
      visual={
        <CropMarks className="ml-auto max-w-[520px]">
          <DeviceFrame kind="tv" className="w-full">
            <ChannelMosaic step />
          </DeviceFrame>
        </CropMarks>
      }
    />
  )
}

/** Reseller ("Revendeur"): the H1 alone on paper, the rosette in the corner. */
export function ResellerHero() {
  return (
    <InnerHero
      dataSection="reseller-hero"
      rosette
      title={
        <>
          <Line>Vendez avec</Line> <Kw className="block">NOVASTREAM</Kw>
        </>
      }
    />
  )
}

/** Downloads ("Télécharger"): H1, then the app mock (right from lg, under the title on tablet, hidden on phone). */
export function DownloadHero() {
  return (
    <InnerHero
      dataSection="download-hero"
      title={
        <>
          <Line>Vos Applications</Line> <Kw className="block">{BRAND_UPPER}</Kw>
        </>
      }
      visualClassName="hidden md:-mt-28 md:block lg:mt-0"
      visual={
        <CropMarks className="max-w-[380px] md:ml-auto lg:max-w-[440px]">
          <AppMock />
        </CropMarks>
      }
    />
  )
}

/** Contact: the keyword line, then the promise; the chat phone on the right (lg). */
export function ContactHero() {
  return (
    <InnerHero
      dataSection="contact-hero"
      title={
        <>
          <Kw className="block">{'Besoin d\'aide ?'}</Kw> <Line>Notre équipe vous répond</Line>
        </>
      }
      visualClassName="hidden lg:block"
      visual={
        <CropMarks className="ml-auto w-full max-w-[400px]">
          <ChatPhone />
        </CropMarks>
      }
    />
  )
}
