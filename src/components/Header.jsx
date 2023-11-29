import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'

/**
 * Composant Header qui affiche une barre de navigation avec un logo et des liens
 * @returns {JSX.Element} Le composant Header
 */
const Header = () => {
  return (
    <header className="header">
      <h1>
        <img className="header__logo" src={Logo} alt="Kasa" />
      </h1>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
