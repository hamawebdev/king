import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import type { LocaleCode } from './LanguageSwitcher.locales'

// Small inline SVG flags (emoji flags render as letters on Windows). 3:2 frame, rounded by the wrapper.
const FLAGS: Record<LocaleCode, ReactNode> = {
  fr: (
    <>
      <rect width="1" height="2" fill="#002654" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#CE1126" />
    </>
  ),
  en: (
    <>
      <rect width="3" height="2" fill="#012169" />
      <path d="M0 0 3 2M3 0 0 2" stroke="#fff" strokeWidth="0.4" />
      <path d="M0 0 3 2M3 0 0 2" stroke="#C8102E" strokeWidth="0.14" />
      <path d="M1.5 0v2M0 1h3" stroke="#fff" strokeWidth="0.66" />
      <path d="M1.5 0v2M0 1h3" stroke="#C8102E" strokeWidth="0.4" />
    </>
  ),
  de: (
    <>
      <rect width="3" height="0.667" fill="#000" />
      <rect y="0.667" width="3" height="0.667" fill="#DD0000" />
      <rect y="1.333" width="3" height="0.667" fill="#FFCE00" />
    </>
  ),
  es: (
    <>
      <rect width="3" height="2" fill="#AA151B" />
      <rect y="0.5" width="3" height="1" fill="#F1BF00" />
    </>
  ),
  pt: (
    <>
      <rect width="3" height="2" fill="#DA291C" />
      <rect width="1.2" height="2" fill="#046A38" />
      <circle cx="1.2" cy="1" r="0.36" fill="#FFE900" />
      <circle cx="1.2" cy="1" r="0.22" fill="#DA291C" />
    </>
  ),
  fi: (
    <>
      <rect width="3" height="2" fill="#fff" />
      <path d="M1.05 0v2M0 1h3" stroke="#002F6C" strokeWidth="0.5" />
    </>
  ),
}

export function Flag({ code, className }: { code: LocaleCode; className?: string }) {
  return (
    <svg
      viewBox="0 0 3 2"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      className={cn('h-3.5 w-5 shrink-0 rounded-[3px] ring-1 ring-slate-900/10', className)}
    >
      {FLAGS[code]}
    </svg>
  )
}
