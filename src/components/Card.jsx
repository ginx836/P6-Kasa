import React from 'react'

/**
 * Composant Card qui affiche une carte avec une image et un titre
 * @param {Object} props - Les propriétés passées au composant
 * @param {string} props.image - L'image à afficher sur la carte
 * @param {string} props.title - Le titre à afficher sur la carte
 * @returns {JSX.Element} Le composant Card
 */
const Card = ({ image, title }) => {
  return (
    <div className="card">
      <div className="card__overlay"></div>
      <img src={image} alt={title} className="card__cover" />
      <div className="card__title">{title}</div>
    </div>
  )
}

export default Card
