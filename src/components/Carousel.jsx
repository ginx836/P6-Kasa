import React, { useState } from 'react'
import ControlButtons from './ControlButtons'
import '../styles/components/carousel.scss'

/**
 * Composant Carousel qui affiche une série d'images sous forme de diaporama
 * @param {Object} props - Les propriétés passées au composant
 * @param {Array} props.images - Les images à afficher
 * @returns {JSX.Element} Le composant Carousel
 */
const Carousel = ({ images, alt }) => {
  /**
   * État pour contrôler l'image actuellement affichée
   */
  const [currentImage, setCurrentImage] = useState(0)
  const length = images.length

  /**
   * Passe à l'image suivante
   */
  const nextImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
  }

  /**
   * Passe à l'image précédente
   */
  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
  }

  /**
   * Récupère l'image actuelle
   */
  const currentPicture = images[currentImage]

  return (
    <div className="slider">
      <div className={length > 1 ? 'slide active' : 'slide'}>
        {currentPicture && <img src={currentPicture} alt={alt} />}
      </div>
      {length > 1 && (
        <>
          <ControlButtons onPrev={prevImage} onNext={nextImage} />
          <div className="counter">
            {currentImage + 1}/{length}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel
