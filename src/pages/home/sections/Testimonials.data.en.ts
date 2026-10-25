import type { TestimonialsCopy } from './Testimonials.data'

export const en: TestimonialsCopy = {
  head: {
    eyebrow: 'VERIFIED TESTIMONIALS · THE NOVASTREAM EXPERIENCE',
    title: 'Reviews from Those Who Watch King 365 TV with NovaStream',
    subtitle:
      'Read authentic feedback from viewers who chose NovaStream as their authorized distributor to activate their subscription and look after it week after week.',
  },
  trustStats: [
    { value: '4.9 / 5', label: 'Overall NovaStream Rating', stars: true },
    { value: '+50,000', label: 'Loyal Subscribers Supported' },
    { value: '99%', label: 'Recommend NovaStream Support' },
  ],
  reviews: [
    {
      badge: 'NovaStream Responsiveness',
      quote:
        '“I ordered my King 365 TV subscription directly from NovaStream via WhatsApp. Incredible response time: less than 3 minutes after my transfer, the NovaStream advisor had already sent me my codes and everything was working.”',
      meta: 'Lyon, France · February 2026',
    },
    {
      badge: 'Help & Courtesy',
      quote:
        '“I’m not very good with technology, so I was afraid I wouldn’t manage to install the app on my Samsung TV. NovaStream support was remarkably patient: they activated my IBO Player remotely, step by step. A truly human service!”',
      meta: 'Quebec, Canada · January 2026',
    },
    {
      badge: 'Stability & NovaStream DNS',
      quote:
        '“I tried several resellers before I found NovaStream. With their Pack Signature at €59.99 and NovaStream’s dedicated DNS, I watch every big match in 4K 60 FPS on the King 365 V4 app without a single interruption.”',
      meta: 'Namur, Belgium · December 2025',
    },
    {
      badge: 'Trust & Transparency',
      quote:
        '“What I like about NovaStream is their honesty and reliability. As an authorized distributor, they never ask for a bank card on the site, PayPal payment is secure and the prices are clear. You feel you can trust them right away.”',
      meta: 'Bordeaux, France · March 2026',
    },
    {
      badge: 'Movies & Friendly Prices',
      quote:
        '“Since we switched to NovaStream, our family evenings have really changed. The King 365 catalogue is huge (+16,000 movies and series in 4K/FHD), we pick up our episodes right where we left off, and the price saves us a fortune.”',
      meta: 'Toulouse, France · February 2026',
    },
    {
      badge: 'Loyalty & Follow-Up',
      quote:
        '“This is the second year I’ve renewed my King 365 access with the NovaStream team. One simple message on their WhatsApp and my code was extended for 12 months in a few seconds, without losing the favorites on my Android Box.”',
      meta: 'Geneva, Switzerland · January 2026',
    },
  ],
  pills: [
    { emoji: '✨', label: '4K HDR Picture' },
    { emoji: '⚡', label: 'Express Zapping' },
    { emoji: '🛡️', label: 'NovaStream DNS Relay' },
    { emoji: '💶', label: 'Very Friendly Prices' },
    { emoji: '🎬', label: '+16,000 Movies & Series' },
    { emoji: '💬', label: 'NovaStream Support < 2 min' },
    { emoji: '📱', label: 'All Screens' },
    { emoji: '⏪', label: '15-Day Catch-Up' },
  ],
  ui: {
    rating: 'Rating: 5 out of 5',
    screenshotAlt: (name) => `WhatsApp screenshot of ${name}’s review`,
    screenshotPlaceholder: 'WhatsApp screenshot',
    reviewsLabel: 'NovaStream customer reviews',
    pillsLabel: 'NovaStream highlights',
  },
}
