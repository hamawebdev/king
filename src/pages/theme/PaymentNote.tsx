import { ShieldCheck } from 'lucide-react'
import { useCopy, type Localized } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const COPY: Localized<string> = {
  fr: 'Paiement réglé avec votre conseiller sur WhatsApp : PayPal (avec protection acheteur) ou Virement Bancaire Instantané SEPA. Aucune saisie de carte bancaire sur le site.',
  en: 'Payment is arranged with your advisor on WhatsApp: PayPal (with buyer protection) or instant SEPA bank transfer. No card details are ever entered on the site.',
  de: 'Die Zahlung regeln Sie mit Ihrem Berater auf WhatsApp: PayPal (mit Käuferschutz) oder SEPA-Echtzeitüberweisung. Auf der Website werden keine Kartendaten eingegeben.',
  es: 'El pago se acuerda con tu asesor por WhatsApp: PayPal (con protección al comprador) o transferencia bancaria inmediata SEPA. Nunca introduces los datos de tu tarjeta en el sitio.',
  pt: 'O pagamento é tratado com o seu consultor no WhatsApp: PayPal (com proteção do comprador) ou transferência bancária imediata SEPA. Nenhum dado de cartão bancário é introduzido no site.',
  fi: 'Maksu sovitaan asiakasneuvojasi kanssa WhatsAppissa: PayPal (ostajansuojalla) tai SEPA-pikasiirto. Sivustolla ei syötetä korttitietoja.',
}

/** The only payment wording allowed: PayPal or instant SEPA transfer, arranged with the advisor on WhatsApp. */
export function PaymentNote({ className }: { className?: string }) {
  const text = useCopy(COPY)
  return (
    <p className={cn('flex items-start gap-2 text-sm leading-relaxed text-body', className)}>
      <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
      <span>{text}</span>
    </p>
  )
}
