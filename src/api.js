import axios from "axios";
const api = axios.create({
    baseURL: 'https://66d62af9f5859a7042688b2c.mockapi.io/music-box'
});

export default api;