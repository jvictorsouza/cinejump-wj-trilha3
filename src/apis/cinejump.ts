import axios from 'axios'

export enum FavoritesTypeID {
  movie,
  tv,
  person,
  review,
  company,
  collection,
  keyword
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

const favorites = async () => {
  const returnApi = await api
    .get(`/favorites`)
    .then((response) => response)
    .then((data) => JSON.parse(data.request.response))
    .catch((error) => console.log(error))
  return returnApi
}

const addToFavorites = async (body: { entity_id: number; type_id: FavoritesTypeID }) => {
  const returnApi = await api
    .post(`/favorites`, body)
    .then((response) => response)
    .then((data) => JSON.parse(data.request.response))
    .catch((error) => console.log(error))
  return returnApi
}

export { api, login, register, favorites, addToFavorites }
