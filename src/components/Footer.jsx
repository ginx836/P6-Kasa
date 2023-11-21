import React from 'react'
import DarkLogo from '../assets/dark-logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__logo" src={DarkLogo} alt="logo de Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
