import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { enableMotionGate } from '@/components/brand/motion'

// Reveal-on-scroll may hide content only when motion is allowed (adds html.js-motion before the first render).
enableMotionGate()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
