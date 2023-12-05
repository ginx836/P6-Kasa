import React from 'react'
import { Outlet } from 'react-router-dom'
import { RentProvider } from './components/RentContext'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <RentProvider>
        <Outlet />
      </RentProvider>
      <Footer />
    </>
  )
}

export default App
