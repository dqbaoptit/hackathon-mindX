import Head from 'next/head';
import '../styles/Home.module.scss';
import Room from '../containers/Room';
import { FieldCard } from '../components';
import { getCookie } from '../utils/cookie';
import { localStorageConstant } from '../redux/constants';
import { isAuthenticated } from '../utils/middleware';

function Home() {
  return (
    <div className="container">
      <Head>
        <title>My NextJS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="main"> */}
      <Room />
      {/* </main> */}
      {/* <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer> */}
    </div>
  );
}
Home.getInitialProps = async (ctx) => {
  const token = getCookie(localStorageConstant.ACCESS_TOKEN, ctx);
  if (token) {
    try {
      const { data } = await isAuthenticated(ctx, token);
      return { user: data };
    } catch (err) {
      ctx.res.writeHead(302, { Location: '/login' });
      ctx.res.end();
      console.log(err);
    }
  } else {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
  }
  return {};
};
export default Home;
