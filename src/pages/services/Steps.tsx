import type { ReactNode } from 'react'
import { IconTile, Section, SectionHead, useReveal } from '@/components/brand'
import { cn } from '@/lib/utils'

// Reseller: the four numbered tools as ledger rows on the ivory band (DIRECTION §9.4).
// Each row: 1px ink rule, the step's own italic numeral, the text, and a decorative evergreen tile.

type Step = { n: string; icon: string; text: ReactNode }

const STEPS: Step[] = [
  {
    n: '01',
    icon: 'ti-layout-dashboard',
    text: "Une console claire pour suivre vos abonnés, leurs échéances et vos crédits restants, depuis n'importe quel écran.",
  },
  {
    n: '02',
    icon: 'ti-user-plus',
    text: 'Créez un compte en quelques secondes, choisissez la durée et envoyez les accès à votre client par message privé. Tout est rangé par date et par statut, sans aucun tableur à tenir.',
  },
  {
    n: '03',
    icon: 'ti-chart-line',
    text: "Des statistiques détaillées présentent vos ventes mensuelles, vos meilleures journées et les comptes à relancer, accompagnées d'un récapitulatif hebdomadaire automatique.",
  },
  {
    n: '04',
    icon: 'ti-file-invoice',
    text: (
      <>
        <p>
          Personnalisez vos factures avec votre nom et votre logo, exportez-les en un clic et retrouvez chaque
          paiement dans un historique clair.
        </p>
        <p className="mt-4 text-copy text-z-soft">
          <strong className="font-semibold text-z-fg">Tarifs libres</strong> : fixez vos propres prix, ajustez vos
          marges et proposez des remises à vos meilleurs clients.
        </p>
      </>
    ),
  },
]

function StepRow({ step, index }: { step: Step; index: number }) {
  const { ref, className: revealClass, style } = useReveal<HTMLLIElement>(index)
  return (
    <li
      ref={ref}
      style={style}
      className={cn(
        revealClass,
        'ledger grid grid-cols-[1fr_auto] items-start gap-x-grid pb-10 md:grid-cols-[7rem_1fr_auto] md:pb-12 lg:grid-cols-12 lg:pt-8 lg:pb-14',
      )}
    >
      <p className="col-start-1 row-start-1 font-display text-stat-lg leading-none text-z-accent italic lg:col-span-2">
        {step.n}
      </p>
      <IconTile
        icon={step.icon}
        size={44}
        className="col-start-2 row-start-1 md:col-start-3 lg:col-span-2 lg:col-start-11 lg:justify-self-end"
      />
      <div className="col-span-2 row-start-2 mt-5 max-w-[58ch] font-sans text-lead text-z-body md:col-span-1 md:col-start-2 md:row-start-1 md:mt-1 lg:col-span-8 lg:col-start-3">
        {typeof step.text === 'string' ? <p>{step.text}</p> : step.text}
      </div>
    </li>
  )
}

export function ResellerSteps() {
  return (
    <Section zone="ivory" dataSection="reseller-steps" aria-labelledby="reseller-steps-title">
      <SectionHead id="reseller-steps-title" title={<span className="tracking-[0.01em]">OUTILS</span>} />
      <ol className="mt-head list-none border-b border-z-line p-0">
        {STEPS.map((step, i) => (
          <StepRow key={step.n} step={step} index={i} />
        ))}
      </ol>
    </Section>
  )
}
