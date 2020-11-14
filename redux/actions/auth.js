import Api, { HOST } from '../../configs/Api';
import { localStorageConstant } from '../constants';
import Axios from 'axios';
import { setCookie } from '../../utils/cookie';
import Router from 'next/router';

export const Login = async (params) => {
  try {
    const { data } = await Api.post('/auth/login', params);
    return data;
  } catch (err) {
    throw err;
  }
};

//
export const authenticate = ({ email, password }, type) => {
  if (type !== 'auth/login' && type !== 'signup') {
    throw new Error('Wrong API call!');
  }
  return (dispatch) => {
    Axios.post(`${HOST}/${type}`, { email, password })
      .then((response) => {
        setCookie(
          localStorageConstant.ACCESS_TOKEN,
          response.data.data.accessToken
        );
        setCookie(
          localStorageConstant.REFRESH_TOKEN,
          response.data.data.refreshToken
        );
        Router.push('/');
        dispatch({
          type: authConstant.AUTHENTICATION,
          payload: response.data.data.accessToken,
        });
      })

      .catch((err) => {
        throw new Error(err);
      });
  };
};

// gets the token from the cookie and saves it in the store
export const reauthenticate = (token) => {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATE, payload: token });
  };
};

// removing the token
export const deauthenticate = () => {
  return (dispatch) => {
    removeCookie('token');
    Router.push('/');
    dispatch({ type: DEAUTHENTICATE });
  };
};
//
export const Register = async (params) => {
  try {
    const { data } = await Api.post('auth/signup', params);
    return data;
  } catch (err) {
    throw err;
  }
};

export const ForgotPassword = async (email) => {
  try {
    const { data } = await Api.post(authConstant.FORGOT_PASSWORD, email);
    return data;
  } catch (err) {
    throw err;
  }
};
export const VerifyEmail = async (params) => {
  try {
    const { data } = await Api.post(authConstant.VERIFY_EMAIL, params);
    return data;
  } catch (err) {
    throw err;
  }
};
export const ChangePassword = async (params) => {
  try {
    const { data } = await Api.put(authConstant.CHANGE_PASSWORD, params);
    return data;
  } catch (err) {
    throw err;
  }
};
export const handleAfterLogin = (data) => {
  setCookie(localStorageConstant.ACCESS_TOKEN, data.accessToken);
  Router.push('/');
};
