import { useEffect, useRef, useState } from 'react'

// Inline counter: once its top reaches the bottom of the viewport it restarts from 0 and
// counts up linearly to the target over 1-2s (random), like the theme's "animate-math".
export function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(to)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const run = () => {
      const duration = 1000 + Math.floor(Math.random() * 1000)
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration)
        setValue(p < 1 ? Math.floor(to * p) : to)
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      setValue(0)
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting || e.boundingClientRect.top < window.innerHeight)) {
          io.disconnect()
          run()
        }
      },
      { threshold: 0 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])

  return (
    <span ref={ref} className="mfp-count">
      <span>{value}</span>
    </span>
  )
}
