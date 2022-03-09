import axios from 'axios'
import { getToken } from 'helpers/storage'

export enum FavoritesTypeID {
  movie = 1,
  tv = 2,
  person = 3,
  review = 4,
  company = 5,
  collection = 6,
  keyword = 7
}

const api = axios.create({
  baseURL: process.env.REACT_APP_CINEJUMP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const login = async (body: { email: string; password: string }) => {
  const returnApi = await api
    .post(`/auth`, body)
    .then((response) => response)
    .then((data) => JSON.parse(data.request.response))
    .catch((error) => console.log(error))
  return returnApi
}

const register = async (body: { name: string; email: string; password: string }) => {
  const returnApi = await api
    .post(`/users`, body)
    .then((response) => response)
    .then((data) => JSON.parse(data.request.response))
    .catch((error) => console.log(error))
  return returnApi
}

const getFavorites = async () => {
  let token = getToken()
  const returnApi = await api
    .get(`/favorites`, {
      headers: { ...api.defaults.headers, Authorization: `Bearer ${token}` }
    })
    .then((response) => response)
    .then((data) => JSON.parse(data.request.response))
    .catch((error) => console.log(error))
  return returnApi
}

const updateFavorites = async (body: { entity_id: number; type_id: FavoritesTypeID }) => {
  let token = getToken()
  const returnApi = await api
    .post(`/favorites`, body, {
      headers: { ...api.defaults.headers, Authorization: `Bearer ${token}` }
    })
    .then((response) => response)
    .then((data) => JSON.parse(data.request.response))
    .catch((error) => console.log(error))
  return returnApi
}

export { api, login, register, getFavorites, updateFavorites }
