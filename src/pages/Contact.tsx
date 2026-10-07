import { ContactHero } from './theme/heroes'
import { ContactTeam } from './contact/Team'
import { ContactBand } from './theme/bands'

// Contact page: hero, three support team members, the WhatsApp call to action and the
// e-mail form on the navy band. Names and copy are placeholders.

export default function Contact() {
  return (
    <div className="bt mfp mfp-contact">
      <ContactHero />
      <ContactTeam />
      <ContactBand />
    </div>
  )
}
