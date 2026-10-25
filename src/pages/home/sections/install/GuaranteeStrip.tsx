import { cn } from '@/lib/utils'
import { useInstallCopy } from './content'
import { nb } from './text'

/**
 * « Bandeau de Réassurance Post-Tarifs » (spec S11 §1): 3 columns that sit right under the 4 packs.
 * One bordered band split by hairlines (stacked on phones). Exported for the Shop page.
 */
export function GuaranteeStrip({ className }: { className?: string }) {
  const t = useInstallCopy()
  return (
    <ul
      className={cn(
        'grid divide-y divide-line rounded-2xl border border-line bg-canvas shadow-card md:grid-cols-3 md:divide-x md:divide-y-0',
        className,
      )}
    >
      {t.guarantees.map((item) => (
        <li key={item.title} className="flex gap-4 p-5 sm:p-6">
          <span
            aria-hidden="true"
            className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-[1.25rem] leading-none"
          >
            {item.emoji}
          </span>
          <div className="min-w-0">
            <h3 className="text-base leading-snug font-semibold text-heading">{nb(item.title)}</h3>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-body">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
