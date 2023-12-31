import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useRentData } from '../components/RentContext'
import Carousel from '../components/Carousel'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import '../styles/pages/rent.scss'
import '../styles/components/carousel.scss'

/**
 * Composant ActiveRent qui affiche les détails d'un logement spécifique
 * @returns {JSX.Element} Le composant ActiveRent
 */
const ActiveRent = () => {
  // Récupère l'id du logement dans l'url
  const { id } = useParams()
  const { logements } = useRentData()

  // Récupère le logement correspondant à l'id
  const logement = logements.find((logement) => logement.id === id)

  // Récupère les équipements du logement et les affiche sous forme de liste
  const equipments = logement?.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>
  })

  return (
    <>
      {logement ? (
        <main className="active-rent">
          <div className="active-rent__carousel">
            <Carousel images={logement.pictures} alt={logement.title} />
          </div>
          <div className="active-rent__container">
            <div className="active-rent__title">
              <section className="active-rent__name">
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
              </section>
              <div className="active-rent__tags">
                {logement.tags.map((tag, index) => {
                  return (
                    <div key={index} className="tags__btn">
                      {tag}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="active-rent__ranking">
              <div className="active-rent__host">
                <p>{logement.host.name}</p>
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>
              <Rating score={logement.rating} />
            </div>
          </div>
          <div className="active-rent__description">
            <Collapse
              key={`${id}-description`}
              label="Description"
              children={logement.description}
            />
            <Collapse
              key={`${id}-equipments`}
              label="Équipements"
              children={equipments}
            />
          </div>
        </main>
      ) : (
        <Navigate to="/404" />
      )}
    </>
  )
}

export default ActiveRent
