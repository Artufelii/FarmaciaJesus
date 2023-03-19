import React, {useState} from "react"
import { Link, useLocation } from 'react-router-dom'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleXmark, faEnvelope, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'

import './Header.css' 
import Logo from '../../Assets/Logo_Oficial-removebg-preview.png'
import Searcher from '../Searcher/Searcher'
import { useWindowSize } from "../../hooks"

const Header = ({ productos }) => {
  const { width } = useWindowSize()
  const location = useLocation()
  const [showSearcher, setShowSearcher] = useState(false)

  return(
    <>
      <nav className='header'>
        <div className="header__logo">
          <Link to="/">
            <img src={ Logo } alt="Farmacia Jesus" />
          </Link>
        </div>
        {width < 500 ? 
          null :
          <div className="header__searcher">
              <Searcher productos={productos} placeholder="Que estas buscando?"/>
          </div>
        }
        <ul className='header__nav'>
          {width < 500 ? <li onClick={() => setShowSearcher(!showSearcher)}><FontAwesomeIcon icon={ showSearcher ? faCircleXmark : faSearch } /></li> : null}
          {location.pathname !== '/' ? 
              <li><Link to="/"><FontAwesomeIcon icon={ faHome } />{width < 500 ? '' : 'Inicio'}</Link></li>
            : 
            <>
              <li><Link to="/catalogo"><FontAwesomeIcon icon={ faBars } />{width < 500 ? '' : 'Catalogo'}</Link></li>
              <li><a href="#contacto"><FontAwesomeIcon icon={ faEnvelope } />{width < 500 ? '' : 'Contactanos'}</a></li>
            </>
          }
        </ul>
      </nav>
      {width < 500 ? 
        <div style={showSearcher ? { top: 25 }: { top: '-100px' }} className="responsive__searcher">
          <Searcher productos={productos} placeholder="Que estas buscando?"/>
        </div> : 
        null
      }
    </>
  )
}

export default Header
