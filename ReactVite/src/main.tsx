import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Web from './Mercadona/Web'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Web />
  </StrictMode>
)