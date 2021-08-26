import React, { useState } from 'react'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

import './Menu.css'

const Menu = ({ handleClass, clases, marcas }) => {

  const [mostrar, setMostrar] = useState('');
  

  const handleClick = (lista) => {

    setMostrar(lista)

    if (mostrar === lista) {
      setMostrar('')
    }

  } 

  return (
    <div className="Menu">
      <button className="Menu__filtros" onClick={() => handleClick('categoria')}>
        <span>Categoría</span>
        <FontAwesomeIcon icon={mostrar === 'categoria' ? faMinusCircle : faPlusCircle} />
      </button>
      <div className="Menu__listas" hidden={ mostrar !== 'categoria' && true }>
        <ul>
          <li onClick={handleClass}>Todo</li>
          {clases.map((item) => (
            <li onClick={handleClass} key={ item._id }>{ item.clase }</li>
          ))}
        </ul>
      </div>
      <button className="Menu__filtros" onClick={() => handleClick('marca')}>
        <span>Marca</span>
        <FontAwesomeIcon icon={mostrar === 'marca' ? faMinusCircle : faPlusCircle} />
      </button>
      <div className="Menu__listas" hidden={ mostrar !== 'marca' && true }>
        <ul>
          <li onClick={handleClass}>Todo</li>
          {marcas.map((item) => (
            <li onClick={handleClass} key={ item._id }>{ item.marca }</li>
          ))}
        </ul>
      </div>
      <button className="Menu__filtros" onClick={() => handleClick('precio')}>
        <span>Precio</span>
        <FontAwesomeIcon icon={mostrar === 'precio' ? faMinusCircle : faPlusCircle} />
      </button>
      <div className="Menu__listas" hidden={mostrar !== 'precio' && true}>
        <ul>
          <li><input onChange={ handleClass } id="0-100" type="checkbox" value="0-100"/><label htmlFor="0-100">$0-$100</label></li>
          <li><input onChange={ handleClass } id="100-1000" type="checkbox" value="100-1000"/><label htmlFor="100-1000">$100-$1000</label></li>
        </ul>
      </div>
    </div>
  )
}

export default Menu

