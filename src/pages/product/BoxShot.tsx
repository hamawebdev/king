import { Coffret, Seal } from '@/components/brand'
import type { CoffretVariant } from '@/components/brand'
import { cn } from '@/lib/utils'

type BoxShotProps = {
  /** Accessible name of the box image (the product name), as on the original render. */
  label: string
  className?: string
  /** Duration numeral shown on the box ("12"). Read from the label when omitted ("Abonnement 12 mois"). */
  months?: string
  /** Plan name printed on the box ("Premium 12 Mois"). Defaults to the label. */
  plan?: string
  /** Route variant of the box (DIRECTION §7.7). Read from the label when omitted. */
  variant?: CoffretVariant
  /** lg = hero box (4:5), sm = related card (16:10). */
  size?: 'lg' | 'sm'
  /** Guarantee seal text (existing strings, uppercased), pinned to the box's top-right corner from md. */
  seal?: string
}

const VARIANTS: CoffretVariant[] = ['3', '6', '12', '24']

/** Months and box variant from a product name or slug ("Abonnement 24 mois", "renouvellement-12-mois"). */
function boxShotSpec(text: string): { months: string; variant: CoffretVariant } {
  const months = text.match(/(\d+)[\s-]*mois/i)?.[1] ?? '12'
  if (/renouvellement/i.test(text)) return { months, variant: 'renew' }
  const variant = (VARIANTS as string[]).includes(months) ? (months as CoffretVariant) : '12'
  return { months, variant }
}

/**
 * Product box shot: the brand coffret (certificate box with a channel-mosaic strip, the duration numeral and
 * the plan name, all as pseudo-content), named like the original render (role="img" + the product label).
 */
export function BoxShot({ label, className, months, plan, variant, size = 'lg', seal }: BoxShotProps) {
  const spec = boxShotSpec(label)
  return (
    <div className={cn('relative w-full', size === 'lg' && 'max-w-[420px]', className)}>
      <Coffret
        label={label}
        months={months ?? spec.months}
        plan={plan ?? label}
        variant={variant ?? spec.variant}
        size={size}
        className="max-w-none"
      />
      {seal && size === 'lg' && <Seal text={seal} className="absolute -top-7 -right-7 z-[2] lg:size-28 xl:-top-8 xl:-right-8" />}
    </div>
  )
}
