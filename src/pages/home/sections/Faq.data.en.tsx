import { WHATSAPP_DISPLAY } from '@/lib/site'
import type { FaqId, FaqText } from './Faq.data'
import { Install, Wa } from './Faq.links'

/** Spec S14 in English (same links and Downloader codes as the French). */
export const en: Record<FaqId, FaqText> = {
  commander: {
    question: 'How do I order a King 365 TV plan from NovaStream?',
    answer: (
      <p>
        Click the “Buy now” button (which takes you straight to our subscription plans), choose the duration you want, fill in
        your details and confirm your request with our team on WhatsApp (<Wa>wa.me/33751299176</Wa>) for immediate activation.
      </p>
    ),
  },
  delai: {
    question: 'How soon will I receive my subscription codes?',
    answer: (
      <p>
        During our opening hours, your login details are sent on WhatsApp and by email almost instantly once payment is confirmed
        (usually within 10 to 20 minutes). At peak times, processing can take 1 to 2 hours at most (and up to 6 hours at most by
        email).
      </p>
    ),
  },
  email: {
    question: 'I haven’t received the email within the stated time. Should I be worried?',
    answer: (
      <p>
        No, don’t worry. We send codes from 9:00 am to 10:00 pm (GMT+1). If there’s nothing in your junk mail (spam) folder
        either, simply contact the NovaStream team on WhatsApp (<Wa>{WHATSAPP_DISPLAY}</Wa>): an advisor will send you your access
        details and sort things out right away.
      </p>
    ),
  },
  'autres-apps': {
    question: 'Can I use my King 365 TV subscription on other IPTV apps?',
    answer: (
      <p>
        Yes, absolutely! As well as the official King 365 apps, NovaStream highly recommends excellent paid players such as IBO
        Player, IBO Player Smarter, Hot Player or Bob Player for their remarkably smooth playback. You can also use free apps
        available in the app stores, such as IPTV Smarters Pro or Smarters Lite.
      </p>
    ),
  },
  renouveler: {
    question: 'How do I renew my King 365 TV subscription with NovaStream?',
    answer: (
      <p>
        Select the Renewal option, tell us your device, tick the renewal box and enter your current username, or simply click our{' '}
        <Wa>WhatsApp link</Wa>. Our support team sends you the payment details: as soon as you send your screenshot (receipt), your
        subscription is extended within minutes on WhatsApp and by email.
      </p>
    ),
  },
  'memes-identifiants': {
    question: 'Can I renew and keep exactly the same account login details?',
    answer: (
      <p>
        If you took out your original subscription on our NovaStream site, yes: we simply extend your current login details
        without changing anything. However, if your previous subscription came from another seller or distributor, we will provide
        new official NovaStream login details for you to enter in your player.
      </p>
    ),
  },
  'telecharger-v3': {
    question: 'How do I download the King 365 TV Box V3 app (APK)?',
    answer: (
      <p>
        Go straight to our download section by <Install>clicking here</Install> (just above on this page), enter the new official
        Downloader code for Version 3 (283367) and follow our detailed instructions.
      </p>
    ),
  },
  'telecharger-v4': {
    question: 'How do I download and install King 365 TV Version 4 (V4), and where can I find the official link?',
    answer: (
      <p>
        <Install>Click here</Install> to open our official installation guide. Version 4 (Downloader code: 2763945) is designed for
        Android TV sets, recent Google TV devices, Android TV boxes and Amazon Fire TV Sticks compatible with the Downloader app
        (except the 2nd-generation Fire TV Stick HD running the closed Vega OS system, which blocks APKs).
      </p>
    ),
  },
  'versions-officielles': {
    question: 'Important notice: which official King 365 TV versions should I install, and which old codes should I remove?',
    answer: (
      <>
        <p>
          To avoid outages, login errors and access problems, stop downloading the old, obsolete versions. We strongly recommend
          installing all 3 new official versions (V2, V3 and V4) on your device to ensure continuous operation and an instant
          fallback if a server is under maintenance:
        </p>
        <p className="font-semibold text-heading">✅ New official versions to install:</p>
        <ul className="grid gap-1">
          <li>• Version 2 (V2): Downloader code 756917</li>
          <li>• Version 3 (V3): Downloader code 283367</li>
          <li>• Version 4 (V4): Downloader code 2763945</li>
        </ul>
        <p className="font-semibold text-heading">🚫 Old, obsolete versions to avoid at all costs (uninstall them):</p>
        <p>V4 OLD (8872559) · V3 OLD (702186) · V2 OLD (5638769) · 2.2 OLD (671387) · 2.2.2 OLD (6783194).</p>
      </>
    ),
  },
  pays: {
    question: 'Does the King 365 TV subscription service work in France, Canada, Belgium and abroad?',
    answer: (
      <p>
        Yes, the subscription works anywhere in the world as long as you have an Internet connection (France, Canada, Belgium,
        Switzerland, Algeria, Tunisia, Morocco, etc.).
      </p>
    ),
  },
  'multi-ecrans': {
    question: 'Can I use my subscription on several devices or get a multi-screen offer?',
    answer: (
      <p>
        Your subscription is personal and cannot be shared simultaneously: it allows one active screen at a time. You can install it
        on two devices and use them alternately (never at the same time, to avoid blocks). If you want to watch on several screens
        at once, <Wa>contact NovaStream</Wa> to take advantage of our offers on additional independent subscriptions.
      </p>
    ),
  },
  'sans-parabole': {
    question: 'Can I buy King 365 TV without access to a satellite dish?',
    answer: (
      <p>
        Absolutely! The King 365 TV IPTV service is streamed 100% over the Internet, with no satellite dish at all. A stable
        broadband Internet connection (at least 30 Mbps recommended for optimal smoothness in 4K HDR) is all you need.
      </p>
    ),
  },
  'televiseur-ancien': {
    question: 'I have an older TV. What solution do you offer?',
    answer: (
      <p>
        To bring your TV up to date, NovaStream recommends getting a Google-certified Android TV Box (Google Certified) such as the
        Xiaomi Mi Box, Mecool or RockTek, or any other Android box with good specifications (plenty of RAM and a powerful
        processor) for ultra-smooth browsing.
      </p>
    ),
  },
  confiance: {
    question: 'How can I know that NovaStream is a reliable authorized distributor I can fully trust?',
    answer: (
      <p>
        NovaStream is a recognized authorized distributor with more than 3 years of experience and tens of thousands of loyal
        subscribers. Our service is rigorously structured and transparent: we even often prepare and activate our customers’ access
        before payment, as a sign of our trust and reliability.
      </p>
    ),
  },
  essai: {
    question: 'Can I try your services before paying (trial period)?',
    answer: (
      <p>
        Yes, a trial is available in some cases for 3 hours or 24 hours, after which you can take out a subscription starting from
        6 or 12 months. <strong className="font-semibold text-heading">Important note:</strong> No trials are issued during big
        matches and major competition nights, so that, in coordination with King 365 TV, we can guarantee maximum server stability
        for our active subscribers.
      </p>
    ),
  },
  chaines: {
    question: 'Which channels are included in the subscription?',
    answer: (
      <p>
        You get access to a huge selection of channels from all over the world: France, the United Kingdom, the United States,
        Canada, Belgium, Switzerland, the Maghreb, Africa and Europe — including every Sports, News, Movies, Series, Kids and
        Documentary package, plus +16,000 VOD movies and series and Replay for up to 15 days.
      </p>
    ),
  },
  'ibo-expire': {
    question: 'My IBO Player (or Hot Player / Bob Player) says the activation has expired. What should I do?',
    answer: (
      <p>
        IBO Player, IBO Player Smarter, Hot Player and Bob Player are independent paid players that require activation after their
        trial period. On Android, install our free official King 365 TV app to avoid these fees. If you don’t have an Android TV
        (e.g. a Samsung or LG Smart TV), NovaStream can activate your player directly for about €8 / year: simply contact our
        support on <Wa>WhatsApp</Wa>.
      </p>
    ),
  },
  'licence-payante': {
    question: 'The 9Xtream or IPTV Smarters Pro app asks me to pay or says my activation has expired?',
    answer: (
      <p>
        9Xtream and some editions of IPTV Smarters Pro are paid services that require a software license. Use our official King 365
        TV apps (V2, V3, V4) for free on Android TV / Box devices, or contact our <Wa>WhatsApp support</Wa> to activate a compatible
        paid app on your other screens.
      </p>
    ),
  },
  'failed-to-authorize': {
    question: 'INFO for LG & SAMSUNG users: the Smarters app shows the “Failed to authorize” error. What should I do?',
    answer: (
      <>
        <p>
          The old Smarters app currently has an access bug (Error: “Failed to authorize”). Rest assured, this is not a problem with
          our servers but with the app itself.
        </p>
        <p>
          ⬇️ Solution: The developers ask users to switch to the new version. Simply download the new Smarters Pro version from your
          TV’s app store: your current login details remain exactly the same.
        </p>
      </>
    ),
  },
  'lien-serveur': {
    question: 'The server link doesn’t work when I enter my details. Why?',
    answer: (
      <p>
        To guarantee maximum security and stability, NovaStream regularly renews and updates its server links (without sharing them
        publicly). Check that the link starts with http:// and contact our support on WhatsApp (<Wa>{WHATSAPP_DISPLAY}</Wa>) to get
        the updated link right away.
      </p>
    ),
  },
}
