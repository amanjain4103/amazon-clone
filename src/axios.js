import axios from "axios"
const instance = axios.create({
    baseURL: "https://amazone-clone-node-server.herokuapp.com/"   //api url, cloud function
    
});

export default instance;
// baseURL: "http://localhost:5001/e-clone-d128f/us-central1/api"   //api url, cloud function