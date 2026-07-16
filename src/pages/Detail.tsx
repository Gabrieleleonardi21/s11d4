import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import type { Article } from '../types'

// Pagina di dettaglio: mostra il singolo articolo e il link alla fonte originale
function Detail() {
  // :id preso dalla rotta /article/:id
  const { id } = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchArticle() {
      try {
        // lo slash finale è necessario: senza, l'API risponde con un redirect 301
        const res = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}/`)
        if (!res.ok) {
          throw new Error(`Errore ${res.status}`)
        }
        const data: Article = await res.json()
        setArticle(data)
      } catch {
        setError('Notizia non trovata.')
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [id]) // rifà la fetch se cambia l'id nell'URL

  if (loading) {
    return <p className="text-center">Caricamento...</p>
  }

  if (error || !article) {
    return <p className="text-center text-danger">{error}</p>
  }

  return (
    <article className="row justify-content-center">
      <div className="col-12 col-lg-8">
        <img src={article.image_url} className="img-fluid rounded mb-4" alt={article.title} />
        <h1 className="fw-bold">{article.title}</h1>
        <p className="text-secondary">
          {article.news_site} — {new Date(article.published_at).toLocaleString()}
        </p>
        <p>{article.summary}</p>

        <div className="d-flex gap-2">
          {/* Link esterno: apre la notizia originale in una nuova scheda */}
          <Button href={article.url}>Leggi la notizia originale</Button>
          <Button to="/" variant="secondary">
            Torna alla home
          </Button>
        </div>
      </div>
    </article>
  )
}

export default Detail
