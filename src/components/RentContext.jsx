import React, { createContext, useContext, useState, useEffect } from 'react'

/**
 * Crée un nouveau contexte pour les logements
 */
const RentContext = createContext()

/**
 * Fournit les logements et une fonction pour les mettre à jour à tous les composants enfants
 * @param {React.children} children Les composants enfants du fournisseur
 * @useEffect {Function} Utilisation de useEffect pour récupérer les données de l'API
 * @returns {React.Element} Un éléement du contexte 
 * 
 */
export const RentProvider = ({ children }) => {
  
  const [logements, setLogements] = useState([])
  const rentAPI = '/logements.json'

  useEffect(() => {
    fetch(rentAPI)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur HTTP')
      }
      return response.json()
    })
      .then((data) => {
        setLogements(data)
      })
      .catch((error) => {
        console.error("Une erreur est survenue lors de la récupération des données")
    })
  }, [setLogements])

  return (
    <RentContext.Provider value={{ logements, setLogements }}>
      {children}
    </RentContext.Provider>
  )
}

/**
 * Fournit aux composants enfants les logements et une fonction pour les mettre à jour
 * @returns {React.Context<{logements: Array, setLogements: Function}>}}
 */
export const useRentData = () => {
   return useContext(RentContext)
}
