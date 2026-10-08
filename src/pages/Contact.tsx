import { ContactHero } from './theme/heroes'
import { ContactTeam } from './contact/Team'
import { ContactBand } from './theme/bands'

// Contact page: hero, three support team members, the WhatsApp call to action and the
// e-mail form on the paper band. Names and copy are placeholders.

export default function Contact() {
  return (
    <div className="overflow-x-clip bg-paper font-sans leading-[1.65] text-ink-body antialiased">
      <ContactHero />
      <ContactTeam />
      <ContactBand />
    </div>
  )
}
