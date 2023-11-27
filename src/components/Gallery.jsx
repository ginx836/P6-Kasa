// Gallery.jsx
import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Card from '../components/Card'
import { useGallery } from '../components/GalleryContext'

// Créez un composant Gallery qui va afficher les logements
const Gallery = () => {

  // Récupérez les données de la galerie et la fonction updateLogements depuis le contexte
  const { logements, updateLogements } = useGallery()

// Créez un effet qui va récupérer les données de la galerie depuis le fichier logements.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/logements.json')
        const data = await response.json()
        updateLogements(data)
      } catch (error) {
        <Navigate to="/ErrorPage" />
        console.error('Erreur lors de la récupération des données : ', error)
      }
    }

    // Vérifiez si les données ont déjà été chargées avant d'appeler fetchData
    if (logements.length === 0) {
      fetchData()
    } 
  }, [logements, updateLogements])
  
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
