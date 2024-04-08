import { NavLink, Route, Routes } from 'react-router-dom'
import { Suspense, lazy, useState } from 'react'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))

import Loader from './components/Loader/Loader'
import css from './App.module.css'
import clsx from 'clsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, [isActive && css.active])
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  error={error}
                  setError={setError}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <MoviesPage
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  error={error}
                  setError={setError}
                />
              }
            />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App
