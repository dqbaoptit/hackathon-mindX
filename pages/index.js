import Head from 'next/head';
import '../styles/Home.module.scss';
import { FieldCard } from '../components';
import { getCookie } from '../utils/cookie';
import { localStorageConstant } from '../redux/constants';
import { isAuthenticated } from '../utils/middleware';

function Home({ user }) {
  return (
    <div className="container">
      <Head>
        <title>My NextJS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container__field">
        {[1, 2, 3, 4, 5].map((item) => (
          <FieldCard />
        ))}
      </div>
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
    }
  } else {
    ctx.res.writeHead(302, { location: '/login' });
    ctx.res.end();
  }
  return {};
};


export default Home;
