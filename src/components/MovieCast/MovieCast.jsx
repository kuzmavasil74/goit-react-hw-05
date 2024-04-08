const MovieCast = ({ cast }) => {
  // console.log('Received cast:', cast)
  if (Array.isArray(cast) && cast.length === 0) {
    return null
  }
  return (
    <ul>
      {cast &&
        cast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
          </li>
        ))}
    </ul>
  )
}

export default MovieCast
