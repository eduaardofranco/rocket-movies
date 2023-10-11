import axios from 'axios'

export const api = axios.create({
    // baseURL: 'https://rocketmovies-api-pyl7.onrender.com'
    baseURL: process.env.REACT_APP_API_URL || 'https://rocketmovies-api-pyl7.onrender.com',
    // baseURL: 'http://localhost:3333',
    withCredentials: true
})