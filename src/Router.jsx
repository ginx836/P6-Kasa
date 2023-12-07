import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import ActiveRent from './pages/Rent'
import ErrorPage from './pages/ErrorPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
        path: '/404',
        element: <ErrorPage />,
      },
    ],
  },
])

export default router
