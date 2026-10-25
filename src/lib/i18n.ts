// Site translations. French is the source copy; every other language mirrors its shape exactly.
// Pattern: `const fr = {...}; const COPY: Localized<typeof fr> = { fr, en: {...}, ... }` then `const t = useCopy(COPY)`.
import { useLocale, type LocaleCode } from '@/components/site/LanguageSwitcher.locales'

export type { LocaleCode }
export { useLocale }

/** One value per site language. TypeScript makes every language carry the same keys as the French copy. */
export type Localized<T> = Record<LocaleCode, T>

/** The copy for the current site language (re-renders when the visitor switches language). */
export function useCopy<T>(copy: Localized<T>): T {
  const [locale] = useLocale()
  return copy[locale]
}

/** Same as useCopy, for code outside React components that already knows the language. */
export function pickCopy<T>(copy: Localized<T>, locale: LocaleCode): T {
  return copy[locale]
}
