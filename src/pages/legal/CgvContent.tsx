import { createElement, type ComponentType } from 'react'
import { useCopy, type Localized } from '@/lib/i18n'
import { CgvFr } from './cgv/fr'
import { CgvEn } from './cgv/en'
import { CgvDe } from './cgv/de'
import { CgvEs } from './cgv/es'
import { CgvPt } from './cgv/pt'
import { CgvFi } from './cgv/fi'

// One component per language (French = the approved source); section ids are identical in every language.
const DOC: Localized<ComponentType> = { fr: CgvFr, en: CgvEn, de: CgvDe, es: CgvEs, pt: CgvPt, fi: CgvFi }

export function CgvContent() {
  // Static per-language components: switching language swaps the whole document (and rebuilds its contents list).
  return createElement(useCopy(DOC))
}
