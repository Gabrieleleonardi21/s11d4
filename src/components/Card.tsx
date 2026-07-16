import type { Article } from '../types'
import Button from './Button'

type CardProps = {
  article: Article
}

// Card di anteprima: immagine, titolo, riassunto, orario e bottone al dettaglio
function Card({ article }: CardProps) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 text-center">
        <img src={article.image_url} className="card-img-top article-img" alt={article.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{article.title}</h5>
          <p className="card-text">{article.summary}</p>
          {/* published_at è una stringa ISO: la convertiamo in orario locale */}
          <p className="card-text">{new Date(article.published_at).toLocaleTimeString()}</p>
          {/* mt-auto spinge il bottone in fondo, così le card restano allineate */}
          <div className="mt-auto">
            <Button to={`/article/${article.id}`}>Go to the news!</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
