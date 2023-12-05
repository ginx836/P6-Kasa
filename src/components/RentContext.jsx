import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react'

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
  //  const updateLogements = useCallback((data) => {
  //    setLogements(data)
  //    console.log(logement
  //   }, [])

  const isRentLoaded = useRef(false)

  return (
    <RentContext.Provider value={{ logements, setLogements, isRentLoaded }}>
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
  const { logements, isRentLoaded, setLogements } = useContext(RentContext)
  const rentAPI = '/logements.json'

  /**
   * Récupère les données de logements à partir du fichier JSON à chaque fois que les logements sont mis à jour
   */
  useEffect(() => {
    if (!isRentLoaded) {
      fetch(rentAPI).then((response) => {
        response.json().then((data) => {
          setLogements(data)
          isRentLoaded.current = true
        })
      })
    }
  }, [isRentLoaded, setLogements])
  
  return { logements }
}
