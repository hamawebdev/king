import { useSyncExternalStore } from 'react'

/**
 * Site languages (spec: French by default plus five European languages, no Arabic).
 * Only French copy exists today: picking another language stores the choice and sets <html lang>,
 * the content stays French. Translations plug in here later (read `useLocale()` and pick the strings).
 */
export const LOCALES = [
  { code: 'fr', htmlLang: 'fr-FR', label: 'Français', short: 'FR' },
  { code: 'en', htmlLang: 'en', label: 'English', short: 'EN' },
  { code: 'de', htmlLang: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'es', htmlLang: 'es', label: 'Español', short: 'ES' },
  { code: 'pt', htmlLang: 'pt', label: 'Português', short: 'PT' },
  { code: 'fi', htmlLang: 'fi', label: 'Suomi', short: 'FI' },
] as const

export type LocaleCode = (typeof LOCALES)[number]['code']
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: LocaleCode = 'fr'
const STORAGE_KEY = 'ns-locale'

function isLocale(value: unknown): value is LocaleCode {
  return LOCALES.some((l) => l.code === value)
}

function readStored(): LocaleCode {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY)
    return isLocale(v) ? v : DEFAULT_LOCALE
  } catch {
    return DEFAULT_LOCALE
  }
}

export function localeInfo(code: LocaleCode): Locale {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0]
}

function applyHtmlLang(code: LocaleCode) {
  if (typeof document !== 'undefined') document.documentElement.lang = localeInfo(code).htmlLang
}

let current: LocaleCode = typeof window === 'undefined' ? DEFAULT_LOCALE : readStored()
applyHtmlLang(current)
const listeners = new Set<() => void>()

export function setLocale(code: LocaleCode) {
  if (code === current) return
  current = code
  try {
    window.localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // Storage unavailable: the choice lasts for this visit only.
  }
  applyHtmlLang(code)
  listeners.forEach((fn) => fn())
}

function subscribe(fn: () => void) {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

/** Current site language and its setter, shared by every switcher on the page. */
export function useLocale(): [LocaleCode, (code: LocaleCode) => void] {
  const code = useSyncExternalStore(subscribe, () => current, () => DEFAULT_LOCALE)
  return [code, setLocale]
}
