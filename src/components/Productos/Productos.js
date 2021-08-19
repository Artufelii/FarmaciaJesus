import React from 'react'
import { Link } from 'react-router-dom'

import './Productos.css'

const Productos = ({ id, image, name, presentacion, precio }) => {
  return (
    <div className="Productos">
      <div className="Productos__img">
        <img src={ image } alt={ name } />
      </div>
      <div className="Productos__descripcion">
        <p>{ name }</p>
        <p>{ presentacion }</p>
        <p>$ <strong>{ precio }.00</strong> MXN</p>
        <button><Link to = {`/catalogo/${id}`}>Mas informacion</Link></button>
      </div>
    </div>
  )
}

export default Productos
