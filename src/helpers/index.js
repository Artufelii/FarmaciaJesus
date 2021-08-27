import axios from './axios'

export const getInfo = async (url, id) => {

  let fetchUrl 

  if (id !== '') {
    fetchUrl =`/${url}/${id}`
  } else {
    fetchUrl =`/${url}`
  }

  try {
    const { data } = await axios({
      method: 'GET',
      url: fetchUrl,
    })
    return data

  } catch (e) {
    console.error(e)
  }

}

export const sendInfo = async (body) => {
  const { data } = await axios({
    method: 'POST',
    url: '/cliente',
    headers: {
      'Content-type': 'multipart/form-data'
    },
    data:body
  })

  return data
}
