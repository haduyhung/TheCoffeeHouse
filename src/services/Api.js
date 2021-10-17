import axios from "axios";
import { baseURL } from "./config";

// const instance = axios.create({
//   baseURL: baseURL, //'https://forever21.hungvu.net/'
//   timeout: 60000,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// });

// export const getProductList = () => instance.get('get-products')

const instance = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const getProductList = () => instance.get('v2/menu') //https://api.thecoffeehouse.com/api/v2/menu

export const cfLogin = (params) => instance.post('verify_mobile', params) //https://api.thecoffeehouse.com/api/verify_mobile

export const getDiscoverProducts = (params) => instance.post('v5/menu', params)

//https://api.thecoffeehouse.com/api/v5/menu