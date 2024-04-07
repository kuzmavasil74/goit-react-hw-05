import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { moviesCredits, moviesDetails } from '../../../services/api'

import css from './MovieDetailsPage.module.css'
import MovieCast from '../../components/MovieCast/MovieCast'

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState(null)
  const [cast, setCast] = useState(null)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await moviesDetails(movieId)
        setMovieDetails(details)
      } catch (error) {
        console.error('Error fetching movie details:', error)
      }
    }
    fetchMovieDetails()
  }, [movieId])

  const handleClick = async () => {
    try {
      const castData = await moviesCredits(movieId)
      setCast(castData.cast)
      console.log('Cast data:', castData.cast)
    } catch (error) {
      console.error('Error fetching movie credits:', error)
    }
  }

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
            <li onClick={handleClick}>
              <NavLink className={css.navLink} to={`/movies/${movieId}/cast`}>
                Cast
              </NavLink>
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
          {cast &&
            cast.map(
              ({ id, name, profile_path }) => (
                console.log(cast),
                (
                  <li key={id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={name}
                    />
                    <p>{name}</p>
                  </li>
                )
              )
            )}
        </div>
      )}
    </div>
  )
}

export default MovieDetailsPage
