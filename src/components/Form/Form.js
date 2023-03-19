import React, { useState, useEffect } from "react"
import { reduxForm, Field, reset } from 'redux-form'

import FileInput from '../FileInput/FileInput'
import './Form.css'

const Form = ({ handleSubmit, data, succeeded, processing, dispatch, form, files, setFiles }) => {

  const [ capturador, setCapturador ] = useState('')

  const handleSelect = ({ target }) => 
    (target.value !== '') ? setCapturador(target.value) : setCapturador('')

  useEffect(() => {
    if (succeeded) {
      dispatch(reset(form))
    }
  })

  return(
    <form id="contacto" onSubmit={ handleSubmit } className="form">
      <h3>{ data !== '' ? data : '¡Cotiza tu receta en linea!' }</h3>
      <h5>Nombre:</h5>
      <Field component='input' name="name" type="text" />
      <h5>Correo:</h5>
      <Field component='input' name="mail" type="mail" />
      <h5>Teléfono:</h5>
      <Field component='input' name="phone" type="text" />
      <div className="form__selected">
        <input id="texto" type="radio" name="receta" value="texto" onChange={ handleSelect } /><label htmlFor="texto">Capturar Receta</label>
        <input id="imagen" type="radio" name="receta" value="imagen" onChange={ handleSelect }/><label htmlFor="imagen">Subir imagen</label>
      </div>
      {(capturador === 'texto') && 
        <div className="form__text">
          <h5>Captura tu receta:</h5>
          <Field component='textarea' name="message" />
        </div>}
      {(capturador === 'imagen') && 
        <div className="form__files">
          <span className="fake-btn">Seleccionar</span>
          <span className="file-msg">
            {files.length === 1 ? files[0].name : 
              files.length > 1 ? 
              files.length + ' Archivos Seleccionados' : 
              'o arrastrar máximo 2 archivos aquí'
            }
          </span>
          <Field 
            setFiles={ setFiles }
            component={FileInput}
            name="files"
            type="file" 
          />
        </div>}
      <button className="submit" type="submit" disabled={ processing ? true : false }>
        { processing ? '...Enviando' : 'Enviar' }
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'contact', 
})(Form) 
