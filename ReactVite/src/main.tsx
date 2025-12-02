import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Web from './Mercadona/Web'
import './index.css'
import Web from './Mercadona/Web.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
