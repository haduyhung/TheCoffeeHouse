import axios from "axios";
import { baseURL } from "./config";

const instance = axios.create({
  baseURL: baseURL, //'https://forever21.hungvu.net/'
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const getProductList = () => instance.get('get-products')