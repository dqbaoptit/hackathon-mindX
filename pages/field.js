import { useRouter } from 'next/router';
import '../styles/Field.module.scss';
import { RoadmapCard } from '../components';
import { FieldCard } from '../components';
import { getCookie } from '../utils/cookie';
import { localStorageConstant } from '../redux/constants';
import { isAuthenticated } from '../utils/middleware';
import { useState, useEffect } from 'react';
import { ListRoadmaps } from '../redux/actions/roadmap';
import Api from '../configs/Api';
import { motion } from 'framer-motion';
const temp = {
  title: 'Lộ trình Frontend',
  author: 'Dương Quốc Bảo',
  descAuthor: 'Software Engineer',
  img: '/vercel.svg',
  description:
    'Lorem ipsum dolor sit.  magni corporis dignissimos sed atque reiciendis dolorum laboriosam sint consequuntur, architecto, nulla voluptate, harum ducimus. Doloribus.',
};
function FieldContainer() {
  const router = useRouter();
  const { slug } = router.query;
  const [listRoadmaps, setListRoadmaps] = useState([]);
  const [field, setField] = useState({});
  const [listAll, setListAll] = useState(false);
  useEffect(() => {
    async function getField() {
      try {
        const { data } = await Api.get(`/fields/${slug}`);
        setField(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    async function listRoadmaps() {
      const { data } = await ListRoadmaps(field.title.toLocaleLowerCase());
      setListRoadmaps([...data]);
    }
    async function listRoadmapsAll() {
      const { data } = await ListRoadmaps();
      setListRoadmaps([...data]);
    }

    if (listAll) {
      listRoadmapsAll();
    } else if (field?.title) listRoadmaps();

    getField();
  }, [listAll]);

  return (
    <div style={{ padding: '2rem 0rem' }}>
      <div style={{ position: 'relative' }}>
        <FieldCard
          title={field && field.title}
          desc="Thời đại 4.0 đi cùng các lĩnh vực kinh tế, thúc đẩy sự phát triển của xã hội."
          img={field && field.majors && field?.majors[0].picture}
        />
        <div
          style={{ position: 'absolute', right: 0, bottom: 0 }}
          className="btn"
          onClick={() => setListAll((prev) => !prev)}
        >
          {`Xem ${!listAll ? 'hết các' : `${field.title}`} lĩnh vực`}
        </div>
      </div>
      <hr />
      <div className="field">
        {listRoadmaps.length === 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '30vh',
              width: '100vw',
              fontWeight: 'bold',
            }}
          >
            No data ... Đang chờ contributor đóng góp Roadmap cho lĩnh vực này
          </div>
        )}
        {listRoadmaps.map((item) => (
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <RoadmapCard
              img={temp.img}
              title={item.name}
              descAuthor={temp.descAuthor}
              description={item.overview}
              author={item.owner}
              id={item._id}
              isRegistered={false}
            />
          </motion.div>
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
