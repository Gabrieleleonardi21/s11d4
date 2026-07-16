import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.tsx'

// "!" perché in TS getElementById può restituire null: l'elemento #root esiste in index.html
createRoot(document.getElementById('root')!).render(
  // BrowserRouter avvolge App: abilita il routing in tutta l'applicazione
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
