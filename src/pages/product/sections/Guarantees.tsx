import type { Card } from '../data'
import { HEADING, SECTION, WRAP } from '../styles'

const BAND: Card[] = [
  { icon: 'ti-calendar-off', title: 'Sans engagement', text: 'Aucun prélèvement automatique : vous renouvelez seulement si vous le souhaitez.' },
  { icon: 'ti-users', title: 'Profils séparés', text: 'Chaque membre du foyer garde ses favoris et son historique.' },
  { icon: 'ti-refresh', title: 'Mises à jour', text: 'De nouveaux films et séries rejoignent le catalogue chaque semaine.' },
]

// Guarantees band
export function Guarantees() {
  return (
    <section data-section="product-guarantees" className={`${SECTION} bg-lp-soft`}>
      <div className={WRAP}>
        <div className="grid grid-cols-3 gap-6 rounded-[24px] bg-[linear-gradient(135deg,#2563eb,#143a96)] p-10 text-center text-white [@media(max-width:900px)]:grid-cols-1">
          {BAND.map((g) => (
            <div key={g.title}>
              <i className={`ti ${g.icon} mb-2 block text-[30px]`} />
              <h4 className={`${HEADING} mb-[5px] text-[17px] font-extrabold text-white`}>{g.title}</h4>
              <p className="text-[13.5px] text-[#cfe0ff]">{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
