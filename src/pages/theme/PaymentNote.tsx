import { ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

/** The only payment wording allowed: PayPal or instant SEPA transfer, arranged with the advisor on WhatsApp. */
export function PaymentNote({ className }: { className?: string }) {
  return (
    <p className={cn('flex items-start gap-2 text-sm leading-relaxed text-body', className)}>
      <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
      <span>
        Paiement réglé avec votre conseiller sur WhatsApp : PayPal (avec protection acheteur) ou Virement Bancaire
        Instantané SEPA. Aucune saisie de carte bancaire sur le site.
      </span>
    </p>
  )
}
