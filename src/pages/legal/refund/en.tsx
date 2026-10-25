import { BRAND } from '@/lib/site'
import { Callout, DocLayout, H2, HelpCard, P, ScheduleList, Wa } from '../shared'
import { PackList } from '../PackList'

// Refund schedule (days counted from activation).
const SCHEDULE: [string, string][] = [
  ['Up to day 14:', '85%'],
  ['From day 15 to day 60:', '65%'],
  ['From day 61 to day 90:', '40%'],
  ['From day 91 to day 120:', '25%'],
  ['From day 121 to day 180:', '20%'],
  ['Beyond 180 days:', '12%'],
]

// Refund Policy.
export function RefundEn() {
  return (
    <DocLayout
      title="Refund Policy"
      lead={
        <p>
          Our refund rules. Please read them before placing any order: they describe the only cancellation and refund
          terms applied by {BRAND}.
        </p>
      }
    >
      <P>These rules apply to the four {BRAND} plans:</P>
      <PackList />
      <H2 id="garantie-technique">14-Day Technical Guarantee</H2>
      <P>
        We take the greatest care to keep our service running, but every installation is different and many external
        factors can affect the quality of streaming at your home. If a technical incident that we are unable to fix
        prevents you from using the service normally, we will refund your order in full within the 14 days following
        your first purchase, whatever device is used.
      </P>
      <P>Outside this case, any refund request follows the schedule below.</P>
      <H2 id="points-a-respecter">Points to Observe</H2>
      <P>
        A fault related to your own equipment can only give rise to a refund if you accept our assistance and apply the
        settings we give you. If the problem still persists, we will proceed with the refund, provided that you send us
        proof of the malfunction, ideally in the form of a video. Before any request related to a technical issue,
        please write to us on WhatsApp so that our team can step in.
      </P>
      <Callout>
        <h3 className="text-lg leading-snug font-semibold text-heading text-pretty">
          Important: please do not open a dispute with PayPal or your bank to obtain a refund, as we would be required to
          provide the details of your order, which may result in charges of up to €1,500 payable by you
        </h3>
        <p className="mt-4 text-base leading-[1.75] text-heading">
          <strong className="font-semibold">
            Any accepted refund request results in the permanent closure of the account and makes it impossible to
            subscribe again!
          </strong>
        </p>
      </Callout>
      <H2 id="bareme">Refund Schedule</H2>
      <P>
        For any other request, the share of the price refunded depends on the number of days elapsed since the
        activation of your access:
      </P>
      <ScheduleList rows={SCHEDULE} suffix="of the price refunded" />
      <H2 id="modalites">Procedure</H2>
      <P>All requests are made to our team, in writing on WhatsApp.</P>
      <P>
        The refund is made using the method used for payment: to your PayPal account, or by SEPA transfer to the
        originating bank account for a payment by instant SEPA bank transfer, in principle within a maximum of 20
        business days after approval.
      </P>
      <P>
        Fees withheld by your payment provider at the time of purchase are not refunded and remain payable by the
        customer.
      </P>
      <P>
        If you have difficulty ordering, activating or renewing an access, our team is ready to help you.
      </P>
      <HelpCard id="une-question" heading="Any Questions?">
        <P>
          For any question about these refund rules, write to us on <Wa />.
        </P>
      </HelpCard>
    </DocLayout>
  )
}
