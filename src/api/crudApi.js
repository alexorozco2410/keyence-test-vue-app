import axios from 'axios'

const crudApi = axios.create({
    baseURL: 'https://keyence-test-restserver-production.up.railway.app/api'
})

export default crudApi