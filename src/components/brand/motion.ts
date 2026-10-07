// Motion helpers (DIRECTION §8): the js-motion gate and the reveal-once hook.
import { useLayoutEffect, useRef, useState, type CSSProperties, type RefObject } from 'react'
import { revealDelay } from './recipes'

/**
 * Adds `js-motion` to <html> when the visitor allows motion. Only then may `.reveal` hide content
 * (index.css: `html.js-motion .reveal:not(.is-in):not([data-reveal="in"])`); without JS or with reduced motion nothing is hidden.
 * Called once from src/main.tsx before the first render.
 */
export function enableMotionGate() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
  if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    document.documentElement.classList.add('js-motion')
  }
}

function motionAllowed() {
  return typeof document !== 'undefined' && document.documentElement.classList.contains('js-motion')
}

/**
 * Reveal once on scroll: opacity 0 → 1 and translateY(12px → 0) over 600 ms, threshold .15,
 * rootMargin "0px 0px -10% 0px". Elements already in view at mount are never hidden.
 * Spread `ref`, `className` and `style` on one element. The revealed state is a DOM attribute
 * (data-reveal="in") that React never rewrites, so re-renders cannot hide the element again.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  index = 0,
): { ref: RefObject<T | null>; className: string; style: CSSProperties } {
  const ref = useRef<T | null>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const show = () => el.setAttribute('data-reveal', 'in')
    if (!motionAllowed() || typeof IntersectionObserver === 'undefined') return show()
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) return show()
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show()
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, className: 'reveal', style: { '--reveal-delay': revealDelay(index) } as CSSProperties }
}

/** True while the element intersects the viewport (used for the buy bar and the mosaic step). No IO → false. */
export function useInView<T extends HTMLElement>(ref: RefObject<T | null>, threshold = 0, rootMargin = '0px') {
  const [inView, setInView] = useState(false)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver((entries) => setInView(entries.some((e) => e.isIntersecting)), {
      threshold,
      rootMargin,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, threshold, rootMargin])
  return inView
}
