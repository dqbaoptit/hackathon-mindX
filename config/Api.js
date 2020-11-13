import axios from 'axios';
import { localStorageConstant } from '../redux/constants/index';
import { getCookie, setCookie, removeCookie } from '../utils/cookie';

export const HOST = 'https://itmc.herokuapp.com/api/v1';
const Api = axios.create({
  baseURL: HOST,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: false,
});

Api.interceptors.request.use(async (config) => {
  const accessToken = await getCookie(localStorageConstant.ACCESS_TOKEN);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default Api;
