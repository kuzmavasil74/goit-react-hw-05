import { Link, useLocation } from 'react-router-dom'
import css from './MovieList.module.css'

const MovieList = ({ movies }) => {
  const location = useLocation()

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} className={css.movieListLi}>
          <Link
            state={location}
            to={`/movies/${movie.id}`}
            className={css.link}
          >
            <h2 className={css.movieListTitle}>
              {movie.title || movie.name || movie.original_name}
            </h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MovieList
