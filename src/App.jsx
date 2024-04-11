import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))

import Loader from './components/Loader/Loader'
import css from './App.module.css'

import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <div>
      <header className={css.header}>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App
