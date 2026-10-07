import { Section } from '@/components/brand'
import { useChrome } from '@/components/site/chrome-context'
import { CheckoutForm } from './checkout/CheckoutForm'
import { EmptyCart } from './checkout/EmptyCart'

// Checkout (DIRECTION §9.8): paper ground, billing form in an ivory card, light order summary in sand (7/5 from lg).
// The filled checkout starts close under the header so the total, the payment choice and "Commander" share the
// first desktop viewport.
export default function Checkout() {
  const { cartItems } = useChrome()
  const empty = cartItems.length === 0
  return (
    <Section
      zone="paper"
      dataSection="checkout"
      rhythm={empty ? 'section' : 'none'}
      className={empty ? undefined : 'pt-section-sm pb-hero'}
    >
      {empty ? <EmptyCart /> : <CheckoutForm items={cartItems} />}
    </Section>
  )
}
