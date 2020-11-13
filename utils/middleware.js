import { localStorageConstant } from '../redux/constants';
import { getCookie } from './cookie';
import { HOST } from '../configs/Api';
import axios from 'axios';

export const handleAfterRefreshToken = async (refreshToken) => {
  try {
    const { data } = await axios.get(`${HOST}/auth/refresh-token`, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
export const isAuthenticated = async (ctx, token) => {
  try {
    const data = await axios.get(`${HOST}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { user: data.data.data.user };
  } catch (error) {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await getCookie(localStorageConstant.REFRESH_TOKEN);
      return new Promise(function (resolve, reject) {
        handleAfterRefreshToken(refreshToken)
          .then((res) => {
            console.log('refreshed');
            setCookie(localStorageConstant.ACCESS_TOKEN, res.data.token);
            originalRequest.headers[
              'Authorization'
            ] = `Bearer ${res.data.token}`;
            resolve(axios(originalRequest));
          })
          .catch(() => {
            console.log("Can't refresh");
            ctx.res.writeHead(302, { location: '/login' });
            ctx.res.end();
          });
      });
    }
  }
};
