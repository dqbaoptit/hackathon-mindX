import Router from 'next/router';
import { getCookie } from '../utils/cookie';
import { localStorageConstant } from '../redux/constants';

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default async function Initialize(ctx) {
  const token = await getCookie(localStorageConstant.ACCESS_TOKEN, ctx);
  if (token && (ctx.pathname === '/signup' || ctx.pathname === '/login')) {
    setTimeout(function () {
      Router.push('/');
    }, 0);
  }
}
