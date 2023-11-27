import React, { createContext, useContext, useState } from 'react'

// Créez un contexte pour les données de la galerie
const GalleryContext = createContext()


// Créez un composant GalleryProvider qui va contenir les données de la galerie
// et les mettre à disposition des composants enfants
export const GalleryProvider = ({ children }) => {
  const [logements, setLogements] = useState([])

  // Créez une fonction updateLogements qui va mettre à jour les données de la galerie
  const updateLogements = (data) => {
    setLogements(data)
  }

  // Passez les données de la galerie et la fonction updateLogements dans le contexte
  return (
    <GalleryContext.Provider value={{ logements, updateLogements }}>
      {children}
    </GalleryContext.Provider>
  )
}

// Créez un hook useGallery qui va retourner les données de la galerie
export const useGallery = () => {
  return useContext(GalleryContext)
}
