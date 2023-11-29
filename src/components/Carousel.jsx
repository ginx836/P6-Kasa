import React, { useState } from 'react'
import ControlButtons from './ControlButtons'
import '../styles/components/carousel.scss'

const Carousel = ({ images }) => {

  const [currentImage, setCurrentImage] = useState(0)
  const length = images.length

  const nextImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
  }

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
  }

  return (
    <div className="slider">
      {images.map((picture, index) => {
        const isActive = index === currentImage
        return (
          <div key={index} className={isActive ? 'slide active' : 'slide'}>
            {isActive && <img src={picture} alt="Logement" />}
          </div>
        )
      })}
      {length > 1 ? (
        <>
          <ControlButtons onPrev={prevImage} onNext={nextImage} />
          <div className="counter">
            {currentImage + 1}/{length}
          </div>
        </>
      ) : null}
    </div>
  )
}
  
export default Carousel
