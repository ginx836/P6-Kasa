import React from 'react'
import left from '../assets/Vector-left.svg'
import right from '../assets/Vector-right.svg'

/**
 * @param {Object} props - Les propriétés passées au composant
 * @onPrev {function} Définit la page précédente
 * @onNext {function} Définit la page suivante
 * @returns {JSX.Element} boutons de contrôle
 */

const ControlButtons = ({ onPrev, onNext }) => (
  <div className="control">
    <img src={left} alt="left arrow" className="left-arrow" onClick={onPrev} />
    <img
      src={right}
      alt="right arrow"
      className="right-arrow"
      onClick={onNext}
    />
  </div>
)

export default ControlButtons
