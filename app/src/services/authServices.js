import axios from "axios";
const apiUrl = "http://localhost:4000/api";
const apiLogin = apiUrl + "/login";
const apiRegister = apiUrl + "/register";

export function login (credential) {
  return axios.post(apiLogin, credential);
}

export function register (credential) {
    return axios.post(apiRegister, credential);
}
