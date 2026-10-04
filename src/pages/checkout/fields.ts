// Billing fields of the stock WooCommerce checkout (French labels as WooCommerce prints them).
export type FieldKind = 'text' | 'email' | 'tel' | 'country' | 'postcode'

export type CheckoutField = {
  id: string
  label: string
  kind: FieldKind
  required: boolean
  /** form-row-first / form-row-last sit side by side; wide rows take the full width. */
  row: 'first' | 'last' | 'wide'
  placeholder?: string
  autoComplete?: string
  /** Address line 2: the label is visually hidden, only the placeholder shows. */
  hiddenLabel?: boolean
}

export const BILLING_FIELDS: CheckoutField[] = [
  { id: 'billing_first_name', label: 'Prénom', kind: 'text', required: true, row: 'first', autoComplete: 'given-name' },
  { id: 'billing_last_name', label: 'Nom', kind: 'text', required: true, row: 'last', autoComplete: 'family-name' },
  { id: 'billing_company', label: 'Nom de l’entreprise', kind: 'text', required: false, row: 'wide', autoComplete: 'organization' },
  { id: 'billing_country', label: 'Pays/région', kind: 'country', required: true, row: 'wide', autoComplete: 'country' },
  {
    id: 'billing_address_1',
    label: 'Numéro et nom de rue',
    kind: 'text',
    required: true,
    row: 'wide',
    placeholder: 'Numéro de voie et nom de la rue',
    autoComplete: 'address-line1',
  },
  {
    id: 'billing_address_2',
    label: 'Appartement, suite, unité, etc.',
    kind: 'text',
    required: false,
    row: 'wide',
    placeholder: 'Bâtiment, appartement, lot, etc. (facultatif)',
    autoComplete: 'address-line2',
    hiddenLabel: true,
  },
  { id: 'billing_postcode', label: 'Code postal', kind: 'postcode', required: true, row: 'wide', autoComplete: 'postal-code' },
  { id: 'billing_city', label: 'Ville', kind: 'text', required: true, row: 'wide', autoComplete: 'address-level2' },
  { id: 'billing_phone', label: 'Téléphone', kind: 'tel', required: true, row: 'wide', autoComplete: 'tel' },
  { id: 'billing_email', label: 'Adresse e-mail', kind: 'email', required: true, row: 'wide', autoComplete: 'email' },
]

export const COUNTRIES = [
  'Algérie',
  'Allemagne',
  'Belgique',
  'Canada',
  'Espagne',
  'France',
  'Italie',
  'Luxembourg',
  'Maroc',
  'Monaco',
  'Pays-Bas',
  'Portugal',
  'Royaume-Uni',
  'Suisse',
  'Tunisie',
]

export const DEFAULT_COUNTRY = 'France'

export type PaymentMethod = { id: string; title: string; description: string }

// Placeholder gateways (titles are generic payment words, descriptions newly written).
export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'card',
    title: 'Carte bancaire',
    description: 'Réglez votre commande en toute sécurité avec votre carte de paiement.',
  },
  {
    id: 'bacs',
    title: 'Virement bancaire',
    description:
      'Effectuez le virement depuis votre banque en indiquant le numéro de commande en référence. Votre accès est activé dès réception des fonds.',
  },
]

export type FieldError = 'required' | 'email' | 'phone' | 'postcode'

/** Same checks as WooCommerce's checkout script and server-side validation (required, e-mail, phone, FR postcode). */
export function validateField(field: CheckoutField, raw: string, country: string): FieldError | null {
  const value = raw.trim()
  if (!value) return field.required ? 'required' : null
  if (field.kind === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'email'
  if (field.kind === 'tel' && value.replace(/[\s#0-9_\-+/().]/g, '').length > 0) return 'phone'
  if (field.kind === 'postcode' && country === 'France' && !/^\d{5}$/.test(value.replace(/\s/g, ''))) return 'postcode'
  return null
}

export function fieldErrorMessage(field: CheckoutField, error: FieldError) {
  const name = `Facturation ${field.label}`
  switch (error) {
    case 'email':
      return { name, rest: ' n’est pas une adresse e-mail valide.' }
    case 'phone':
      return { name, rest: ' n’est pas un numéro de téléphone valide.' }
    case 'postcode':
      return { name, rest: ' n’est pas un code postal valide.' }
    default:
      return { name, rest: ' est un champ obligatoire.' }
  }
}
