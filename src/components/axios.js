import axios from 'axios'

let url 

if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:5000'
} else {
  url = 'https://farmaciajesus-api.herokuapp.com'
}

const instance = axios.create({
  baseURL: url
})

export default instance
