import { useState, useEffect } from 'react'
import { trendingMovies } from '../../../services/api'
import MovieList from '../../components/MovieList/MovieList'

const HomePage = ({ setIsLoading, setError }) => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([])

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true)
        const movies = await trendingMovies()
        setTrendingMoviesList(movies)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }
    getTrendingMovies()
  }, [setIsLoading, setError])

  return (
    <ul>
      <MovieList movies={trendingMoviesList} />
    </ul>
  )
}

export default HomePage
