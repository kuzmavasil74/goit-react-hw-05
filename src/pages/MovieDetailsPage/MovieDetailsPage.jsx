import { Suspense, useEffect, useState } from 'react'
import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import {
  moviesCredits,
  moviesDetails,
  moviesReviews,
} from '../../../services/api'

import css from './MovieDetailsPage.module.css'
import MovieCast from '../../components/MovieCast/MovieCast'
import Loader from '../../components/Loader/Loader'
import MovieReviews from '../../components/MovieReviews/MovieReviews'

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState(null)
  const [cast, setCast] = useState(null)
  const [reviews, setReviews] = useState(null)

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
      // console.log('Cast data:', castData.cast)
    } catch (error) {
      console.error('Error fetching movie credits:', error)
    }
  }
  const handleClickReview = async () => {
    try {
      const reviewsData = await moviesReviews(movieId)
      setReviews(reviewsData.results)
    } catch (error) {
      console.error('Error fetching movie reviews:', error)
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
            <li>
              <NavLink to={`cast`} onClick={handleClick}>
                Cast
              </NavLink>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path={`cast`} element={<MovieCast cast={cast} />} />
                </Routes>
              </Suspense>
            </li>
            <li>
              <NavLink to={`reviews`} onClick={handleClickReview}>
                Reviews
              </NavLink>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route
                    path={`reviews`}
                    element={<MovieReviews reviews={reviews} />}
                  />
                </Routes>
              </Suspense>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MovieDetailsPage
