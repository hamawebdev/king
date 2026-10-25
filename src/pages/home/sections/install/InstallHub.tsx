import { useEffect, useRef, useState, type Ref } from 'react'
import { ArrowRight, ChevronRight, Clock, Headset, MonitorSmartphone, RotateCcw } from 'lucide-react'
import { Card, WaButton } from '@/components/kit'
import { WHATSAPP_DISPLAY } from '@/lib/site'
import { cn } from '@/lib/utils'
import { useInstallCopy } from './content'
import { DEVICES, setupHelpMessage, tutorialMessage, type Device, type DeviceId } from './devices'
import { GuideBlocks } from './GuideBlocks'
import { nb } from './text'

const INDICATOR_ICONS = [Clock, MonitorSmartphone, Headset]

/** « Un Souci Pendant la Configuration ? » — direct WhatsApp help card. */
function HelpCard({ device, className }: { device?: Device; className?: string }) {
  const aside = useInstallCopy().aside
  return (
    <Card className={cn('p-5', className)}>
      <p className="text-base font-semibold text-heading">{nb(aside.helpTitle)}</p>
      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-body">{aside.helpText}</p>
      <WaButton message={setupHelpMessage(device?.name)} fullWidth className="mt-4">
        {WHATSAPP_DISPLAY}
      </WaButton>
    </Card>
  )
}

/** Left column: title, the 3 indicators, and (desktop) the help card. Sticky on large screens. */
function HubAside({ device }: { device?: Device }) {
  const aside = useInstallCopy().aside
  return (
    <div className="lg:sticky lg:top-24">
      <h3 className="text-xl leading-tight font-bold tracking-tight text-balance text-heading sm:text-2xl">{aside.title}</h3>
      <ul className="mt-5 hidden lg:grid lg:divide-y lg:divide-line lg:border-y lg:border-line">
        {aside.indicators.map((item, i) => {
          const Icon = INDICATOR_ICONS[i]
          return (
            <li
              key={item.label}
              className="flex items-center gap-3 py-3.5"
            >
              <Icon className="size-4.5 text-brand" aria-hidden="true" />
              <span className="w-16 text-base leading-none font-bold text-heading tabular-nums">{item.value}</span>
              <span className="text-sm leading-snug text-body">{item.label}</span>
            </li>
          )
        })}
      </ul>
      <HelpCard device={device} className="mt-6 max-lg:hidden" />
    </div>
  )
}

function DeviceGrid({ onPick }: { onPick: (id: DeviceId, button: HTMLButtonElement) => void }) {
  const t = useInstallCopy().hub
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3" aria-label={t.chooseDevice}>
      {DEVICES.map((device) => (
        <li key={device.id}>
          <button
            type="button"
            data-device={device.id}
            onClick={(e) => onPick(device.id, e.currentTarget)}
            className={cn(
              'group flex h-full w-full items-center gap-3.5 rounded-2xl border border-line bg-canvas p-4 text-left shadow-card',
              'transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card-hover motion-reduce:hover:translate-y-0',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
              'xl:flex-col xl:items-start xl:gap-3 xl:p-5',
            )}
          >
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-[1.375rem] leading-none"
            >
              {device.emoji}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[0.9375rem] leading-snug font-semibold text-heading">{device.name}</span>
              <span className="mt-0.5 block text-[0.8125rem] leading-snug text-body">{device.detail}</span>
            </span>
            <ChevronRight
              aria-hidden="true"
              className="size-5 shrink-0 text-slate-400 transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-brand motion-reduce:group-hover:translate-x-0 xl:hidden"
            />
          </button>
        </li>
      ))}
    </ul>
  )
}

function DeviceGuide({ device, index, onBack, headingRef }: { device: Device; index: number; onBack: () => void; headingRef: Ref<HTMLHeadingElement> }) {
  const t = useInstallCopy()
  return (
    <Card className="max-sm:rounded-none max-sm:border-0 max-sm:bg-transparent max-sm:p-0 max-sm:shadow-none sm:p-6 lg:p-7">
      <button
        type="button"
        onClick={onBack}
        data-change-device=""
        className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-300 bg-canvas px-4 text-[0.9375rem] font-semibold text-heading shadow-card transition-colors duration-150 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {t.aside.changeDevice}
        <RotateCcw className="size-4 text-brand" aria-hidden="true" />
      </button>

      <div className="mt-6 flex items-start gap-4 border-b border-line pb-6">
        <span
          aria-hidden="true"
          className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-[1.75rem] leading-none"
        >
          {device.emoji}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.08em] text-brand uppercase">{t.hub.deviceKicker(index + 1)}</p>
          <h3 ref={headingRef} tabIndex={-1} className="mt-1 text-2xl leading-tight font-bold tracking-tight text-heading outline-none">
            {device.guideTitle}
          </h3>
          {device.guideDetail ? <p className="mt-1 text-[0.9375rem] text-body">{device.guideDetail}</p> : null}
        </div>
      </div>

      <div className="mt-6">
        <GuideBlocks blocks={device.blocks} />
      </div>
    </Card>
  )
}

/**
 * The interactive 9-device hub (spec S11 §3–4): split screen with a sticky left column; picking a device swaps the
 * grid for that device's guide, with « Changer d'appareil ↺ » on top to come back. Exported for the Downloads page.
 */
export function InstallHub({ className }: { className?: string }) {
  const aside = useInstallCopy().aside
  const [selected, setSelected] = useState<DeviceId | null>(null)
  const lastPicked = useRef<DeviceId | null>(null)
  const pendingFocus = useRef<'guide' | 'grid' | null>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const index = selected ? DEVICES.findIndex((d) => d.id === selected) : -1
  const device = index >= 0 ? DEVICES[index] : undefined

  // After the view swaps: bring its top into view if it is above the fold, then move focus sensibly.
  useEffect(() => {
    const target = pendingFocus.current
    if (!target) return
    pendingFocus.current = null
    const panel = panelRef.current
    if (target === 'guide') {
      // The guide replaces a taller grid: if its top went above the header, bring it back.
      if (panel && panel.getBoundingClientRect().top < 80) panel.scrollIntoView({ block: 'start' })
      headingRef.current?.focus({ preventScroll: true })
    } else {
      // Back to the grid: focus (and reveal) the device that was open.
      panel?.querySelector<HTMLButtonElement>(`[data-device="${lastPicked.current}"]`)?.focus()
    }
  }, [selected])

  function pick(id: DeviceId) {
    lastPicked.current = id
    pendingFocus.current = 'guide'
    setSelected(id)
  }

  function back() {
    pendingFocus.current = 'grid'
    setSelected(null)
  }

  return (
    <div className={cn('grid gap-8 lg:grid-cols-12 lg:gap-10', className)}>
      <div className="lg:col-span-4">
        <HubAside device={device} />
      </div>

      <div ref={panelRef} className="min-w-0 scroll-mt-24 lg:col-span-8">
        {device ? (
          <DeviceGuide device={device} index={index} onBack={back} headingRef={headingRef} />
        ) : (
          <DeviceGrid onPick={pick} />
        )}

        <WaButton
          message={tutorialMessage(device?.name)}
          variant="outline"
          icon={false}
          fullWidth
          className="mt-4 justify-between text-left sm:min-h-13"
        >
          <span>{aside.tutorial}</span>
          <ArrowRight className="size-4.5 shrink-0 text-brand" aria-hidden="true" />
        </WaButton>

        <HelpCard device={device} className="mt-6 lg:hidden" />
      </div>
    </div>
  )
}
