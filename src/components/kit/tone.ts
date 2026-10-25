import { createContext, useContext } from 'react'

export type SectionTone = 'white' | 'mist' | 'mist-fade' | 'night'

/** Set by <Section>: lets Eyebrow / SectionHeading switch to their on-dark colours inside a night section. */
export const ToneContext = createContext<SectionTone>('white')

export function useSectionTone() {
  return useContext(ToneContext)
}
