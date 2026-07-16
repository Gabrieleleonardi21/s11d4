// Struttura di un articolo restituito da https://api.spaceflightnewsapi.net/v4/articles/
// (solo i campi che usiamo, la risposta ne contiene altri)
export type Article = {
  id: number
  title: string
  url: string
  image_url: string
  news_site: string
  summary: string
  published_at: string
}

// La lista arriva incapsulata in un oggetto con paginazione
export type ArticlesResponse = {
  count: number
  results: Article[]
}
