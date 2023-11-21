import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import '../styles/home.scss'
import imageBanner from '../assets/home.png'


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
