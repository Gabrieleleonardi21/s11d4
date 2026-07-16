import { Link } from 'react-router-dom'

// Barra di navigazione: il nome del sito riporta sempre alla home
function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          SpaceFlight News
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
