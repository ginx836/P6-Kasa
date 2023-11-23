import React, { useState } from 'react'
import '../styles/collapse.scss'
import arrow from '../assets/ arrow.svg'

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isRotated, setIsRotated] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
    setIsRotated(!isRotated)
  }

  return (
    <div className="container">
      <div className="collapse__bar">
        <h2 className='title'>{props.label}</h2>
        <button onClick={toggle}>
          <img
            src={arrow}
            alt="bouton d'ouverture"
            className={isRotated ? 'rotate' : ''}
          />
        </button>
      </div>
      <div>
        {isOpen && <p className="container__content">{props.children}</p>}
      </div>
    </div>
  )
}

export default Collapse
