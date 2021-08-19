import React from "react"
import { Link } from 'react-router-dom'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './Header.css' 
import Logo from '../../Assets/Logo_Oficial-removebg-preview.png'
import Searcher from '../Searcher/Searcher'

const Header = ({ productos }) => {
  return(
    <nav className='header'>
      <div className="header__logo">
        <Link to="/">
          <img src={ Logo } alt="Farmacia Jesus" />
        </Link>
      </div>
      <Searcher productos={productos} placeholder="Que estas buscando?"/>
      <ul className='header__nav'>
        <li><Link to="/catalogo">Catalogo  <FontAwesomeIcon icon={ faBars } /></Link></li>
      </ul>
    </nav>
  )
}

export default Header
