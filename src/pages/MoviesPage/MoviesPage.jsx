import { useState } from 'react'
import { searchMovies } from '../../../services/api'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import MovieList from '../../components/MovieList/MovieList'

import css from './MoviesPage.module.css'
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
      <div className={css.searchContainer}>
        <input
          className={css.inputSearch}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={css.buttonSearch} onClick={handleSearch}>
          Search
        </button>
      </div>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <ul>
        {searchResults.map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default MoviesPage
