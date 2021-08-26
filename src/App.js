import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Farmacia from './components/Farmacia/Farmacia'
import Producto from './components/Producto/Producto'
import axios from './components/axios'

const App = () => {

  const [ productos, setProductos ] = useState([])
  const [ clases, setClases ] = useState([])
  const [marcas, setMarcas] = useState([])

  useEffect(() => {
    const getProductos = async () => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: '/medicinas',
        })
        setProductos(data)
      } catch (e) {
        console.error(e)
      }
    }

    const getClases = async () => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: '/clases'
        })
        setClases(data)
      } catch (e) {
        console.error(e)
      }
    }

    const getMarcas = async () => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: '/marcas'
        })
        setMarcas(data)
      } catch (e) {
        console.error(e)
      }
    }

    getMarcas()
    getProductos()
    getClases()
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
