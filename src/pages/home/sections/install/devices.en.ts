import type { Device } from './devices'

const PAID = 'PAID APP · ~€8/year · 7-day free trial'
const PAID_WIN = 'PAID APP (~€8/year · 7-day free trial)'
const CODE = 'Downloader code'

export const DEVICES_EN: Device[] = [
  {
    id: 'smart-tv',
    emoji: '📺',
    name: 'Smart TV',
    detail: 'Samsung, LG, Sony, Philips...',
    guideTitle: 'Smart TV',
    guideDetail: 'Samsung Tizen, LG webOS, Sony, Philips',
    blocks: [
      {
        type: 'callout',
        tone: 'danger',
        emoji: '⚠️',
        title: 'Smarters Pro Priority Alert',
        paragraphs: [
          "Do not use IPTV Smarters Pro or Smarters Player on Smart TV: the Smart TV version is no longer optimized for Samsung and LG. It causes frequent dropouts, instability and playback freezes that have nothing to do with our service. Use one of the recommended apps below (or IPTV Stream Player if you're looking for a free alternative).",
        ],
      },
      {
        type: 'callout',
        tone: 'tip',
        emoji: '💡',
        title: 'Why Choose Paid Players on Smart TV?',
        paragraphs: [
          'IBO Player Pro, IBO Player Smarter, Bob Player and Hot Player each offer a 7-day free trial. They deliver outstanding 4K stability, load the EPG guide instantly and let you resume your movies and series at the exact second you stopped. When the trial ends, our team can activate your official license (~€8/year) directly via WhatsApp.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        emoji: '📺',
        title: 'Android TV Note',
        paragraphs: [
          'Do you have an Android TV or Google TV (Sony, TCL, Xiaomi, Philips)? Install the free Downloader app from Google Play, then follow the Android / Firestick method to install our official King 365 TV apps (V2, V3 or V4) for free.',
        ],
      },
      {
        type: 'apps',
        title: 'Recommended Apps',
        apps: [
          {
            name: 'IBO Player / IBO Player Pro',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Install from Samsung Apps / LG Content Store → Note down the *Device ID (MAC)* and the *Device Key* → Send them as a photo on WhatsApp ([wa.me/33751299176](wa:iboDevice)) so we can load your subscription directly and activate it.',
          },
          {
            name: 'IBO Player Smarter',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Modern, ultra-stable interface with VOD resume and a full EPG.',
          },
          {
            name: 'Bob Player',
            badge: PAID,
            badgeTone: 'paid',
            text: 'Instant channel switching and smooth bouquet management.',
          },
          {
            name: 'Hot Player / Hot IPTV',
            badge: PAID,
            badgeTone: 'paid',
          },
        ],
      },
    ],
  },
  {
    id: 'firestick',
    emoji: '🔥',
    name: 'Amazon Firestick',
    detail: 'Fire TV Stick 4K / Max / Lite / Cube',
    guideTitle: 'Amazon Firestick',
    guideDetail: 'Fire TV Stick 4K, Max, Lite, Cube',
    blocks: [
      {
        type: 'callout',
        tone: 'danger',
        emoji: '🚨',
        title: 'OFFICIAL VEGA OS WARNING',
        subtitle: 'WARNING ABOUT THE 2ND-GENERATION AMAZON FIRE TV STICK HD:',
        paragraphs: [
          'We strongly advise our customers not to buy the Amazon Fire TV Stick HD (2nd generation). This recent model runs on the closed **Vega OS** system, unlike previous versions, which used an Android / Fire OS system compatible with external apps:',
        ],
        items: [
          '❌ The **Downloader** app is not available, unlike on earlier models.',
          '❌ Installing external apps or APK files is heavily restricted.',
          '❌ As a result, this model is not compatible with our service.',
          '✅ To use our apps, choose a device running Android (Xiaomi, Mecool) or a Fire TV Stick 4K / 4K Max / Lite / Cube that supports Downloader and APK installation.',
        ],
      },
      {
        type: 'steps',
        title: 'The 4 Installation Steps via Downloader',
        steps: [
          '**Install Downloader:** On the Fire TV home screen, go to Search, type *“Downloader”* and install it for free.',
          '**Enable Developer Options:** Go to `Settings > My Fire TV > About`, then click the Fire TV Stick name **7 times quickly**.',
          '**Allow unknown sources:** In `Developer Options > Install unknown apps`, turn on the permission for **Downloader (ON)**.',
          '**Enter the Downloader Code:** Open Downloader, type the code of the app you want from the list below and click **Go**.',
        ],
      },
      {
        type: 'apps',
        title: 'Apps & Downloader Codes on Firestick',
        apps: [
          {
            name: 'King 365 TV — Version 2 (V2)',
            mark: 'V2',
            badge: 'OFFICIAL · FREE',
            badgeTone: 'free',
            codes: [{ label: CODE, code: '756917' }],
            text: 'Sign in with Username + Password.',
          },
          {
            name: 'King 365 TV — Version 3 (V3)',
            mark: 'V3',
            badge: 'OFFICIAL · FREE',
            badgeTone: 'free',
            codes: [{ label: CODE, code: '283367' }],
            text: 'Sign in with Username + Password.',
          },
          {
            name: 'King 365 TV — Version 4 (V4 - 2026 Edition)',
            mark: 'V4',
            badge: 'FOR TV SCREENS · FREE',
            badgeTone: 'special',
            codes: [{ label: CODE, code: '2763945' }],
            text: 'Exclusively for TV screens and boxes. Enter a **Playlist Name** (any name you like) + **Username** + **Password**.',
          },
          {
            name: 'Paid Players',
            badge: '~€8/year · 7-day free trial',
            badgeTone: 'paid',
            codes: [
              { label: 'IBO Player Pro', code: '481220' },
              { label: 'Bob Player', code: '815778' },
              { label: 'Hot Player', code: '305800' },
            ],
          },
          {
            name: 'King365TV Apps — Obsolete Codes to Avoid at All Costs (Uninstall Them)',
            danger: true,
            obsolete: [
              { label: 'V4 OLD', code: '8872559' },
              { label: 'V3 OLD', code: '702186' },
              { label: 'V2 OLD', code: '5638769' },
              { label: '2.2 OLD', code: '671387' },
              { label: '2.2.2 OLD', code: '6783194' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'android',
    emoji: '🤖',
    name: 'Android',
    detail: 'Phone, Tablet, Google TV, Xiaomi / Mecool TV Box',
    guideTitle: 'Android',
    guideDetail: 'Google TV, Xiaomi / Mecool Box, Smartphones & Tablets',
    blocks: [
      {
        type: 'apps',
        title: 'Installation via Downloader (TV & Box) or Direct APK',
        apps: [
          {
            name: 'King 365 TV V2',
            mark: 'V2',
            codes: [{ label: CODE, code: '223650' }],
            text: 'Works on TVs, Boxes, Smartphones and Tablets.',
          },
          {
            name: 'King 365 TV V3',
            mark: 'V3',
            codes: [{ label: CODE, code: '333650' }],
            text: 'Works on TVs, Boxes, Smartphones and Tablets.',
          },
          {
            name: 'King 365 TV V4 (2026 Edition)',
            mark: 'V4',
            codes: [{ label: CODE, code: '443650' }],
            text: '**Only for recent Google TV devices, recent Android TVs and Android TV Boxes** *(not compatible with phones)*. Enter *Playlist Name + Username + Password*.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'King 365 Redundancy Note',
        paragraphs: [
          'We recommend installing or keeping all 3 versions (V2, V3, V4) so you always have a backup app ready if one of them is under maintenance.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Xtream / M3U & Support Note',
        paragraphs: [
          'For users who prefer their own player (TiviMate, IBO Player, Bob Player...), we provide full access via **Xtream Codes** or **M3U**, or we set up the app remotely via WhatsApp ([+33 7 51 29 91 76](wa:help)).',
        ],
      },
    ],
  },
  {
    id: 'apple',
    emoji: '🍎',
    name: 'iPhone / iPad / Apple TV',
    detail: 'iOS, iPadOS & tvOS',
    guideTitle: 'Apple',
    guideDetail: 'iPhone, iPad, Apple TV — iOS, iPadOS & tvOS',
    blocks: [
      {
        type: 'apps',
        title: 'Direct download from the **official App Store** (no VLC, no Smarters Pro on iPhone)',
        apps: [
          { name: 'IBO Player', badge: PAID, badgeTone: 'paid' },
          { name: 'IBO Player Smarter', badge: PAID, badgeTone: 'paid' },
          { name: 'Hot Player', badge: 'PAID APP · ~€8/year · Free trial included', badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'windows',
    emoji: '💻',
    name: 'Windows PC',
    detail: 'Microsoft Store',
    guideTitle: 'Windows PC',
    guideDetail: 'Microsoft Store',
    blocks: [
      {
        type: 'apps',
        title: 'Direct installation from the **Microsoft Store** (no more VLC or BlueStacks)',
        apps: [
          {
            name: 'IPTV Smarters Pro / Expert (Windows Edition)',
            badge: 'FREE',
            badgeTone: 'free',
            text: 'Updated desktop version, smooth and free, using Xtream credentials.',
          },
          { name: 'IBO Player', badge: PAID_WIN, badgeTone: 'paid' },
          { name: 'Hot Player', badge: 'PAID APP (~€8/year · Free trial included)', badgeTone: 'paid' },
          { name: 'vormedia sat', badge: PAID_WIN, badgeTone: 'paid' },
          { name: 'ibo player smarter', badge: PAID_WIN, badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'mac',
    emoji: '🖥️',
    name: 'Mac',
    detail: 'macOS',
    guideTitle: 'Mac',
    guideDetail: 'macOS',
    blocks: [
      {
        type: 'apps',
        title: 'Installation on MacBook and iMac (without VLC)',
        apps: [
          { name: 'IBO Player / IBO Player Smarter', badge: PAID, badgeTone: 'paid' },
          { name: 'IPTV Smarters Pro (macOS)', badge: 'FREE', badgeTone: 'free' },
          { name: 'Hot Player', badge: 'PAID APP · ~€8/year', badgeTone: 'paid' },
        ],
      },
    ],
  },
  {
    id: 'mag',
    emoji: '📟',
    name: 'MAG Box',
    detail: 'Infomir 254 / 256 / 322 / 520...',
    guideTitle: 'MAG Box',
    guideDetail: 'Infomir 254 / 256 / 322 / 520...',
    blocks: [
      {
        type: 'steps',
        title: 'Quick Setup by **MAC Address**',
        steps: [
          '**Send the MAC address:** Find the address on the back of the box (`00:1A:79:XX:XX:XX`) and send it to us on WhatsApp ([wa.me/33751299176](wa:magAddress)).',
          '**Receive your Portal:** We send you your activated `Portal URL` link.',
          '**Settings:** Go to `Settings > System Settings > Servers > Portals`.',
          '**Enter the details:** Type a name in `Portal 1 Name` and paste the URL into `Portal 1 URL`.',
          '**Save:** Press OK to save, then restart the box.',
        ],
      },
    ],
  },
  {
    id: 'shield',
    emoji: '🛡️',
    name: 'Nvidia Shield',
    detail: 'High-Performance Android TV',
    guideTitle: 'Nvidia Shield TV',
    blocks: [
      {
        type: 'steps',
        title: 'Runs on Android TV with the Google Play Store built in',
        steps: [
          'Install **Downloader** for free from the Google Play Store.',
          'Allow Downloader in `Settings > Device Preferences > Security & restrictions`.',
          'Enter the Downloader code for **King 365 TV V3 (333650)**, **King 365 TV V4 (443650)** or **IBO Player Pro (481220)**.',
        ],
      },
      {
        type: 'codes',
        codes: [
          { label: 'King 365 TV V3', code: '333650' },
          { label: 'King 365 TV V4', code: '443650' },
          { label: 'IBO Player Pro', code: '481220' },
        ],
      },
    ],
  },
  {
    id: 'formuler',
    emoji: '📡',
    name: 'Formuler / Dreamlink',
    detail: 'MyTVOnline 2 & 3 app',
    guideTitle: 'Formuler / Dreamlink',
    guideDetail: 'MyTVOnline 2 & MyTVOnline 3',
    blocks: [
      {
        type: 'callout',
        tone: 'warning',
        emoji: '⚠️',
        title: 'Important',
        paragraphs: ['On Formuler, use the **Xtream codes** (Portal URL + Username + Password), **not the MAC address**:'],
      },
      {
        type: 'steps',
        steps: [
          '**Open MyTVOnline:** Launch *MyTVOnline 2* or *MyTVOnline 3* (or *DOL2* on Dreamlink).',
          '**Add a Portal:** Go to `Menu > Connections > Add Portal`.',
          '**Name the Portal:** Enter any name you like (e.g. *NovaStream*).',
          '**Enable login:** Switch the `Login Required` option to **ON**.',
          '**Enter your credentials:** Enter the Portal URL, Username and Password you received.',
          '**Connect:** Press **Connect** to load the channels and VOD instantly.',
        ],
      },
    ],
  },
]
