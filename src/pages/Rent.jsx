import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Carousel from '../components/Carousel'
import logements from '../data/logements.json'
import '../styles/rent.scss'

const ActiveRent = () => {
  //Récupère l'id du logement dans l'url
  const id = useParams()
  //Récupère le logement correspondant à l'id
  const logement = logements.find((logement) => logement.id === id.id)

  return (
    <>
      {logement ? (
        <div className="active-rent">
          <div className="active-rent__carousel">
            <Carousel images={logement.pictures} />
          </div>
        </div>
      ) : (
        <Navigate to="/ErrorPage" />
      )}
    </>
  )
}

export default ActiveRent
