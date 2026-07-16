import { useEffect, useState } from 'react'
import Card from '../components/Card'
import type { Article, ArticlesResponse } from '../types'

const API_URL = 'https://api.spaceflightnewsapi.net/v4/articles/?limit=12'

// Pagina principale: scarica gli articoli e li mostra in griglia
function Home() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch(API_URL)
        if (!res.ok) {
          throw new Error(`Errore ${res.status}`)
        }
        const data: ArticlesResponse = await res.json()
        setArticles(data.results)
      } catch {
        setError('Impossibile caricare le notizie.')
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, []) // array vuoto: la fetch parte una sola volta al mount

  if (loading) {
    return <p className="text-center">Caricamento...</p>
  }

  if (error) {
    return <p className="text-center text-danger">{error}</p>
  }

  return (
    <>
      <header className="text-center mb-5">
        <h1 className="fw-bold">Welcome to SpaceFlight News</h1>
        <p className="text-secondary">The best space flight news website the Internet can offer!</p>
      </header>

      <div className="row">
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </>
  )
}

export default Home
