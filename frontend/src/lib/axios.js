import axios from "axios";
const api = axios.create({
   // baseURL: "http://localhost:3000"
    baseURL:"https://weather-forecast-management-system-akaq.onrender.com"
});
export default api;
