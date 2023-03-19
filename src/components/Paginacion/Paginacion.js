import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

import './Paginacion.css'
import {useWindowSize} from '../../hooks/useWindowSize'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
})) 

const Paginacion = ({page, handleChange, count, handleOrder}) => {
  const { width } = useWindowSize()

  const classes = useStyles()

  return (
    <>
      <select onChange={handleOrder}>
        <option value="nombre A-Z">Ordenar por nombre A-Z</option>
        <option value="nombre Z-A">Ordenar por nombre Z-A</option>
        <option value="substancia A-Z">Ordenar por substancia A-Z</option>
        <option value="substancia Z-A">Ordenar por substancia Z-A</option>
      </select>
      {width < 500 ? null : 
        <div className={classes.root}>
          <Pagination count={count} page={page} onChange={handleChange}/>
        </div>
      }
    </>
 ) 
}

export default Paginacion
