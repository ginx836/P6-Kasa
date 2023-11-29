import React from 'react'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import imageBanner from '../assets/about.png'
import '../styles/pages/about.scss'

function About() {
  return (
    <section className="about">
      <Banner imageBanner={imageBanner} />
      <div className="about__content">
        <Collapse label="Fiabilité">
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
        </Collapse>
        <Collapse label="Respect">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
        </Collapse>
        <Collapse label="Service">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
        </Collapse>
        <Collapse label="Sécurité">
        <p>
          La sécurité est la priorité de Kasa. C'est pourquoi nous assurons un
          suivi qualité constant sur les logements mis en ligne. De plus, la
          totalité des transactions est gérée par nos soins.
        </p>
        </Collapse>
      </div>
    </section>
  )
}

export default About
