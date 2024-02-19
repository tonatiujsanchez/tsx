import axios from 'axios'

const tsxApi = axios.create({
    baseURL: '/api'
})

export {
    tsxApi
}