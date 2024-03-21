import axios from "axios";
import queryString from 'query-string';
import { API_URL } from '../configs/apis.config';

const httpRequest = axios.create({
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Headers": "X-Requested-With"
  },

  paramsSerializer: params => queryString.stringify(params),
});

httpRequest.interceptors.request.use(async config => {
  config.baseURL = API_URL;
  return config;
});

httpRequest.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  error => {
    console.log(error);
    throw error;
  },
);
export default httpRequest;
