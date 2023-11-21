import React from 'react'
import { Link } from 'react-router-dom'
import logements from '../data/logements.json'
import Card from '../components/Card'

const Gallery = () => {
  return (
    <section className="home__gallery">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title}/>
            </Link>
          </article>
        )
      })}
    </section>
  )
}

export default Gallery
