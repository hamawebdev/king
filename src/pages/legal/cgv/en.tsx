import { BRAND } from '@/lib/site'
import { Link } from 'react-router'
import { DocLayout, H2, P, Wa } from '../shared'
import { PackList } from '../PackList'

// Terms and Conditions of Sale: four packs, orders and payment arranged 1-to-1 on WhatsApp.
export function CgvEn() {
  return (
    <DocLayout
      title="Terms and Conditions of Sale"
      lead={
        <p>
          Sales on {BRAND}. The information on this site is reviewed frequently to reflect the current state of our
          offers.
        </p>
      }
    >
      <H2 id="formules">Plans Offered</H2>
      <P>
        {BRAND}, Authorized King 365 TV Distributor, offers four subscription plans, with no hidden commitment. The price
        shown covers the entire duration of the plan:
      </P>
      <PackList />
      <H2 id="commande">Ordering</H2>
      <P>
        Every order, renewal and activation is handled directly with a {BRAND} advisor on <Wa />. The advisor confirms
        with you the chosen plan and the device to be set up before payment.
      </P>
      <H2 id="modes-de-reglement">Accepted Payment Methods</H2>
      <P>
        Payment is agreed with your advisor on WhatsApp, by PayPal (with buyer protection) or by instant SEPA bank
        transfer. No bank card details are entered or stored on the site.
      </P>
      <P>
        Fees charged by certain payment providers remain payable by you and are not refunded in the event of
        cancellation.
      </P>
      <H2 id="activation">Activation</H2>
      <P>
        Your login credentials (Xtream API codes and M3U link) are sent to you on WhatsApp and by email as soon as
        payment is confirmed: usually in under 10 to 20 minutes during our opening hours, and up to 1 to 2 hours at
        peak times.
      </P>
      <H2 id="fiabilite">Reliability</H2>
      <P>
        Our teams monitor the platform’s availability day and night. Outages caused by the quality of your internet
        connection or by your equipment are beyond our control and cannot be attributed to us. We do everything
        possible to ensure stable streaming. Such external incidents do not give rise to any refund.
      </P>
      <H2 id="support">Support</H2>
      <P>Our team answers on WhatsApp 7 days a week and helps you free of charge to set up your device or your TV.</P>
      <H2 id="annulation">Cancellation / Refund Rules</H2>
      <P>
        The cancellation and refund conditions (14-day technical guarantee and refund schedule) are set out in
        our{' '}
        <Link to="/politique-de-remboursement/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
          refund policy
        </Link>
        , which alone is authoritative. Any request must be made in writing on WhatsApp, stating the plan ordered.
      </P>
      <P>
        In certain cases a trial is available for 3 hours or 24 hours before subscribing. If you encounter a technical
        difficulty, our team is at your disposal on WhatsApp.
      </P>
      <H2 id="interdits">Prohibited Uses</H2>
      <P>
        Sharing your login credentials with other people is prohibited. One code allows one active screen at a time:
        simultaneous use of the same access on several devices, as well as any rebroadcasting of the service, results
        in immediate termination, without any refund.
      </P>
      <H2 id="donnees-personnelles">Respect for Your Personal Data</H2>
      <P>
        No information about you is transferred to partners. Your anonymity and your privacy are an absolute priority
        for us.
      </P>
      <P>
        Account information and connection statistics are used solely for internal analyses intended to size our
        servers and to continuously improve the quality of the service we provide to you.
      </P>
    </DocLayout>
  )
}
