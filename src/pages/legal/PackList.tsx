import { usePacks } from '@/lib/packs'
import { Contact } from './shared'

/** The four official packs (lib/packs, in the current language), as listed in the sales and refund documents. */
export function PackList() {
  const packs = usePacks()
  return (
    <Contact>
      <ul className="grid gap-2">
        {packs.map((p) => (
          <li key={p.id} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
            <span className="font-medium text-heading">
              {p.name} — {p.duration}
            </span>
            <span className="tabular-nums">
              {p.price} <span className="text-slate-500">({p.perMonth})</span>
            </span>
          </li>
        ))}
      </ul>
    </Contact>
  )
}
