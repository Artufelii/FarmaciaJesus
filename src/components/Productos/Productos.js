import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Productos.css'

const Productos = ({ id, image, name, presentacion, precio }) => {
  const navigate = useNavigate()

  return (
    <div className="Productos">
      <div className="Productos__img">
        <img src={ image } alt={ name } />
      </div>
      <div className="Productos__descripcion">
        <p>{ name }</p>
        <p>{ presentacion }</p>
        <p><strong>{ new Intl.NumberFormat("es-MX", {
          style: "currency",
          currency: "MXN"
        }).format(precio) }</strong></p>
        <button onClick={() => navigate(`/catalogo/${id}`)}>Mas informacion</button>
      </div>
    </div>
  )
}

export default Productos
