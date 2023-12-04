import React, { useState } from 'react'
import arrow from '../assets/arrow.svg'
import '../styles/components/collapse.scss'

const Collapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div className="container">
      <div className="collapse__bar">
        <h2 className="title">{label}</h2>
        <img
          className="chevron"
          src={arrow}
          alt="bouton d'ouverture"
          onClick={toggleOpen}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
        />
      </div>
      <div className={`container__content ${isOpen ? 'open' : ''}`}>
        <div className='content__inner'>
        {children}
      </div>
    </div>
    </div>
  )
}

export default Collapse
