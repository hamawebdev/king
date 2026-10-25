import { useId, useState } from 'react'
import { Ban, ChevronDown, Info, MonitorPlay } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CodeCard, ObsoleteCodes } from './CodeCard'
import { useInstallCopy } from './content'
import type { AppEntry, BadgeTone, CalloutTone, DownloaderCode, GuideBlock } from './devices'
import { Rich } from './Rich'
import { nb } from './text'

const CALLOUT_TONES: Record<CalloutTone, { box: string; title: string; icon: string }> = {
  danger: { box: 'border-red-200 bg-red-50/70', title: 'text-red-800', icon: 'text-red-600' },
  warning: { box: 'border-amber-200 bg-amber-50/70', title: 'text-amber-900', icon: 'text-amber-600' },
  tip: { box: 'border-brand/15 bg-brand-soft/60', title: 'text-heading', icon: 'text-brand' },
  info: { box: 'border-line bg-slate-50/80', title: 'text-heading', icon: 'text-brand' },
}

function Callout({ block }: { block: Extract<GuideBlock, { type: 'callout' }> }) {
  const tone = CALLOUT_TONES[block.tone]
  return (
    <div className={cn('rounded-2xl border p-4 sm:p-5', tone.box)} role={block.tone === 'danger' ? 'note' : undefined}>
      <p className={cn('flex items-start gap-2 text-[0.9375rem] leading-snug font-bold', tone.title)}>
        {block.emoji ? (
          <span aria-hidden="true" className="shrink-0">
            {block.emoji}
          </span>
        ) : (
          <Info className={cn('mt-px size-4.5 shrink-0', tone.icon)} aria-hidden="true" />
        )}
        <span>
          {nb(block.title)}
          {block.subtitle ? <span className="mt-1 block">{nb(block.subtitle)}</span> : null}
        </span>
      </p>
      {block.paragraphs.map((p) => (
        <p key={p.slice(0, 32)} className="mt-2.5 text-[0.9375rem] leading-relaxed text-body">
          <Rich text={p} />
        </p>
      ))}
      {block.items ? (
        <ul className="mt-3 grid gap-2">
          {block.items.map((item) => (
            <li key={item.slice(0, 32)} className="text-[0.9375rem] leading-relaxed text-body">
              <Rich text={item} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function BlockTitle({ text }: { text: string }) {
  return (
    <h4 className="text-base leading-snug font-semibold text-heading">
      <Rich text={text} />
    </h4>
  )
}

function Steps({ block }: { block: Extract<GuideBlock, { type: 'steps' }> }) {
  const t = useInstallCopy().hub
  return (
    <div>
      {block.title ? <BlockTitle text={block.title} /> : null}
      <ol className={cn('grid gap-3', block.title && 'mt-4')}>
        {block.steps.map((step, i) => (
          <li key={i} className="grid grid-cols-[2rem_1fr] gap-3">
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand tabular-nums"
            >
              {i + 1}
            </span>
            <p className="pt-1 text-[0.9375rem] leading-relaxed text-body">
              <span className="sr-only">{t.stepPrefix(i + 1)}</span>
              <Rich text={step} />
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}

const BADGE_TONES: Record<BadgeTone, string> = {
  paid: 'border-amber-200 bg-amber-50 text-amber-800',
  free: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  special: 'border-brand/20 bg-brand-soft text-brand',
}

function AppBadge({ text, tone = 'paid' }: { text: string; tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        'inline-block rounded-md border px-2 py-0.5 text-[11px] leading-snug font-semibold tracking-[0.04em] uppercase',
        BADGE_TONES[tone],
      )}
    >
      {text}
    </span>
  )
}

function AppMark({ app }: { app: AppEntry }) {
  if (app.danger)
    return (
      <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
        <Ban className="size-5" />
      </span>
    )
  if (app.mark)
    return (
      <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">
        {app.mark}
      </span>
    )
  return (
    <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
      <MonitorPlay className="size-5" />
    </span>
  )
}

function AppSummary({ app }: { app: AppEntry }) {
  return (
    <span className="min-w-0 flex-1">
      <span className={cn('block text-[0.9375rem] leading-snug font-semibold', app.danger ? 'text-red-800' : 'text-heading')}>
        {app.danger ? '⚠️ ' : ''}
        {app.name}
      </span>
      {app.badge ? (
        <span className="mt-1.5 block">
          <AppBadge text={app.badge} tone={app.badgeTone} />
        </span>
      ) : null}
    </span>
  )
}

function AppPanel({ app }: { app: AppEntry }) {
  const many = (app.codes?.length ?? 0) > 1
  return (
    <div className="grid gap-3">
      {app.codes ? (
        <div className={cn('grid gap-2.5', many && 'sm:grid-cols-3')}>
          {app.codes.map((c) => (
            <CodeCard key={c.code} {...c} size={many ? 'md' : 'lg'} />
          ))}
        </div>
      ) : null}
      {app.obsolete ? <ObsoleteCodes codes={app.obsolete} /> : null}
      {app.text ? (
        <p className="text-[0.9375rem] leading-relaxed text-body">
          <Rich text={app.text} />
        </p>
      ) : null}
    </div>
  )
}

/** One app as an accordion (« ▾ »): the header is a real button with aria-expanded; apps with nothing to unfold are plain rows. */
function AppItem({ app, defaultOpen }: { app: AppEntry; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  const expandable = Boolean(app.text || app.codes || app.obsolete)
  const border = app.danger ? 'border-red-200' : 'border-line'

  if (!expandable)
    return (
      <li className={cn('flex items-center gap-3 rounded-2xl border bg-canvas p-3 sm:p-4', border)}>
        <AppMark app={app} />
        <AppSummary app={app} />
      </li>
    )

  return (
    <li className={cn('rounded-2xl border bg-canvas transition-shadow duration-200', border, open && 'shadow-card')}>
      <h5>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          data-app-toggle=""
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center gap-3 rounded-2xl p-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:p-4"
        >
          <AppMark app={app} />
          <AppSummary app={app} />
          <ChevronDown
            aria-hidden="true"
            className={cn(
              'size-5 shrink-0 text-body transition-transform duration-200 motion-reduce:transition-none',
              open && 'rotate-180 text-brand',
            )}
          />
        </button>
      </h5>
      <div id={`${id}-panel`} role="region" aria-labelledby={`${id}-button`} hidden={!open} className="px-3 pb-4 sm:px-4 sm:pl-[4.25rem]">
        <AppPanel app={app} />
      </div>
    </li>
  )
}

function AppList({ block }: { block: Extract<GuideBlock, { type: 'apps' }> }) {
  return (
    <div>
      <BlockTitle text={block.title} />
      <ul className="mt-4 grid gap-2.5">
        {block.apps.map((app, i) => (
          <AppItem key={app.name} app={app} defaultOpen={i === 0} />
        ))}
      </ul>
    </div>
  )
}

function CodesRow({ codes }: { codes: DownloaderCode[] }) {
  return (
    <div className="grid gap-2.5 sm:grid-cols-3">
      {codes.map((c) => (
        <CodeCard key={c.code} {...c} size="md" />
      ))}
    </div>
  )
}

/** Renders one device guide's blocks in spec order. */
export function GuideBlocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="grid gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'callout':
            return <Callout key={i} block={block} />
          case 'steps':
            return <Steps key={i} block={block} />
          case 'apps':
            return <AppList key={i} block={block} />
          case 'codes':
            return <CodesRow key={i} codes={block.codes} />
        }
      })}
    </div>
  )
}
