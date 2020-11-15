import Head from 'next/head';
import { useRouter } from 'next/router';

import '../styles/Home.module.scss';
import { FieldCard } from '../components';
import { getCookie } from '../utils/cookie';
import { localStorageConstant } from '../redux/constants';
import { isAuthenticated } from '../utils/middleware';
import React, { useEffect, useState } from 'react';
import { ScreenProfile } from '../components';
import { GetProfile, GetRegisteredRoadmaps } from '../redux/actions/profile';
import { Grid } from '@material-ui/core';
import Api from '../configs/Api';

function Profile() {
  const [user, setUser] = useState({});
  const [listRoadmaps, setListRoadmaps] = useState([]);

  useEffect(() => {
    async function getProfile() {
      const { data } = await GetProfile();
      setUser(data);
    }
    async function listRoadmaps() {
      const { data } = await GetRegisteredRoadmaps();
      setListRoadmaps([...data]);
    }
    listRoadmaps();
    getProfile();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <ScreenProfile
        firstName={user.firstName}
        lastName={user.lastName}
        registeredRoadmap={[...listRoadmaps]}
      />
    </div>
  );
}

function Home({ user }) {
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, []);
  const [field, setField] = useState([]);
  useEffect(() => {
    async function get() {
      try {
        const { data } = await Api.get(`/fields`);
        setField(data.data);
      } catch (err) {
        consol.log(err);
      }
    }
    get();
  }, []);
  console.log(field);
  return (
    <>
      <Profile />
      <hr />
      <div className="container">
        <div className="container__field">
          <Grid container>
            {field.map((item) => (
              <Grid item xs={12} sm="auto">
                <FieldCard
                  title={item.title}
                  desc="Thời đại 4.0 đi cùng các lĩnh vực kinh tế, thúc đẩy sự phát triển của xã hội."
                  slug={item._id}
                  img={item?.majors[0]?.picture}
                />
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
  }
  return {};
};

export default Home;
