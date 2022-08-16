import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL

export function getCart(email) {
  return axios.get(`${apiUrl}/cart/${email}`)
}