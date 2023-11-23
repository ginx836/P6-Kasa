import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import './styles/variables.scss'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Rent from './pages/Rent'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/rent',
        element: <Rent />,
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
