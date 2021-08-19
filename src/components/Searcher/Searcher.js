import React, { useState } from "react"
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

import './Searcher.css' 

const Searcher = ({ placeholder, productos }) => {

  const [ search, setSearch ] = useState([])

  const handleSearch = ({ target }) => {

    if (target.value === '') {
      return setSearch([])
    }

    const texto = target.value.toLowerCase()

    const filterProducts = (objeto) => {

      let nombre = objeto.name.toLowerCase()
      let categoria = objeto.categoria.toLowerCase()
      let marca = objeto.marca.toLowerCase()
      let substancia = objeto.substancia.toLowerCase()
      let codigo = objeto.codigo

      return (
        nombre.indexOf(texto) !== -1 || 
        categoria.indexOf(texto) !== -1 || 
        marca.indexOf(texto) !== -1 || 
        substancia.indexOf(texto) !== -1 ||
        codigo.indexOf(texto) !== -1 
      ) 

    }

    const searchResult = productos.filter(filterProducts)
    setSearch(searchResult)
  }

  const handleReset = () => {
    setTimeout(() => {
      setSearch([])
    }, 100)
  }

  return(
    <div className="searcher">
      <input type="text" 
        placeholder={ placeholder } 
        onKeyUp={ handleSearch } 
        onBlur={ handleReset } 
        onFocus={ e => e.target.value !== "" && handleSearch(e) }
      />
      <FontAwesomeIcon icon={ faSearch } />
      {search.length !== 0 &&
        <div className="searcher__result">
          {search.map((item) => (
              <Link to = { `/catalogo/${item._id}` } key={item._id}>
                <div className="result" >
                  <div className="result__img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="result__info">
                    <p>{item.name}</p>
                    <p>{item.substancia}</p>
                    <p>{item.presentacion}</p>
                    <p>$ <strong>{item.precio}.00</strong> MXN</p>
                  </div>
                </div>
              </Link>
            )) 
          }
        </div>
      }
    </div>
  )
}

export default Searcher
