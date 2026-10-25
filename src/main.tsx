import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { enableMotionGate } from '@/components/brand/motion'
// Same hashed file the @font-face rule uses (latin face of the one sans family).
import hankenLatin from '@fontsource-variable/hanken-grotesk/files/hanken-grotesk-latin-wght-normal.woff2?url'

// Reveal-on-scroll may hide content only when motion is allowed (adds html.js-motion before the first render).
enableMotionGate()

// Preload the brand font before React renders, so headings and prices swap in sooner.
for (const href of [hankenLatin]) {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'font'
  link.type = 'font/woff2'
  link.crossOrigin = 'anonymous'
  link.href = href
  document.head.appendChild(link)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
