import axios from 'axios'

const crudApi = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export default crudApi