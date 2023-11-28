import React, { createContext, useContext, useState, useEffect } from 'react'

const RentContext = createContext()


export const RentProvider = ({ children }) => {
  const [logements, setLogements] = useState([])

  const updateLogements = (data) => {
    setLogements(data)
  }

  return (
    <RentContext.Provider value={{ logements, updateLogements }}>
      {children}
    </RentContext.Provider>
  )
}


export const useRentData = () => {
  const { logements, updateLogements } = useContext(RentContext)

  useEffect(() => {
    fetch('/logements.json').then((response) => {
      response.json().then((data) => {
        updateLogements(data)
      })
    })
  }, [logements, updateLogements])

  return { logements }
}
