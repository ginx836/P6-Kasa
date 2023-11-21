import React from 'react'
import image from '../assets/home.png'


const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__overlay"></div>
      <img src={image} alt='banner' className='banner__img' />
      <h2 className='banner__title'>Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default Banner