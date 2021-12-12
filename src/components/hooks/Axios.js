import axios from "axios";

const Axios = axios.create({
   baseURL: process.env.REACT_APP_AXIOS === 'development' ? 'http://localhost:3000/' : "/",
   timeout: 50000
});

export default Axios;
