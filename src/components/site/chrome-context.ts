import { createContext, useContext } from 'react'

export type CartItem = {
  id: string
  name: string
  price: number
  qty: number
}

export type ChromeState = {
  sideOpen: boolean
  setSideOpen: (open: boolean) => void
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
  cartItems: CartItem[]
  /** Front-end only: adds an item locally and opens the cart drawer. Nothing is submitted. */
  addToCart: (item: Omit<CartItem, 'qty'>, qty?: number) => void
  removeFromCart: (id: string) => void
  setQty: (id: string, qty: number) => void
}

export const ChromeContext = createContext<ChromeState | null>(null)

export function useChrome() {
  const ctx = useContext(ChromeContext)
  if (!ctx) throw new Error('useChrome must be used inside <SiteLayout>')
  return ctx
}

export function formatEuro(amount: number) {
  return `€${amount.toFixed(2)}`
}
