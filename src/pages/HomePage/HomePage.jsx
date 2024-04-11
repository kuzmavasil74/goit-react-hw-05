import { useState, useEffect } from 'react'
import { trendingMovies } from '../../../services/api'
import MovieList from '../../components/MovieList/MovieList'
import Loader from '../../components/Loader/Loader'

const HomePage = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getTrendingMovies = async () => {
      setIsLoading(true)
      try {
        const movies = await trendingMovies()
        setTrendingMoviesList(movies)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getTrendingMovies()
  }, [])

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Something went wrong: {error.message}</p>}
      {!isLoading && !error && (
        <ul>
          <MovieList movies={trendingMoviesList} />
        </ul>
      )}
    </div>
  )
}

export default HomePage
