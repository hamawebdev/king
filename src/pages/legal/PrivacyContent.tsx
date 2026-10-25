import { createElement, type ComponentType } from 'react'
import { useCopy, type Localized } from '@/lib/i18n'
import { PrivacyFr } from './privacy/fr'
import { PrivacyEn } from './privacy/en'
import { PrivacyDe } from './privacy/de'
import { PrivacyEs } from './privacy/es'
import { PrivacyPt } from './privacy/pt'
import { PrivacyFi } from './privacy/fi'

// One component per language (French = the approved source); section ids are identical in every language.
const DOC: Localized<ComponentType> = { fr: PrivacyFr, en: PrivacyEn, de: PrivacyDe, es: PrivacyEs, pt: PrivacyPt, fi: PrivacyFi }

export function PrivacyContent() {
  // Static per-language components: switching language swaps the whole document (and rebuilds its contents list).
  return createElement(useCopy(DOC))
}
