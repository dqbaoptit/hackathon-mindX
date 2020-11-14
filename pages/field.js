import dynamic from 'next/dynamic';
import '../styles/Field.module.scss';
import { RoadmapCard } from '../components';
import { FieldCard } from '../components';
import { getCookie } from '../utils/cookie';
import { localStorageConstant } from '../redux/constants';
import { isAuthenticated } from '../utils/middleware';
import { useState, useEffect } from 'react';
import { ListRoadmaps } from '../redux/actions/roadmap';

const temp = {
  title: 'Lộ trình Frontend',
  author: 'Dương Quốc Bảo',
  descAuthor: 'Software Engineer',
  img: '/vercel.svg',
  description:
    'Lorem ipsum dolor sit.  magni corporis dignissimos sed atque reiciendis dolorum laboriosam sint consequuntur, architecto, nulla voluptate, harum ducimus. Doloribus.',
};

function FieldContainer() {
  const [listRoadmaps, setListRoadmaps] = useState([]);
  useEffect(() => {
    async function listRoadmaps() {
      const { data } = await ListRoadmaps();
      setListRoadmaps([...data]);
    }
    listRoadmaps();
  }, []);
  return (
    <div style={{ padding: '2rem 0rem' }}>
      <FieldCard />
      <hr />
      <div className="field">
        {listRoadmaps.map((item) => (
          <RoadmapCard
            img={temp.img}
            title={item.name}
            descAuthor={temp.descAuthor}
            description={item.overview}
            author={item.owner}
            id={item._id}
            isRegistered={false}
          />
        ))}
      </div>
    </div>
  );
}

FieldContainer.getInitialProps = async (ctx) => {
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
export default FieldContainer;
