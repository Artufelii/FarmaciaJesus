import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { getInfo } from '../../helpers'
import './Producto.css'

const Producto = () => {

  const { id } = useParams()
  const [ producto, setProducto ] = useState({})

  useEffect(() => {

    getInfo('/api/medicinas', id)
      .then(setProducto)

  }, [id, setProducto])

  return (
    <>
      <Helmet>
        <title>{`${producto.substancia} ${producto.presentacion}`}</title>
      </Helmet>
      <div className="Producto">
        <div className="Producto__title">
          <h2>{ producto.substancia } { producto.presentacion }</h2>
          <hr />
          <h3>{ new Intl.NumberFormat("es-MX", {
              style: "currency", 
              currency: "MXN"
            }).format(producto.precio) }
          </h3>
        </div>
        <div className="Producto__img">
          <img src={ producto.image } alt={ producto.name } />
        </div>
        <div className="Producto__description">
          <h2>Informacion</h2>
          <hr />
          <p><strong>Nombre:</strong> { producto.name }</p>
          <p><strong>Presentación:</strong> { producto.substancia } { producto.presentacion }</p>
          <p><strong>Laboratorio:</strong> { producto.marca }</p>
        </div>
      </div>
    </>
  ) 
}

export default Producto
