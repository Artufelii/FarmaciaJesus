import axios from './axios'

export const getInfo = async (url, id) => {

  let fetchUrl 

  if (id !== '') {
    fetchUrl =`/${url}/${id}`
  } else {
    fetchUrl =`/${url}`
  }

  try {
    const response = await fetch(`http://127.0.0.1:5000/${fetchUrl}`)
    const data = await response.json()
    return data

  } catch (e) {
    console.error(e)
  }

}

export const sendInfo = async (body) => {
  const { data } = await axios({
    method: 'POST',
    url: '/api/cliente',
    headers: {
      'Content-type': 'multipart/form-data'
    },
    data: body
  })

  return data
}
