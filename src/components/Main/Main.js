import React, { useEffect, useState } from "react"

import Carousel from '../Carousel/Corousel'
import Products from '../Products/Products'
import Form from '../Form/Form'
//import Map from '../Map/Map'
import { sendInfo } from '../../helpers'
import './Main.css' 

const Main = ({ medicamentos, rebotica, higiene }) => {

  const [data, setData] = useState('')
  const [ succeeded, setSucceeded ] = useState(false)
  const [ processing, setProcessing ] = useState(false)
  const [ files, setFiles ] = useState([]);

  const handleSubmit = async (payload) => {
    setProcessing(true)
    
    let body = new FormData()
    const { name, mail, phone, files, message } = payload

    if (files !== undefined) {
      files.forEach((file, index) => {
        body.append(`file${index}`, file)
      })
    }

    body.append("name", name)
    body.append("mail", mail)
    body.append("phone", phone)
    body.append("message", message)
    
    sendInfo(body)
      .then(data => setData(data.message))

    setSucceeded(true)
    setProcessing(false)
    setFiles([])

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
          files={ files }
          setFiles={ setFiles }
        />
      </div>
    </main>
  )
}

export default Main
