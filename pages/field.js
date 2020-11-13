import dynamic from 'next/dynamic';
import '../styles/Field.module.scss';
import { RoadmapCard } from '../components';

const temp = {
  title: 'Lộ trình Frontend',
  author: 'Dương Quốc Bảo',
  descAuthor: 'Software Engineer',
  img: '/vercel.svg',
  description:
    'Lorem ipsum dolor sit.  magni corporis dignissimos sed atque reiciendis dolorum laboriosam sint consequuntur, architecto, nulla voluptate, harum ducimus. Doloribus.',
};
export default function FieldContainer() {
  return (
    <div className="field">
      {[1, 2, 3, 1, 1, 1].map((item) => (
        <RoadmapCard
          img={temp.img}
          title={temp.title}
          descAuthor={temp.descAuthor}
          description={temp.description}
          author={temp.author}
        />
      ))}
    </div>
  );
}
