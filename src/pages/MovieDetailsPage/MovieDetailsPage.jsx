import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { moviesDetails } from '../../../services/api'

import css from './MovieDetailsPage.module.css'
const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState(null)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await moviesDetails(movieId)
        console.log(details)
        setMovieDetails(details)
      } catch (error) {
        console.error('Error fetching movie details:', error)
      }
    }
    fetchMovieDetails()
  }, [movieId])

  return (
    <div>
      {movieDetails && (
        <div>
          <div>
            <ul className={css.movieDetailsList}>
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                  alt="poster"
                />
              </li>
              <li>
                <h2>
                  {movieDetails.title} (
                  {movieDetails.release_date.split('-')[0]})
                </h2>
                <br />
                <p>
                  User scored: {(movieDetails.vote_average * 10).toFixed(0)}%
                </p>
                <h3>Overview</h3>
                <p>{movieDetails.overview}</p>
                <h3>Genres</h3>
                <ul>
                  {movieDetails.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div>Additional information</div>
          <ul>
            <li>
              <NavLink
                className={css.navLink}
                to={`/movies/${movieId}/cast`}
              ></NavLink>
            </li>
            <li>
              <NavLink
                className={css.navLink}
                to={`/movies/${movieId}/reviews`}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MovieDetailsPage
