import axios from "axios";

export default axios.create({
    baseURL: "http://blog-api.test/api"
});