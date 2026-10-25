import { createContext, useContext } from 'react'

/** Site chrome state shared by the header and the mobile menu drawer (SideSlide). */
export type ChromeState = {
  sideOpen: boolean
  setSideOpen: (open: boolean) => void
}

export const ChromeContext = createContext<ChromeState | null>(null)

export function useChrome() {
  const ctx = useContext(ChromeContext)
  if (!ctx) throw new Error('useChrome must be used inside <SiteLayout>')
  return ctx
}
