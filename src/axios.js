// npm i axios
import axios from "axios"
const instance = axios.create({
    baseURL: "http://localhost:5001/e-clone-d128f/us-central1/api"   //api url, cloud function

});

export default instance;