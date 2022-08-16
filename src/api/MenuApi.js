import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL

export function getMenu() {
  return axios.get(`${apiUrl}/menu`)
}