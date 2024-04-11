import css from './MovieReviews.module.css'
const MovieReviews = ({ reviews }) => {
  if (Array.isArray(reviews) && reviews.length === 0) {
    return null
  }
  return (
    <ul>
      {reviews &&
        reviews.map(({ id, content }) => (
          <li key={id}>
            <h3 className={css.movieReviewsDesc}>{content}</h3>
          </li>
        ))}
    </ul>
  )
}

export default MovieReviews
