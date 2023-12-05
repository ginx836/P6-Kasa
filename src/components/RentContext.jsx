import React, { createContext, useContext, useState, useEffect, useCallback} from 'react'

/**
 * Crée un nouveau contexte pour les logements
 */
const RentContext = createContext()

/**
 * Fournit les logements et une fonction pour les mettre à jour à tous les composants enfants
 */
export const RentProvider = ({ children }) => {
  /**
   * État pour stocker les logements
   */
  const [logements, setLogements] = useState([])

  /**
   * Met à jour les logements
   * @param {Array} data - Les nouvelles données de logements
   * useCallback permet de ne pas recréer la fonction à chaque fois que le composant est rechargé
   */
  const updateLogements = useCallback((data) => {
    setLogements(data)
  }, [])

  return (
    <RentContext.Provider value={{ logements, updateLogements }}>
      {children}
    </RentContext.Provider>
  )
}

/**
 * Utilise les données de logements du contexte
 * @returns {Object} Les logements
 * useContext permet de récupérer les données du contexte
 * useEffect permet d'exécuter une fonction à chaque fois que les logements sont mis à jour
 */
export const useRentData = () => {
  const { logements, updateLogements } = useContext(RentContext)
  const rentAPI = '/logements.json'

  /**
   * Récupère les données de logements à partir du fichier JSON à chaque fois que les logements sont mis à jour
   */
  useEffect(() => {
    fetch(rentAPI).then((response) => {
      response.json().then((data) => {
        updateLogements(data)
      })
    })
  }, [logements, updateLogements])

  return { logements }
}
