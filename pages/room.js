import Head from 'next/head';
import '../styles/Home.module.scss';
import Room from '../containers/Room';
import { FieldCard } from '../components';
import { getCookie } from '../utils/cookie';
import { localStorageConstant } from '../redux/constants';
import { isAuthenticated, GetRegisteredRoadmaps } from '../utils/middleware';

import Get from 'lodash/get';

function Home(props) {
  return (
    <>
      <Head>
        <title>My NextJS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Room {...props} />
    </>
  );
}
Home.getInitialProps = async (ctx) => {
  const token = getCookie(localStorageConstant.ACCESS_TOKEN, ctx);
  const roomId = Get(ctx, ['query', 'roomId']);
  if (token) {
    try {
      const { data } = await isAuthenticated(ctx, token);
      // const roadMaps = await GetRegisteredRoadmaps(ctx, token);
      // if (!Get(roadMaps, [data]).length) {
      //   ctx.res.writeHead(302, { Location: '/' });
      //   ctx.res.end();
      // }
      return { user: data, roomId };
    } catch (err) {
      console.log(err);
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
