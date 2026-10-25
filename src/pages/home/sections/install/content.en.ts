import type { InstallCopy } from './content'

export const en: InstallCopy = {
  guarantees: [
    {
      emoji: '🔄',
      title: 'Easy Renewal',
      text: 'Extend your access in one click on WhatsApp without reinstalling your apps or losing your favorites.',
    },
    {
      emoji: '⚡',
      title: 'Fast Activation',
      text: 'Xtream credentials and M3U link sent instantly on WhatsApp and by email as soon as your order is confirmed.',
    },
    {
      emoji: '🛡️',
      title: 'Guarantee & Ongoing Follow-Up (Satisfied or Compensated)',
      text: 'Personal support and a full continuity guarantee throughout your subscription period.',
    },
  ],

  head: {
    eyebrow: '✨ 2026 VISUAL GUIDES · AUTHORIZED DISTRIBUTOR',
    title: 'King 365 TV Installation 2026: Interactive Step-by-Step Guides',
    subtitle:
      'Select the device you want to watch on, then follow the simple steps. Most of our subscribers are up and running in under 5 minutes.',
  },

  kpis: [
    { value: '< 5 min', label: 'Quick Installation' },
    { value: '100%', label: 'Works on Every Screen' },
    { value: '7/7 · 24/7', label: 'Technical Support Included' },
  ],

  aside: {
    title: 'NovaStream Setup Guides',
    indicators: [
      { value: '< 5 min', label: 'Quick Installation' },
      { value: '100%', label: 'Works on Every Screen' },
      { value: '7/7', label: 'Technical Support Included' },
    ],
    helpTitle: 'Stuck During Setup?',
    helpText: 'Our NovaStream advisors answer 7 days a week on WhatsApp',
    tutorial: '📖 See the detailed NovaStream step-by-step tutorial (with screenshots)',
    changeDevice: 'Change device',
  },

  hub: {
    chooseDevice: 'Choose your device',
    deviceKicker: (n) => `Device ${n}`,
    stepPrefix: (n) => `Step ${n}: `,
    copy: 'Copy',
    copied: 'Copied',
    copyAria: (code, label) => `Copy code ${code} (${label})`,
    copiedAnnounce: (code) => `Code ${code} copied`,
  },

  faqTitle: 'Frequently Asked Questions',
  faqAnswer: 'Answer:',
  faq: [
    {
      q: 'I entered my credentials but the app shows an error. What should I do?',
      a: "First check the **server link (Server URL)**: it must start with `http://` **— not** `https://`. That single letter is the most common cause of errors. Also make sure no extra space slipped in when you copied and pasted. **Still stuck?** Send us a message on WhatsApp ([+33 7 51 29 91 76](wa:help)): our team will check your access and set up the subscription remotely for you.",
    },
    {
      q: 'What Internet speed do I need for smooth streaming?',
      a: 'A **10 to 20 Mbps** connection is the minimum for smooth Full HD streaming. We recommend a faster connection (**30 Mbps or more**) if you want to make the most of streams in **true 4K HDR at 60 FPS**, or if several people at home use the same Internet connection at the same time.',
    },
    {
      q: 'Do I need a VPN with my subscription?',
      a: "**It isn't required** — our plans (the Pack Signature in particular) include a **dedicated DNS** that automatically gets around Internet provider (ISP) blocking. If you still use a VPN, **always choose a server located in your own country**: that gives you the best speed and the lowest latency (don't connect through a faraway country).",
    },
    {
      q: 'Why do I need a paid player on some devices?',
      a: 'Paid players (IBO Player, ibo player smarter, vormedia sat, Bob Player, Hot Player) deliver much better performance on the hardware. On a **Smart TV (Samsung / LG) or Apple device**, we strongly recommend a paid app (~€8/year after a 7-day free trial): it runs far more smoothly than free apps and remembers where you stopped in your movies and series. On **Android, Google TV, TV Box or Firestick**, on the other hand, our official **King 365 TV apps (V2, V3 and V4)** work beautifully and are **100% free**.',
    },
  ],

  helpBanner: {
    title: 'Stuck on a step? We’ll set up your device with you.',
    subtitle:
      'Send a message to our support team on WhatsApp: we’ll guide you step by step or activate your subscription remotely for you, whatever your screen.',
    whatsappCta: '💬 Get help on WhatsApp',
    plansCta: 'Order a subscription',
  },
}
