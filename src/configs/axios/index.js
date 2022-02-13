import axios from "axios";
import errorResponseHandler from "./errorResponseHandler";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}`,
});

API.interceptors.response.use((response) => response, errorResponseHandler);

export default API;
