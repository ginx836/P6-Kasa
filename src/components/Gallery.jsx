import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { useRentData } from './RentContext'

const Gallery = () => {
  const { logements } = useRentData()

  // Affichez les logements
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
