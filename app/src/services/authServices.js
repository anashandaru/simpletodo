import axios from "axios";
const apiUrl = "http://localhost:4000/api";
const apiLogin = apiUrl + "/login";
const apiRegister = apiUrl + "/register";

module.exports = {
  login: (credential) => {
    return axios.post(apiLogin, credential);
  },
  register: (credential) => {
      return axios.post(apiRegister, credential);
  },
};
