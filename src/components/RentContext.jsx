import React, { createContext, useContext, useState, useEffect } from 'react'

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
  const rentAPI = '/logements.json'

  useEffect(() => {
    fetch(rentAPI).then((response) => {
      response.json().then((data) => {
        setLogements(data)
      })
    })
  }, [setLogements])

  return (
    <RentContext.Provider value={{ logements, setLogements }}>
      {children}
    </RentContext.Provider>
  )
}

export const useRentData = () => {
   return useContext(RentContext)
}
