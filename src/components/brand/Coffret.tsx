import { BRAND_UPPER } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ChannelMosaic } from './Screens'
import { Seal } from './Rosette'
import type { CoffretVariant } from './types'

type CoffretProps = {
  /** Duration numeral from the product data ("12"). */
  months: string
  /** Plan name from the product data ("Premium 12 Mois"). */
  plan: string
  /** Word under the numeral, from the content ("Mois"). */
  unit?: string
  /** Route variant: 3 (evergreen-800), 6 (evergreen-700), 12 (vault), 24 (vault, brass frame), renew (ivory, ink). */
  variant?: CoffretVariant
  /** lg hero box (4:5, with the plan name), sm related card (16:10, numeral only: the card title names the plan), thumb 56×44. */
  size?: 'lg' | 'sm' | 'thumb'
  /** Seal text (product: ACCÈS EN 20 MIN · ESSAI 2H · SERVICE 7J/7 ·), top-right corner, lg only. */
  seal?: string
  className?: string
}

const FILL: Record<CoffretVariant, string> = {
  '3': 'panel-vault bg-evergreen-800',
  '6': 'panel-vault bg-evergreen-700',
  '12': 'panel-vault',
  '24': 'panel-vault after:border-brass-500/50',
  renew: 'bg-ivory border border-ink after:border-ink',
}

/**
 * Product box shot: a dark certificate box with a mosaic strip, the brand eyebrow, the duration numeral and
 * the plan name. Every word is pseudo-content from data-label (no new text nodes). Decorative (aria-hidden).
 */
export function Coffret({ months, plan, unit = 'Mois', variant = '12', size = 'lg', seal, className }: CoffretProps) {
  const light = variant === 'renew'
  const accent = light ? 'text-brass-700' : 'text-brass-300'

  if (size === 'thumb') {
    return (
      <span
        aria-hidden="true"
        className={cn('pointer-events-none relative grid h-11 w-14 shrink-0 place-items-center rounded-control', FILL[variant], 'after:hidden', className)}
      >
        <span data-label={months} className={cn('font-display text-xl leading-none italic before:content-[attr(data-label)]', accent)} />
      </span>
    )
  }

  const lg = size === 'lg'
  return (
    <div aria-hidden="true" className={cn('pointer-events-none relative isolate w-full', lg ? 'max-w-[420px]' : '', className)}>
      <span
        className={cn(
          'absolute inset-0 -z-10 translate-x-3.5 translate-y-3.5 rounded-panel',
          light ? 'border border-hairline-deep bg-sand-deep' : 'bg-evergreen-800',
          !lg && 'translate-x-2 translate-y-2',
        )}
      />
      <div
        className={cn(
          'cert-frame @container relative flex flex-col overflow-hidden rounded-panel shadow-float after:inset-3',
          lg ? 'aspect-[4/5] p-[clamp(0.875rem,7.5cqi,2rem)]' : 'aspect-[16/10] p-[clamp(0.75rem,5cqi,1.25rem)]',
          FILL[variant],
        )}
      >
        <ChannelMosaic rows={lg ? 2 : 1} cols={6} selected={lg ? 9 : 0} osd={false} fill={false} className={cn('-mx-[3px] opacity-60', light && 'opacity-80')} />
        <div className="mt-auto flex min-w-0 flex-col items-start">
          <span
            data-label={BRAND_UPPER}
            className={cn('eyebrow text-[clamp(0.5625rem,2.9cqi,0.75rem)] after:content-[attr(data-label)]', accent)}
          />
          <span className="mt-[clamp(0.25rem,2.5cqi,0.75rem)] flex items-baseline gap-[clamp(0.375rem,2.5cqi,0.75rem)]">
            <span
              data-label={months}
              className={cn(
                'font-display leading-none italic before:content-[attr(data-label)]',
                lg ? 'text-[clamp(2.5rem,34cqi,9rem)]' : 'text-[clamp(2rem,17cqi,4.5rem)]',
                accent,
              )}
            />
            <span
              data-label={unit}
              className={cn('font-display italic before:content-[attr(data-label)]', lg ? 'text-[clamp(1rem,7cqi,1.875rem)]' : 'text-[clamp(0.875rem,5cqi,1.5rem)]', accent)}
            />
          </span>
          {lg && (
            <span
              data-label={plan}
              className={cn('mt-[clamp(0.125rem,1.5cqi,0.5rem)] font-display text-[clamp(0.875rem,7.6cqi,2rem)] leading-tight before:content-[attr(data-label)]', light ? 'text-ink' : 'text-on-vault')}
            />
          )}
        </div>
      </div>
      {seal && lg && <Seal text={seal} className="absolute -top-8 -right-8 z-[2]" />}
    </div>
  )
}
