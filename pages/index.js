import Head from 'next/head';
import '../styles/Home.module.scss';
import { FieldCard } from '../components';
import { getCookie } from '../utils/cookie';
import { localStorageConstant } from '../redux/constants';
import { isAuthenticated } from '../utils/middleware';
import React, { useEffect, useState } from 'react';
import { ScreenProfile } from '../components';
import { GetProfile } from '../redux/actions/profile';
import { Grid } from '@material-ui/core';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getProfile() {
      const { data } = await GetProfile();
      setUser(data);
    }
    getProfile();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <ScreenProfile firstName={user.firstName} lastName={user.lastName} />
    </div>
  );
}

const items = [
  {
    title: 'Digital Marketing',
    slug: 'marketing',
    desc:
      'Thời đại 4.0 đi cùng các lĩnh vực kinh tế, thúc đẩy sự phát triển của xã hội.',
  },
  {
    title: 'An toàn thông tin',
    slug: 'sercurity',

    desc:
      'Thời đại 4.0 đi cùng các lĩnh vực kinh tế, thúc đẩy sự phát triển của xã hội.',
  },
  {
    title: 'Công nghệ thông tin',
    slug: 'infomation',
    desc:
      'Thời đại 4.0 đi cùng các lĩnh vực kinh tế, thúc đẩy sự phát triển của xã hội.',
  },
  {
    title: 'Photography',
    slug: 'photograhy',
    desc:
      'Thời đại 4.0 đi cùng các lĩnh vực kinh tế, thúc đẩy sự phát triển của xã hội.',
  },
];
function Home({ user }) {
  return (
    <>
      <Profile />
      <hr />
      <div className="container">
        <div className="container__field">
          <Grid container>
            {items.map((item) => (
              <Grid item xs={12} sm="auto">
                <FieldCard title={item.title} desc={item.desc} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
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
