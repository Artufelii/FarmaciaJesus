import React, { useState } from 'react'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

import './Menu.css'

const Menu = ({ handleClass, clases }) => {

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
          <li onClick={handleClass}>Marzam</li>
          <li onClick={handleClass}>Raam</li>
          <li onClick={handleClass}>Simons</li>
        </ul>
      </div>
      <button className="Menu__filtros" onClick={() => handleClick('precio')}>
        <span>Precio</span>
        <FontAwesomeIcon icon={mostrar === 'precio' ? faMinusCircle : faPlusCircle} />
      </button>
      <div className="Menu__listas" hidden={mostrar !== 'precio' && true}>
        <ul>
          <li><input type="checkbox" value="0-100"/>$0-$100</li>
          <li><input type="checkbox" value="0-100"/>$100-$1000</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu

