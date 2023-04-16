import axios from 'axios';
let userinfo = JSON.parse(localStorage.getItem("user"));

const authFetch = axios.create({
  baseURL: 'https://real-pear-fly-kilt.cyclic.app',
  headers: {
    Accept: 'application/json',
    Authorization : "bearer " + userinfo?.jwtToken
  },
});

export default authFetch;