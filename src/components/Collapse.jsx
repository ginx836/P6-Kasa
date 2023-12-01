import React, { useState } from 'react'
import arrow from '../assets/ arrow.svg'
import '../styles/components/collapse.scss'

/**
 * Composant Collapse qui affiche ou cache du contenu lorsqu'on clique sur un bouton
 * @param {Object} props - Les propriétés passées au composant
 * @param {string} props.label - Le titre à afficher sur la barre de collapse
 * @param {JSX.Element} props.children - Le contenu à afficher ou à cacher
 * @returns {JSX.Element} Le composant Collapse
 */
const Collapse = (props) => {
  /**
   * État pour contrôler si le contenu est affiché ou non
   */
  const [isOpen, setIsOpen] = useState(false)

  /**
   * Bascule l'affichage du contenu du collapse
   */
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="container">
      <div className="collapse__bar">
        <h2 className="title">{props.label}</h2>
        <button onClick={toggle}>
          <img
            src={arrow}
            alt="bouton d'ouverture"
            className={isOpen ? 'rotate' : ''}
          />
        </button>
      </div>
      <div>
        {isOpen && <div className="container__content">{props.children}</div>}
      </div>
    </div>
  )
}

export default Collapse
