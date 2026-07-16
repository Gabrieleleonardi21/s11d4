import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// "!" perché in TS getElementById può restituire null: l'elemento #root esiste in index.html
createRoot(document.getElementById('root')!).render(
  <App />
)
