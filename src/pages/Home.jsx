import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import imageBanner from '../assets/home.png'
import '../styles/pages/home.scss'


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
