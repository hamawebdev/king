import { Link } from 'react-router'
import { Contact, DocLayout, H2, P, UL, Wa } from '../shared'

// Privacy Policy.
export function PrivacyEn() {
  return (
    <DocLayout title="Privacy Policy">
      <H2 id="donnees-recueillies">Personal Data Collected</H2>
      <P>Here is the data we may record:</P>
      <UL cols>
        <li>Last name</li>
        <li>First name</li>
        <li>Postal address</li>
        <li>Postcode</li>
        <li>Email address</li>
        <li>Mobile or landline phone number</li>
        <li>Country</li>
        <li>Date of birth</li>
      </UL>
      <P>
        This data reaches us mainly during your exchanges with our advisors on WhatsApp (ordering, activation,
        support). The site also stores a few preferences in your browser, described below.
      </P>
      <H2 id="collecte">Collection and Use</H2>
      <P>The following exchanges allow us to obtain your personal information:</P>
      <UL>
        <li>WhatsApp conversation with your advisor (order, renewal, activation)</li>
        <li>Sending of your login credentials by email</li>
      </UL>
      <P>
        Payment is made by PayPal or by instant SEPA bank transfer: no bank card data is entered or stored by the
        site.
      </P>
      <P>The information obtained in this way is used for the purposes below:</P>
      <UL>
        <li>Processing of orders and renewals</li>
        <li>Technical support</li>
      </UL>
      <H2 id="cookies">Cookies and Preferences</H2>
      <P>While you browse, the site stores only in your browser (local storage):</P>
      <UL>
        <li>Your acceptance of the cookie banner, so that it is no longer displayed</li>
        <li>The language chosen in the language selector</li>
      </UL>
      <P>
        This information stays on your device and is used solely to remember your display preferences. You can delete
        it at any time from your browser settings.
      </P>
      <H2 id="refus-et-suppression">Objection and Deletion of Data</H2>
      <P>You may at any time object to the use of your information or request its deletion.</P>
      <P>
        The right to object refers to the ability of each user to object to their data being used for some of the
        purposes stated at the time it was collected.
      </P>
      <P>
        The right to deletion, for its part, refers to the ability to request that one’s data be erased from a file,
        for example from a mailing list for newsletters or targeted commercial offers.
      </P>
      <P>To exercise these rights, contact us:</P>
      <Contact>
        <p>
          <span className="lbl">WhatsApp:</span> <Wa bare />
        </p>
        <p>
          <span className="lbl">Online:</span>{' '}
          <Link to="/contact/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            Contact page
          </Link>
        </p>
      </Contact>
      <H2 id="consultation">Access</H2>
      <P>
        Any data subject may obtain disclosure of the information concerning them, request its correction or demand its
        erasure where it is inaccurate.
      </P>
      <P>Requests should be sent to:</P>
      <Contact>
        <p>
          <span className="lbl">WhatsApp:</span> <Wa bare />
        </p>
        <p>
          <span className="lbl">Online:</span>{' '}
          <Link to="/contact/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            Contact page
          </Link>
        </p>
      </Contact>
      <H2 id="stockage">Storage</H2>
      <P>
        Your information is hosted on protected servers and is accessible only to a limited number of staff members,
        who are themselves bound by a strict duty of confidentiality and subject to regular checks.
      </P>
      <P>
        Several complementary measures ensure the proper protection of your data on a daily basis, in particular:
      </P>
      <UL cols>
        <li>Encryption of exchanges (TLS)</li>
        <li>Strong authentication for administrators</li>
        <li>Access control – authorized team</li>
        <li>Access control – account holder</li>
        <li>Continuous network monitoring</li>
        <li>Backup copies</li>
        <li>Up-to-date digital certificates</li>
        <li>Encrypted passwords</li>
        <li>Application firewall</li>
      </UL>
      <P>
        We regularly update our tools to keep pace with technological developments and to preserve the confidentiality
        of your transactions. It should nevertheless be borne in mind that no system can offer absolute protection: any
        transfer of information over the Internet involves a degree of risk that cannot be eliminated entirely,
        whatever precautions are taken.
      </P>
    </DocLayout>
  )
}
