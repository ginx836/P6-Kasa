import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { useFetchLogements } from './useFetch'

/**
 * Composant Gallery qui affiche une liste de logements
 * @returns {JSX.Element} Le composant Gallery
 */
const Gallery = () => {
  /**
   * Récupère les logements à partir du fichier JSON
   */
  const logements = useFetchLogements('/logements.json')

  return (
    <section className="home__gallery">
      {logements.map((rent) => (
        // Pour chaque logement, crée un lien vers la page de détail du logement
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
