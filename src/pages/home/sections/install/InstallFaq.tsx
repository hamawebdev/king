import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useInstallCopy } from './content'
import { Rich } from './Rich'
import { nb } from './text'

function FaqItem({ q, a, answerLabel }: { q: string; a: string; answerLabel: string }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <li className="border-b border-line last:border-b-0">
      <h4>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          data-faq-toggle=""
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center gap-4 rounded-xl py-5 text-left text-base leading-snug font-semibold text-heading transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:text-[1.0625rem]"
        >
          <span className="flex-1">{nb(q)}</span>
          <span
            aria-hidden="true"
            className={cn(
              'flex size-8 shrink-0 items-center justify-center rounded-full border border-line transition-[transform,background-color,border-color] duration-200 motion-reduce:transition-none',
              open && 'rotate-180 border-brand/20 bg-brand-soft text-brand',
            )}
          >
            <ChevronDown className="size-4.5" />
          </span>
        </button>
      </h4>
      <div id={`${id}-panel`} role="region" aria-labelledby={`${id}-button`} hidden={!open} className="pb-5 sm:pr-12">
        <p className="text-[0.9375rem] leading-relaxed text-body">
          <em className="text-slate-500">{answerLabel}</em> <Rich text={a} />
        </p>
      </div>
    </li>
  )
}

/** The 4 installation FAQs (spec S11 §5), accordion. */
export function InstallFaq({ className }: { className?: string }) {
  const t = useInstallCopy()
  return (
    <div className={cn('mx-auto max-w-3xl', className)}>
      <h3 className="text-center text-2xl leading-tight font-bold tracking-tight text-heading sm:text-[1.75rem]">{t.faqTitle}</h3>
      <ul className="mt-6 rounded-2xl border border-line bg-canvas px-5 shadow-card sm:px-7">
        {t.faq.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} answerLabel={t.faqAnswer} />
        ))}
      </ul>
    </div>
  )
}
