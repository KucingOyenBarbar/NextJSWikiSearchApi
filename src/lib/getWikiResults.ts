import wikiApiUrl from "@/config/api"

export default async function getWikiResults(searchTerm: string) {
  const abortController: AbortController = new AbortController()
  const searchParams: URLSearchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerm,
    gsrlimit: '20',
    prop: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    exlimit: 'max',
    format: 'json',
    origin: '*',
  })
  

  try {
    const response: Response = await fetch(`${wikiApiUrl}${searchParams}`, {
      method: "GET",
      signal: abortController.signal,
      cache: "no-store"
    })

    if(!response.ok) return undefined

    return response.json()

  } catch (error) {
    error instanceof SyntaxError
        ? console.log(`JSON Error: ${error.message}`)
        : error instanceof ReferenceError ? console.log(error.message)
        : console.log(error)
    
    abortController.abort
  }

}