import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import imageBanner from '../assets/home.png'
import '../styles/pages/home.scss'

/**
 * @returns {JSX.Element} page d'accueil
 * @title {string} titre de la page
 * @imageBanner {string} image de la bannière 
 */

const Home = () => {
  return (
  <>  
  <main className="home">
  <Banner title="Chez vous, partout et ailleurs" imageBanner={imageBanner}/>
  <Gallery />
  </main>
  </>
  )
}

export default Home
