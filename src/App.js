import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Farmacia from './components/Farmacia/Farmacia'
import Producto from './components/Producto/Producto'
import { getInfo } from './helpers'

const App = () => {

  const [ productos, setProductos ] = useState([])
  const [ clases, setClases ] = useState([])
  const [marcas, setMarcas] = useState([])

  useEffect(() => {

    getInfo('marcas', '')
      .then( setMarcas )

    getInfo('medicinas', '')
      .then(setProductos)

    getInfo('clases', '')
      .then(setClases)

  }, [setProductos, setClases, setMarcas])

  const medicamentos = productos.filter((objeto) => {
    const tipo = objeto.tipo.toLowerCase()

    return tipo.indexOf('medicamento') !== -1
  })

  const higiene = productos.filter((objeto) => {
    const tipo = objeto.tipo.toLowerCase()

    return tipo.indexOf('higiene') !== -1
  })

  const rebotica = productos.filter((objeto) => {
    const tipo = objeto.tipo.toLowerCase()

    return tipo.indexOf('rebotica') !== -1
  })

  return (
    <Router>
      <Header productos={productos} />
      <Switch>
        <Route path='/catalogo/:id'>
          <Producto />
        </Route>
        <Route path="/catalogo">
          <Farmacia 
            clases={ clases } 
            marcas={ marcas }
            productos={ productos } 
          />
        </Route>
        <Route path="/">
          <Main 
            medicamentos={ medicamentos }
            higiene={ higiene }
            rebotica={ rebotica }
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
