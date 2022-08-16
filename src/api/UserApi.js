import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL

export const handleLoginApi = (email, password) => {
    return axios.post(`${apiUrl}/login`, {
      email: email,
      password: password
    })
}

export function handleRegister(user) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiUrl}/register`, user)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        } else {
          reject(res.response)
        }
      })
      .catch(reject)
  })
}

export function handleEditUserProfile(user) {
  return axios.put(`${apiUrl}/edit`, user);
}
