import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

// jQuery-style slideDown / slideUp (WooCommerce toggles the coupon form and payment boxes this way).
export function Slide({ open, duration = 400, children }: { open: boolean; duration?: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(open)
  const prev = useRef(open)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prev.current === open) return
    prev.current = open
    const full = el.scrollHeight
    el.style.overflow = 'hidden'
    el.style.transition = 'none'
    el.style.height = open ? '0px' : `${full}px`
    void el.offsetHeight
    el.style.transition = `height ${duration}ms ease`
    el.style.height = open ? `${full}px` : '0px'
    const done = window.setTimeout(() => {
      el.style.transition = ''
      el.style.height = ''
      el.style.overflow = ''
      setVisible(open)
    }, duration)
    return () => window.clearTimeout(done)
  }, [open, duration])

  return (
    <div ref={ref} style={{ display: visible || open ? undefined : 'none' }}>
      {children}
    </div>
  )
}
