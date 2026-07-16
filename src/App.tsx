import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Detail from './pages/Detail'
import './App.css'

function App() {
  return (
    <>
      {/* La navbar sta fuori dalle Routes: resta visibile su ogni pagina */}
      <Navbar />
      <main className="container pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Detail />} />
          <Route path="*" element={<p className="text-center">Pagina non trovata.</p>} />
        </Routes>
      </main>
    </>
  )
}

export default App
