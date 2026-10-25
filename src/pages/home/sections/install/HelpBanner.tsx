import { ArrowRight } from 'lucide-react'
import { ButtonLink, WaButton } from '@/components/kit'
import { cn } from '@/lib/utils'
import { HELP_BANNER } from './content'
import { nb } from './text'

/** « Bannière Finale d'Assistance Conciergerie WhatsApp » (spec S11 §6). */
export function HelpBanner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border border-brand/10 bg-mist px-5 py-10 text-center sm:px-10 sm:py-12 lg:px-16',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-2xl">
        <h3 className="text-2xl leading-tight font-bold tracking-tight text-balance text-heading sm:text-[2rem]">{nb(HELP_BANNER.title)}</h3>
        <p className="mt-4 text-base leading-relaxed text-pretty text-body sm:text-lg">{nb(HELP_BANNER.subtitle)}</p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <WaButton message={HELP_BANNER.whatsappMessage} size="lg" icon={false}>
            {HELP_BANNER.whatsappCta}
          </WaButton>
          <ButtonLink to={HELP_BANNER.plansTo} size="lg">
            {HELP_BANNER.plansCta}
            <ArrowRight className="size-4.5" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
