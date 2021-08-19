import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

import './Paginacion.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
})) 

const Paginacion = ({page, handleChange, count, handleOrder}) => {

  const classes = useStyles()

  return (
    <>
      <select id="" name="">
        <option onClick={ handleOrder } value="nombre A-Z">Ordenar por nombre A-Z</option>
        <option onClick={ handleOrder } value="nombre Z-A">Ordenar por nombre Z-A</option>
        <option onClick={ handleOrder } value="substancia A-Z">Ordenar por substancia A-Z</option>
        <option onClick={ handleOrder } value="substancia Z-A">Ordenar por substancia Z-A</option>
      </select>
      <div className={classes.root}>
        <Pagination count={count} page={page} onChange={handleChange}/>
      </div>
    </>
 ) 
}

export default Paginacion
