import css from './MovieList.module.css'
const MovieList = ({ movie }) => {
  return (
    <li className={css.movieListLi}>
      <h2 className={css.movieListTitle}>
        {movie.title || movie.name || movie.original_name}
      </h2>
    </li>
  )
}

export default MovieList
