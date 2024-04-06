import axios from 'axios'

export const searchMovies = async (searchQuery) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&language=en-US&page=1`
  const options = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTFjZjRkZDNkODI1NWJmZTRkYWM4NWE3ODAzY2QzOCIsInN1YiI6IjY2MTE4MDRhOGMwYTQ4MDE3ZTA0NjlkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2mNRHbFJmr7K7ZO7fcdj0yRFs4U5hyxjdV8naDrlths`,
    },
  }
  try {
    const response = await axios.get(url, options)
    console.log(response.data.results)
    return response.data.results
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error
  }
}

export const trendingMovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTFjZjRkZDNkODI1NWJmZTRkYWM4NWE3ODAzY2QzOCIsInN1YiI6IjY2MTE4MDRhOGMwYTQ4MDE3ZTA0NjlkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2mNRHbFJmr7K7ZO7fcdj0yRFs4U5hyxjdV8naDrlths',
    },
  }
  try {
    const response = await axios.get(url, options)
    console.log(response.data.results)
    return response.data.results
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error
  }
}
