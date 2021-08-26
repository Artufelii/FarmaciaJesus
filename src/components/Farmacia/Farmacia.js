import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

import Menu from '../Menu/Menu'
import Productos from '../Productos/Productos'
import Paginacion from '../Paginacion/Paginacion'
import './Farmacia.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
})) 

const Farmacia = ({ productos, clases, marcas }) => {

  const perPage = 10
  const classes = useStyles()
  const [ page, setPage ] = useState(1)
  const [ filtro, setFiltro ] = useState(productos.slice((page-1)*perPage, page * perPage))
  const [check, setCheck] = useState(false)

  const count = Math.ceil(productos.length / perPage)

  const handleClass = ({ target }) => {
    if (target.value === '0-100') {
      if (!check) {
        setCheck(true)
        const FiltroPrecios = productos.filter((item) => {
          return parseFloat(item.precio) <= 100
        })
        return setFiltro(FiltroPrecios)
      } else {
        setCheck(false)
        return setFiltro(productos.slice((1-1)*perPage, 1 * perPage))
      }
    }

    if (target.value === '100-1000') {
      if (!check) {
        setCheck(true)
        const FiltroPrecios = productos.filter((item) => {
          return (
            parseFloat(item.precio) > 100 &&
            parseFloat(item.precio) <=1000
          )      
        })
        return setFiltro(FiltroPrecios)
      } else {
        setCheck(false)
        return setFiltro(productos.slice((1-1)*perPage, 1 * perPage))
      }
    }

    if (target.innerHTML === 'Todo') {
      return setFiltro(productos.slice((1-1)*perPage, 1 * perPage))
    }

    const clase = productos.filter((item) => {
      return (
        item.categoria.toLowerCase() === target.innerHTML.toLowerCase() ||
        item.marca.toLowerCase() === target.innerHTML.toLowerCase()
      ) 
        }).slice((page-1)*perPage, page * perPage)

    setFiltro(clase)
  }

  const handleChange = (event, value) => {
    setPage(value)
    setFiltro(productos.slice((value-1)*perPage, value*perPage))
  }

  const handleOrder = ({ target }) => {
    switch (target.value) {
      case 'nombre A-Z':
        setFiltro(productos.sort((a, b) => {
          if (a.name > b.name) {
            return 1
          }

          if (a.name < b.name) {
            return -1
          }

          return 0
          
        }).slice((page-1)*perPage, page * perPage))
        break;

      case 'nombre Z-A':
        setFiltro(productos.sort((a, b) => {
          if (a.name > b.name) {
            return -1
          }

          if (a.name < b.name) {
            return 1
          }

          return 0
          
        }).slice((page-1)*perPage, page * perPage))
        break;

      case 'substancia A-Z':
        setFiltro(productos.sort((a, b) => {
          if (a.substancia > b.substancia) {
            return 1
          }

          if (a.substancia < b.substancia) {
            return -1
          }

          return 0
          
        }).slice((page-1)*perPage, page * perPage))
        break;

      case 'substancia Z-A':
        setFiltro(productos.sort((a, b) => {
          if (a.substancia > b.substancia) {
            return -1
          }

          if (a.substancia < b.substancia) {
            return 1
          }

          return 0
          
        }).slice((page-1)*perPage, page * perPage))
        break;
      
      default:
        
    }
  }

  useEffect(() => {
    document.title = 'Farmacia Jesus | Encuentra Lo Que Estas Buscando'
  }, [])



  return (
    <div className="Farmacia">
      <div className="Farmacia__menu">
        <Menu 
          handleClass = { handleClass } 
          clases={ clases } 
          marcas={ marcas }
          productos={productos}
        />
      </div>
      <div className="Farmacia__select">
        <Paginacion 
          count={count} 
          page={page} 
          handleOrder={handleOrder} 
          handleChange={handleChange} 
        />
      </div>
      <div className="Farmacia__producto">
        {filtro.map((item) => (
          <Productos
            key = { item._id }
            id = { item._id }
            image = { item.image }
            name = { item.name }
            presentacion = { item.presentacion }
            substancia = { item.substancia }
            precio = { item.precio }
          />
        ))}
      </div>
      <div className={`Farmacia__paginacion ${classes.root}`}>
        <Pagination count={count} page={page} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Farmacia 

