import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  to?: string // rotta interna: naviga con react-router (nessun reload)
  href?: string // URL esterno: apre in una nuova scheda
  variant?: string // variante colore Bootstrap (primary, secondary, ...)
}

// Un solo componente per i tre casi: link interno, link esterno, bottone semplice.
// Si sceglie il comportamento passando "to" oppure "href".
function Button({ children, to, href, variant = 'primary' }: ButtonProps) {
  const className = `btn btn-${variant}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  if (href) {
    // rel="noopener noreferrer" evita che la pagina aperta acceda a window.opener
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}

export default Button
