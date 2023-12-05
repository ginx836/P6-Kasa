import { useState, useEffect } from 'react'

export const useFetchLogements = (url) => {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLogements(data))
      console.log(logements)
    }, [])

  return logements
}
