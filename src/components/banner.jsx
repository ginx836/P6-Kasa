import React from 'react'

/**
 * Composant Banner qui affiche une bannière avec une image et un titre
 * @param {Object} props - Les propriétés passées au composant
 * @param {string} props.title - Le titre à afficher sur la bannière
 * @param {string} props.imageBanner - L'image à afficher en arrière-plan de la bannière
 * @returns {JSX.Element} Le composant Banner
 */
const Banner = ({ title, imageBanner }) => {
  return (
    <div className="banner">
      <div className="banner__overlay"></div>
      <img src={imageBanner} alt="banner" className="banner__img" />
      <h2 className="banner__title">{title}</h2>
    </div>
  )
}

export default Banner
