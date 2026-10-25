import { createElement, type ComponentType } from 'react'
import { useCopy, type Localized } from '@/lib/i18n'
import { RefundFr } from './refund/fr'
import { RefundEn } from './refund/en'
import { RefundDe } from './refund/de'
import { RefundEs } from './refund/es'
import { RefundPt } from './refund/pt'
import { RefundFi } from './refund/fi'

// One component per language (French = the approved source); section ids are identical in every language.
const DOC: Localized<ComponentType> = { fr: RefundFr, en: RefundEn, de: RefundDe, es: RefundEs, pt: RefundPt, fi: RefundFi }

export function RefundContent() {
  // Static per-language components: switching language swaps the whole document (and rebuilds its contents list).
  return createElement(useCopy(DOC))
}
