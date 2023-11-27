import React from 'react'
import { Link } from 'react-router-dom'
import logements from '../data/logements.json'
import Card from '../components/Card'

const Gallery = () => {
  return (
    <section className="home__gallery">
      {logements.map((rent) => (
        <article key={rent.id}>
          <Link to={`/rent/${rent.id}`}>
            <Card image={rent.cover} title={rent.title} />
          </Link>
        </article>
      ))}
    </section>
  )
}

export default Gallery
