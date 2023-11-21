import React from 'react'
import Banner from '../components/Banner'
import imageBanner from '../assets/about.png'
import '../styles/about.scss'

function About() {
  return (
    <section className="about">
      <Banner imageBanner={imageBanner}/>
    </section>
  )
}

export default About
