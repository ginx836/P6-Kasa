import React from 'react'
import fullstar from '../assets/star-full.svg'
import emptystar from '../assets/star-empty.svg'
import '../styles/components/rating.scss'

/**
 * Composant Rating qui affiche une note sous forme d'étoiles
 * @param {Object} props - Les propriétés passées au composant
 * @param {number} props.score - La note à afficher
 * @returns {JSX.Element} Le composant Rating
 */
const Rating = ({ score }) => {
  /**
   * Un tableau représentant les 5 étoiles
   */
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="active-rent__rating">
      {stars.map((star, index) =>
        star <= score ? (
          // Si l'étoile est inférieure ou égale à la note, affiche une étoile pleine
          <img
            key={index}
            className="star"
            src={fullstar}
            alt="étoile de notation"
          />
        ) : (
          // Sinon, affiche une étoile vide
          <img
            key={index}
            className="star"
            src={emptystar}
            alt="étoile de notation"
          />
        ),
      )}
    </div>
  )
}

export default Rating
