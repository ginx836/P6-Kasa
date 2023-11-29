import {Link} from 'react-router-dom';
import '../styles/pages/errorpage.scss';

/**
 * @returns {JSX.Element} page d'erreur 404
 */

const ErrorPage = () => {
  return (
    <div className='errorpage__container'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default ErrorPage