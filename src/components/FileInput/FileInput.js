import React from 'react'

const FileInput = (props) => {
  const { input: { onChange }, setFiles } = props

  const onInputChange = (e) => {
    const files = [...e.target.files]
    onChange(files)
    setFiles(e.target.files)
  }

  return (
    <input 
      className="file-input" 
      type="file"
      onChange={ onInputChange }
      accept="image/*"
      multiple
    />
  )
}

export default FileInput
