import { createElement, type ComponentType } from 'react'
import { useCopy, type Localized } from '@/lib/i18n'
import { CguFr } from './cgu/fr'
import { CguEn } from './cgu/en'
import { CguDe } from './cgu/de'
import { CguEs } from './cgu/es'
import { CguPt } from './cgu/pt'
import { CguFi } from './cgu/fi'

// One component per language (French = the approved source); section ids are identical in every language.
const DOC: Localized<ComponentType> = { fr: CguFr, en: CguEn, de: CguDe, es: CguEs, pt: CguPt, fi: CguFi }

export function CguContent() {
  // Static per-language components: switching language swaps the whole document (and rebuilds its contents list).
  return createElement(useCopy(DOC))
}
