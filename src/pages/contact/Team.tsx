import { Kw, Monogram, Reveal, Section, StatusDot, VaultPanel, WhatsAppButton } from '@/components/brand'
import { WHATSAPP_HREF } from '@/lib/site'

// Contact: the three support team members, then the "Réponse rapide" WhatsApp call to action.
// « Réserve » direction §9.6 #2: sand band; three ivory support cards (a quiet roster: vault monogram
// with a presence dot, name in the serif, "Support" as the role line), then a contained vault panel
// with the two-line H2 on the left and the WhatsApp action on the right. Names are placeholders.

const TEAM = ['Clara V.', 'Moreau T.', 'Gabrielle M.']

export function ContactTeam() {
  return (
    <Section zone="sand" dataSection="contact-team">
      <ul className="grid gap-3 md:grid-cols-3 md:gap-grid">
        {TEAM.map((name, i) => (
          <Reveal
            as="li"
            key={name}
            index={i}
            className="flex min-w-0 items-center gap-4 rounded-panel border border-z-line bg-z-card p-card md:flex-col md:items-start md:gap-5 lg:flex-row lg:items-center"
          >
            <span aria-hidden="true" className="relative shrink-0">
              <Monogram name={name} size={56} />
              <StatusDot className="absolute right-0 bottom-0.5 size-3 ring-ivory" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-title-lg text-z-fg">{name}</p>
              <p className="mt-1 flex items-center gap-2 font-sans text-meta font-medium text-z-muted">
                <i className="ti ti-headset shrink-0 text-[16px] text-z-icon" aria-hidden="true" />
                <span>Support</span>
              </p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-12">
        <VaultPanel className="relative grid items-center gap-y-8 md:grid-cols-12 md:gap-x-8">
          <div className="relative md:col-span-7 lg:col-span-8">
            <span aria-hidden="true" className="block h-px w-7 bg-brass-500" />
            <h2 className="mt-6 font-display text-display-sm text-z-fg">
              <span className="block">Réponse rapide</span>
              <Kw className="block">par message instantané</Kw>
            </h2>
          </div>
          <div className="relative md:col-span-5 md:flex md:items-center md:justify-end md:self-stretch md:border-l md:border-vault-line lg:col-span-4">
            <WhatsAppButton label="Whatsapp" href={WHATSAPP_HREF} size="lg" full className="sm:w-auto" />
          </div>
        </VaultPanel>
      </Reveal>
    </Section>
  )
}
