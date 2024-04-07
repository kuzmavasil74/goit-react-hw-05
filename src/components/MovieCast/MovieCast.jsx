const MovieCast = ({ cast, movieId }) => {
  // console.log('Received cast:', cast)
  // if (!cast) {
  //   return null
  // }
  return (
    <ul>
      {/* {cast &&
        cast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
          </li>
        ))} */}
    </ul>
  )
}

export default MovieCast
