import React, { useEffect, useState } from "react"

import Carousel from '../Carousel/Corousel'
import Products from '../Products/Products'
import Form from '../Form/Form'
//import Map from '../Map/Map'
import axios from '../axios'
import './Main.css' 

const Main = ({ medicamentos, rebotica, higiene }) => {

  const [data, setData] = useState('')
  const [ succeeded, setSucceeded ] = useState(false)
  const [ processing, setProcessing ] = useState(false)

  const handleSubmit = async (payload) => {

    setProcessing(true)
    
    const { name, mail, phone, files, message } = payload

    const body = new FormData()
    if (files !== undefined) {
      body.append("files", files[0])
    }

    body.append("name", name)
    body.append("mail", mail)
    body.append("phone", phone)
    body.append("message", message)
    
    const response = await axios({
      method: 'POST',
      url: '/cliente',
      headers: {
        'Content-type': 'multipart/form-data'
      },
      data:body
      })

    setData(response.data.message)
    setSucceeded(true)
    setProcessing(false)

    setTimeout(() => {
      setSucceeded(false)
      setData('')
    }, 10000)

  }

  useEffect(() => {
    document.title = 'Farmacia Jesus | Los Mejores Medicamentos al Mejor Precio'
  })


  return(
    <main className="main">
      <div className="main__carousel">
        <Carousel 
          autoPlay={ true } 
          infiniteLoop={true} 
          interval={2000} 
        />
      </div>
      <h2>¡Las mejores ofertas!</h2>
      <div className="main__productos">
        <Products productos= { medicamentos } />
      </div>
      <h2>¡Lo mejor para tu Salud!</h2>
      <div className="main__productos">
        <Products productos= { higiene } />
      </div>
      <h2>¡Lo que siempre deberías llevar contigo!</h2>
      <div className="main__productos">
        <Products productos= { rebotica } />
      </div>
      <div className="main__contact">
        <Form 
          data={ data } 
          succeeded={ succeeded }
          processing={ processing }
          onSubmit={ handleSubmit } 
        />
      </div>
    </main>
  )
}

export default Main
