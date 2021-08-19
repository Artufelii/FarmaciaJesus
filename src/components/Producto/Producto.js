import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import axios from '../axios'
import './Producto.css'

const Producto = () => {

  const { id } = useParams()
  const [ producto, setProducto ] = useState({})

  useEffect(() => {

    const getProducto = async () => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `/medicinas/${id}`
        })
        setProducto(data)

      } catch (e) {
        console.error(e)
      }
    }

    getProducto()

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
          <h3>$ { producto.precio }.00 MXN</h3>
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
