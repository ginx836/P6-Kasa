import React from 'react'


const Banner = ({title, imageBanner}) => {
  return (
    <div className="banner">
      <div className="banner__overlay"></div>
      <img src={imageBanner} alt='banner' className='banner__img' />
      <h2 className='banner__title'>{title}</h2>
    </div>
  )
}

export default Banner