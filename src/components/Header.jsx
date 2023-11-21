import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img className="header__logo" src={Logo} alt="Kasa" />
      </h1>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
