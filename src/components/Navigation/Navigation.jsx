import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from 'clsx'
const Navigation = () => {
  const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, [isActive && css.active])
  return (
    <nav className={css.nav}>
      <NavLink className={getNavLinkClassName} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/movies">
        Movies
      </NavLink>
    </nav>
  )
}

export default Navigation
