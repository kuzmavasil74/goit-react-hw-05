import { useState } from 'react'
import { searchMovies } from '../../services/api'
import Loader from '../components/Loader/Loader'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSearch = async () => {
    try {
      setIsLoading(true)
      const result = await searchMovies(searchQuery)
      setSearchResults(result)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  return (
    <div>
      <h1></h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title || movie.name || movie.original_name}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MoviesPage
