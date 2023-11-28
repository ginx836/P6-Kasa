import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { RentProvider } from './components/RentContext'
import Home from './pages/Home'
import About from './pages/About'
import ActiveRent from './pages/Rent'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/index.scss'
import './styles/variables.scss'

const AppLayout = () => {
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

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: 'rent/:id',
        element: <ActiveRent />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
