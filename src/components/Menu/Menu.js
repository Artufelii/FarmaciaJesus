import React, { useState } from 'react'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

import './Menu.css'

const Menu = ({ handleClass, clases, marcas }) => {

  const [mostrarCategoria, setMostrarCategoria] = useState(true);
  const [mostrarMarca, setMostrarMarca] = useState(true);
  const [mostrarPrecio, setMostrarPrecio] = useState(true);
  
  return (
      <div className="Menu">
        <button className="Menu__filtros" onClick={() => setMostrarCategoria(!mostrarCategoria)}>
          <span>Categoría</span>
          <FontAwesomeIcon icon={mostrarCategoria ? faPlusCircle : faMinusCircle} />
        </button>
        <div className="Menu__listas" hidden={ mostrarCategoria }>
          <ul>
            <li onClick={handleClass}>Todo</li>
            {clases.map((item) => (
              <li onClick={handleClass} key={ item._id }>{ item.clase }</li>
            ))}
          </ul>
        </div>
        <button className="Menu__filtros" onClick={() => setMostrarMarca(!mostrarMarca)}>
          <span>Marca</span>
          <FontAwesomeIcon icon={ mostrarMarca ? faPlusCircle : faMinusCircle} />
        </button>
        <div className="Menu__listas" hidden={ mostrarMarca }>
          <ul>
            <li onClick={handleClass}>Todo</li>
            {marcas.map((item) => (
              <li onClick={handleClass} key={ item._id }>{ item.marca }</li>
            ))}
          </ul>
        </div>
        <button className="Menu__filtros" onClick={() => setMostrarPrecio(!mostrarPrecio)}>
          <span>Precio</span>
          <FontAwesomeIcon icon={mostrarPrecio ? faPlusCircle : faMinusCircle} />
        </button>
        <div className="Menu__listas" hidden={mostrarPrecio}>
          <ul>
            <li><input onChange={ handleClass } id="0-100" type="checkbox" value="0-100"/><label htmlFor="0-100">$0-$100</label></li>
            <li><input onChange={ handleClass } id="100-1000" type="checkbox" value="100-1000"/><label htmlFor="100-1000">$100-$1000</label></li>
          </ul>
        </div>
      </div>
  )
}

export default Menu

