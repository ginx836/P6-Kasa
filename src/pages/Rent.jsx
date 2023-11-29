import React from 'react'
import { useParams } from 'react-router-dom'
import { useRentData } from '../components/RentContext'
import Carousel from '../components/Carousel'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'

import '../styles/pages/rent.scss'
import '../styles/components/carousel.scss'

const ActiveRent = () => {
  //Récupère l'id du logement dans l'url
  const { id } = useParams()
  const { logements } = useRentData()

  //Récupère le logement correspondant à l'id
  const logement = logements.find((logement) => logement.id === id)

  //Récupère les équipements du logement et les affiche sous forme de liste
  const equipments = logement?.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>
  })

  return (
    <>
      {logement && (
        <div className="active-rent">
          <div className="active-rent__carousel">
            <Carousel images={logement.pictures} />
          </div>

          <div className="active-rent__title">
            <div className="active-rent__name">
              <h2>{logement.title}</h2>
              <p>{logement.location}</p>
            </div>
            <div className="active-rent__host">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>

          <div className="active-rent__ranking">
            <div className="active-rent__tags">
              {logement.tags.map((tag, index) => {
                return (
                  <div key={index} className="btn">
                    {tag}
                  </div>
                )
              })}
            </div>
            <Rating score={logement.rating} />
          </div>
          <div className="active-rent__description">
            <Collapse label="Description" children={logement.description} />
            <Collapse label="Équipements" children={equipments} />
          </div>
        </div>
      )}
    </>
  )
}

export default ActiveRent
