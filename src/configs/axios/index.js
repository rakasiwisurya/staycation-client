import axios from "axios";
import errorResponseHandler from "./errorResponseHandler";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
});

API.interceptors.response.use((response) => response, errorResponseHandler);

export default API;
