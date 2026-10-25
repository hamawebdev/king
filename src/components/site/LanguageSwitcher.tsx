import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { useCopy, type Localized } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { Flag } from './LanguageSwitcher.flags'
import { LOCALES, localeInfo, useLocale } from './LanguageSwitcher.locales'

const fr = { current: 'Langue : ', choose: 'Choisir la langue' }

const COPY: Localized<typeof fr> = {
  fr,
  en: { current: 'Language: ', choose: 'Choose language' },
  de: { current: 'Sprache: ', choose: 'Sprache wählen' },
  es: { current: 'Idioma: ', choose: 'Elegir idioma' },
  pt: { current: 'Idioma: ', choose: 'Escolher idioma' },
  fi: { current: 'Kieli: ', choose: 'Valitse kieli' },
}

/**
 * Header language menu: flag + short code button, opening a keyboard-operable menu of the six languages
 * (Arrow keys / Home / End move, Enter or Space picks, Esc or Tab closes). Language names stay in their own
 * language; the menu's aria-labels follow the current language.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const [code, setCode] = useLocale()
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const items = useRef<(HTMLButtonElement | null)[]>([])
  const menuId = useId()
  const active = localeInfo(code)
  const t = useCopy(COPY)

  // Close on outside click.
  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [open])

  // Focus the current language when the menu opens.
  useEffect(() => {
    if (!open) return
    const idx = LOCALES.findIndex((l) => l.code === code)
    items.current[Math.max(0, idx)]?.focus()
  }, [open, code])

  const close = (refocus = true) => {
    setOpen(false)
    if (refocus) button.current?.focus()
  }

  const onMenuKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const list = items.current.filter((n): n is HTMLButtonElement => !!n)
    const i = list.indexOf(document.activeElement as HTMLButtonElement)
    const go = (n: number) => list[(n + list.length) % list.length]?.focus()
    if (e.key === 'ArrowDown') go(i + 1)
    else if (e.key === 'ArrowUp') go(i - 1)
    else if (e.key === 'Home') go(0)
    else if (e.key === 'End') go(list.length - 1)
    else if (e.key === 'Escape') close()
    else if (e.key === 'Tab') return setOpen(false)
    else return
    e.preventDefault()
  }

  return (
    <div ref={root} className={cn('relative', className)}>
      <button
        ref={button}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={t.current + active.label}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault()
            setOpen(true)
          }
        }}
        className={cn(
          'inline-flex min-h-11 items-center gap-2 rounded-xl border border-transparent px-2.5 text-sm font-semibold text-heading',
          'transition-colors hover:border-line hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
          open && 'border-line bg-slate-50',
        )}
      >
        <Flag code={code} />
        <span>{active.short}</span>
        <ChevronDown aria-hidden="true" className={cn('size-4 text-body transition-transform', open && 'rotate-180')} />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label={t.choose}
        hidden={!open}
        onKeyDown={onMenuKey}
        className="absolute top-full right-0 z-50 mt-2 w-52 rounded-2xl border border-line bg-canvas p-1.5 shadow-card-hover"
      >
        {LOCALES.map((l, i) => {
          const selected = l.code === code
          return (
            <button
              key={l.code}
              ref={(n) => {
                items.current[i] = n
              }}
              type="button"
              role="menuitemradio"
              aria-checked={selected}
              lang={l.htmlLang}
              tabIndex={-1}
              onClick={() => {
                setCode(l.code)
                close()
              }}
              className={cn(
                'flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-[0.9375rem] text-heading outline-none',
                'hover:bg-slate-50 focus-visible:bg-brand-soft focus-visible:text-brand',
                selected && 'font-semibold',
              )}
            >
              <Flag code={l.code} />
              <span className="flex-1">{l.label}</span>
              {selected ? <Check aria-hidden="true" className="size-4 text-brand" /> : null}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/** Drawer version: the six languages as a two-column choice list (no popup inside the side menu). */
export function LanguageList({ className }: { className?: string }) {
  const [code, setCode] = useLocale()
  return (
    <ul className={cn('grid grid-cols-2 gap-2', className)}>
      {LOCALES.map((l) => {
        const selected = l.code === code
        return (
          <li key={l.code}>
            <button
              type="button"
              aria-pressed={selected}
              lang={l.htmlLang}
              onClick={() => setCode(l.code)}
              className={cn(
                'flex min-h-11 w-full items-center gap-2.5 rounded-xl border px-3 text-left text-sm transition-colors',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                selected ? 'border-brand/40 bg-brand-soft font-semibold text-brand' : 'border-line text-heading hover:bg-slate-50',
              )}
            >
              <Flag code={l.code} />
              {l.label}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
