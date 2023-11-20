import React from 'react'

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
