import { BRAND } from '@/lib/site'
import { PANEL, SECTION, STARS, WRAP } from '../styles'
import { SectionHead } from '../ui'

const REVIEWS = {
  eyebrow: 'Témoignages',
  title: ['La parole à nos', 'abonnés'] as [string, string],
  items: [
    {
      text: `« Avec ${BRAND}, les soirées foot en famille sont devenues un vrai rendez-vous. On ne rate plus un match ! »`,
      initials: 'JR',
      name: 'Julien R.',
      place: 'Lyon, France',
    },
    {
      text: '« Les enfants ont leurs dessins animés, moi mes séries : chacun y trouve son compte à la maison. Top ! »',
      initials: 'SM',
      name: 'Sofia M.',
      place: 'Genève, Suisse',
    },
    {
      text: '« Installation faite en dix minutes sur la télé du salon, sans aide. Le service client répond vite. »',
      initials: 'KT',
      name: 'Karim T.',
      place: 'Liège, Belgique',
    },
  ],
}

export function Reviews() {
  return (
    <section data-section="product-reviews" className={SECTION}>
      <div className={WRAP}>
        <SectionHead eyebrow={REVIEWS.eyebrow} title={REVIEWS.title} />
        <div className="grid grid-cols-3 gap-4 [@media(max-width:900px)]:grid-cols-1">
          {REVIEWS.items.map((r) => (
            <div key={r.name} className={`${PANEL} rounded-[16px] p-[22px]`}>
              <div className="mb-2.5 tracking-[2px] text-lp-gold">{STARS}</div>
              <p className="mb-3.5 text-[14.5px] italic">{r.text}</p>
              <div className="flex items-center gap-[11px]">
                <div className="grid size-10 place-items-center rounded-full bg-lp-blue font-archivo text-[13px] font-extrabold text-white">
                  {r.initials}
                </div>
                <div>
                  <b className="block text-[14px] font-bold">{r.name}</b>
                  <span className="text-[12.5px] text-lp-dim">{r.place}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
