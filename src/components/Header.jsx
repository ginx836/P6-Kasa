import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'

function Header() {
  return (
    <div className='header'>
      <img className="header__logo" src={Logo} alt="logo" />
      <nav className='header__nav'>
      <NavLink to="/" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Accueil</NavLink>
      <NavLink to="/about" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>A Propos</NavLink>
      </nav>
    </div>
  )
}

export default Header
