import { useEffect, useRef, useState, useSyncExternalStore, type RefObject } from 'react'

const REDUCE_QUERY = '(prefers-reduced-motion: reduce)'

function subscribeReducedMotion(onChange: () => void) {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {}
  const mql = window.matchMedia(REDUCE_QUERY)
  mql.addEventListener('change', onChange)
  return () => mql.removeEventListener('change', onChange)
}

function readReducedMotion() {
  return typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia(REDUCE_QUERY).matches
}

/** True when the visitor asked for reduced motion (live: follows the OS setting). */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribeReducedMotion, readReducedMotion, () => false)
}

/**
 * Watches an element against the viewport. `once` (default) latches to true the first time it is seen —
 * used for scroll-in fills; `once: false` tracks visibility both ways — used to pause looping motion.
 * Without IntersectionObserver it reports true, so content never stays in its "before" state.
 */
export function useInView<T extends Element>({
  once = true,
  threshold = 0.25,
}: { once?: boolean; threshold?: number } = {}): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting)
        if (once) {
          if (visible) {
            setInView(true)
            io.disconnect()
          }
        } else {
          setInView(visible)
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once, threshold])

  return [ref, inView]
}
