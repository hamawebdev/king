// The four official packs (spec S10 « Grille Tarifaire Officielle des 4 Formules », p.12–13).
// Single source for the homepage pricing table, the shop, product pages and legal documents. No 3-month plan.

export type PackId = 'flex' | 'essentiel' | 'signature' | 'serenite'

export type Pack = {
  id: PackId
  /** 'Pack Flex' */
  name: string
  /** '35 €' */
  price: string
  /** '6 mois' */
  duration: string
  months: 6 | 12 | 24
  /** '5,83 €/mois' */
  perMonth: string
  /** Spec « Inclusions Clefs », word for word. */
  inclusions: string
  /** The recommended pack (Signature ⭐). */
  highlighted: boolean
  /** WhatsApp prefilled message, word for word (pass to waLink / <WaButton message>). */
  waMessage: string
}

export const PACKS: Pack[] = [
  {
    id: 'flex',
    name: 'Pack Flex',
    price: '35 €',
    duration: '6 mois',
    months: 6,
    perMonth: '5,83 €/mois',
    inclusions: 'Accès +5700 chaînes, VOD +16k, Replay, compatible toutes apps.',
    highlighted: false,
    waMessage: 'Bonjour NovaStream, je souhaite activer le Pack Flex 6 Mois (35€)',
  },
  {
    id: 'essentiel',
    name: 'Pack Essentiel',
    price: '55 €',
    duration: '12 mois',
    months: 12,
    perMonth: '4,58 €/mois',
    inclusions: 'Validité 12 mois serveur officiel, +5700 chaînes, EPG, VOD weekly.',
    highlighted: false,
    waMessage: 'Bonjour NovaStream, je souhaite activer le Pack Essentiel 12 Mois (55€)',
  },
  {
    id: 'signature',
    name: 'Pack Signature',
    price: '59,99 €',
    duration: '12 mois',
    months: 12,
    perMonth: '4,99 €/mois',
    inclusions: 'DNS Dédié anti-blocage FAI, 4K HDR, Support VIP 1-to-1 24/7.',
    highlighted: true,
    waMessage: 'Bonjour NovaStream, je souhaite activer le Pack Signature King 365 TV (59,99€)',
  },
  {
    id: 'serenite',
    name: 'Pack Sérénité',
    price: '105 €',
    duration: '24 mois',
    months: 24,
    perMonth: '4,38 €/mois',
    inclusions: "2 ans de tranquillité, DNS Dédié inclus, transfert d'écran gratuit.",
    highlighted: false,
    waMessage: 'Bonjour NovaStream, je souhaite activer le Pack Sérénité 24 Mois (105€)',
  },
]

export function packById(id: PackId): Pack {
  const pack = PACKS.find((p) => p.id === id)
  if (!pack) throw new Error(`Unknown pack: ${id}`)
  return pack
}
