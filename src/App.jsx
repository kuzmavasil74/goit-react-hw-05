import { NavLink, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage'))

import Loader from './components/Loader/Loader'

function App() {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App
