import { useEffect, useRef, useState } from 'react'
import { Check, Copy, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useInstallCopy } from './content'
import type { DownloaderCode } from './devices'

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for browsers without the async clipboard (or without permission).
    const field = document.createElement('textarea')
    field.value = text
    field.setAttribute('readonly', '')
    field.style.position = 'fixed'
    field.style.opacity = '0'
    document.body.appendChild(field)
    field.select()
    const ok = document.execCommand('copy')
    field.remove()
    return ok
  }
}

/**
 * One Downloader code: big monospaced digits (readable from the sofa) and a copy button with feedback.
 * `size="lg"` for a single code, `md` when several sit side by side.
 */
export function CodeCard({ label, code, size = 'lg' }: DownloaderCode & { size?: 'lg' | 'md' }) {
  const t = useInstallCopy().hub
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function onCopy() {
    if (!(await copyText(code))) return
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={cn(
        'flex gap-3 rounded-xl border border-line bg-slate-50/70',
        size === 'lg' ? 'items-center justify-between py-3 pr-3 pl-4' : 'items-center justify-between py-3 pr-3 pl-4 sm:flex-col sm:items-stretch sm:py-3',
      )}
    >
      <div className="min-w-0">
        <p className="text-[11px] font-semibold tracking-[0.08em] text-body uppercase">{label}</p>
        <p
          className={cn(
            'mt-1 font-mono leading-none font-bold tracking-[0.12em] whitespace-nowrap text-heading tabular-nums',
            size === 'lg' ? 'text-[2rem] sm:text-[2.5rem]' : 'text-[1.625rem]',
          )}
        >
          {code}
        </p>
      </div>
      <button
        type="button"
        onClick={onCopy}
        aria-label={t.copyAria(code, label)}
        className={cn(
          size === 'md' && 'sm:w-full',
          'inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-lg border px-3 text-sm font-semibold transition-colors duration-150',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
          copied
            ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
            : 'border-line bg-canvas text-heading shadow-card hover:border-slate-300 hover:bg-slate-50',
        )}
      >
        {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
        <span aria-hidden="true">
          {copied ? t.copied : t.copy}
        </span>
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? t.copiedAnnounce(code) : ''}
      </span>
    </div>
  )
}

/** Codes the spec says to avoid and uninstall: shown in red, deliberately not copyable. */
export function ObsoleteCodes({ codes }: { codes: DownloaderCode[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {codes.map((c) => (
        <li key={c.code} className="flex items-center gap-2.5 rounded-lg border border-red-100 bg-red-50/60 px-3 py-2">
          <X className="size-4 shrink-0 text-red-600" aria-hidden="true" />
          <span className="text-sm font-medium text-heading">{c.label}</span>
          <span className="ml-auto font-mono text-base font-semibold tracking-wider text-red-700 tabular-nums">{c.code}</span>
        </li>
      ))}
    </ul>
  )
}
