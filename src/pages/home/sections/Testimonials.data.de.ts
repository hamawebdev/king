import type { TestimonialsCopy } from './Testimonials.data'

export const de: TestimonialsCopy = {
  head: {
    eyebrow: 'GEPRÜFTE ERFAHRUNGSBERICHTE · DAS NOVASTREAM-ERLEBNIS',
    title: 'Das sagen Zuschauer, die King 365 TV mit NovaStream sehen',
    subtitle:
      'Lesen Sie echte Erfahrungsberichte von Zuschauern, die NovaStream als autorisierten Vertriebspartner gewählt haben, um ihr Abonnement zu aktivieren und Woche für Woche betreuen zu lassen.',
  },
  trustStats: [
    { value: '4,9 / 5', label: 'NovaStream-Gesamtbewertung', stars: true },
    { value: '+50.000', label: 'Betreute & treue Abonnenten' },
    { value: '99 %', label: 'Empfehlen den NovaStream-Support' },
  ],
  reviews: [
    {
      badge: 'Schnelle Reaktion',
      quote:
        '„Ich habe mein King 365 TV Abonnement direkt bei NovaStream über WhatsApp bestellt. Unglaublich schnelle Antwort: Keine 3 Minuten nach meiner Überweisung hatte mir der NovaStream-Berater schon meine Codes geschickt, und alles funktionierte.“',
      meta: 'Lyon, Frankreich · Februar 2026',
    },
    {
      badge: 'Hilfe & Freundlichkeit',
      quote:
        '„Da ich mit Technik nicht besonders geschickt bin, hatte ich Angst, die App nicht auf meinem Samsung-Fernseher installieren zu können. Der NovaStream-Support war bemerkenswert geduldig: Schritt für Schritt haben sie meinen IBO Player aus der Ferne aktiviert. Ein wirklich menschlicher Service!“',
      meta: 'Québec, Kanada · Januar 2026',
    },
    {
      badge: 'Stabilität & NovaStream-DNS',
      quote:
        '„Ich habe mehrere Wiederverkäufer ausprobiert, bevor ich NovaStream kennengelernt habe. Mit ihrem Pack Signature für 59,99 € und dem dedizierten NovaStream-DNS schaue ich alle großen Spiele in 4K mit 60 FPS in der King 365 V4 App – ohne die kleinste Unterbrechung.“',
      meta: 'Namur, Belgien · Dezember 2025',
    },
    {
      badge: 'Vertrauen & Transparenz',
      quote:
        '„Was ich an NovaStream schätze, sind Ehrlichkeit und Seriosität. Als autorisierter Vertriebspartner verlangen sie auf der Website keine Bankkarte, die Zahlung per PayPal ist sicher und die Preise sind klar. Man fühlt sich sofort gut aufgehoben.“',
      meta: 'Bordeaux, Frankreich · März 2026',
    },
    {
      badge: 'Kino & faire Preise',
      quote:
        '„Seit wir zu NovaStream gewechselt sind, haben sich unsere Familienabende wirklich verändert. Der King 365 Katalog ist riesig (+16.000 Filme und Serien in 4K/FHD), wir schauen unsere Folgen genau dort weiter, wo wir aufgehört haben, und der Preis spart uns ein Vermögen.“',
      meta: 'Toulouse, Frankreich · Februar 2026',
    },
    {
      badge: 'Treue & Betreuung',
      quote:
        '„Schon im zweiten Jahr verlängere ich meinen King 365 Zugang beim NovaStream-Team. Eine kurze Nachricht per WhatsApp, und mein Code war in wenigen Sekunden um 12 Monate verlängert – ohne dass meine Favoriten auf der Android-Box verloren gingen.“',
      meta: 'Genf, Schweiz · Januar 2026',
    },
  ],
  pills: [
    { emoji: '✨', label: '4K-HDR-Bild' },
    { emoji: '⚡', label: 'Express-Zapping' },
    { emoji: '🛡️', label: 'NovaStream-DNS-Relay' },
    { emoji: '💶', label: 'Sehr faire Preise' },
    { emoji: '🎬', label: '+16.000 Filme & Serien' },
    { emoji: '💬', label: 'NovaStream-Support < 2 Min.' },
    { emoji: '📱', label: 'Alle Bildschirme' },
    { emoji: '⏪', label: '15 Tage zum Nachholen' },
  ],
  ui: {
    rating: 'Bewertung: 5 von 5',
    screenshotAlt: (name) => `WhatsApp-Screenshot der Bewertung von ${name}`,
    screenshotPlaceholder: 'WhatsApp-Screenshot',
    reviewsLabel: 'Kundenbewertungen zu NovaStream',
    pillsLabel: 'Stärken von NovaStream',
  },
}
