import React from 'react'
import fullstar from '../assets/star-full.svg'
import emptystar from '../assets/star-empty.svg'
import '../styles/components/rating.scss'

const Rating = ({ score }) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="active-rent__rating">
      {stars.map((star, index) =>
        star <= score ? (
          <img key={index} className="star" src={fullstar} alt="rating star" />
        ) : (
          <img key={index} className="star" src={emptystar} alt="rating star" />
        ),
      )}
    </div>
  )
}

export default Rating
