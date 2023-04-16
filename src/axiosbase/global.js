import axios from 'axios';

let userinfo = JSON.parse(localStorage.getItem("user"));
console.log(userinfo.jwtToken);
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = "bearer " + userinfo?.jwtToken