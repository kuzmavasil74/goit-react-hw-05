import { useState } from 'react'
import { searchMovies } from '../../../services/api'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import MovieList from '../../components/MovieList/MovieList'

import SearchMoviesForm from '../../components/SearchMoviesForm/SearchMoviesForm'
const MoviesPage = ({ isLoading, setIsLoading, error, setError }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

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
  const handleSubmit = (e) => {
    setSearchQuery(e.target.value)
    handleSearch()
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div>
      <h1></h1>
      <SearchMoviesForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
      />
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <ul>
        <MovieList movies={searchResults} />
      </ul>
    </div>
  )
}

export default MoviesPage
