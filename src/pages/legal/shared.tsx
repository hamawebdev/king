import { BRAND, SITE_DOMAIN } from '@/lib/site'

// Placeholder contact address shown as plain text (the original prints its address unlinked).
export const LEGAL_EMAIL = `info@${SITE_DOMAIN}`

/** Bold inline brand mention, as the original documents do. */
export function B() {
  return <strong>{BRAND}</strong>
}
