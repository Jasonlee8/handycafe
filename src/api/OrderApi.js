import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL

export function getOrderItem(coffeeId) {
  return axios.get(`${apiUrl}/order/${coffeeId}`);
}

export function submitOrder(id, order) {
  return axios.post(`${apiUrl}/order/${id}`, order);
}

export function orderIdGenerater() {
  return axios.get(`${apiUrl}/maxorderid`);
}

export function pickUpOrder(order) {
  return axios.put(`${apiUrl}/pickuporder`, order);
}
  