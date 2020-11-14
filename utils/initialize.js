import Router from 'next/router';
import { getCookie } from '../utils/cookie';
import { localStorageConstant } from '../redux/constants';

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default async function (ctx) {
  if (ctx.req) {
    if (ctx.req.headers.cookie) {
      const token = ctx.req.headers.cookie
        .split(';')
        .find((c) =>
          c.trim().startsWith(`${localStorageConstant.ACCESS_TOKEN}=`)
        )
        .split('=')[1];

      if (
        token &&
        (ctx.pathname === '/login' ||
          ctx.pathname === '/signup' ||
          ctx.pathname === '/verify-account')
      ) {
        ctx.res.writeHead(302, { location: '/' });
        ctx.res.end();
      }
    }
  } else {
    const token = await getCookie(localStorageConstant.ACCESS_TOKEN, ctx);
    if (token && (ctx.pathname === '/signup' || ctx.pathname === '/login')) {
      setTimeout(function () {
        Router.push('/');
      }, 0);
    }
  }
}
