import React from 'react';
import RoadmapCard from '../RoadmapCard';
import PersonIcon from '@material-ui/icons/Person';
import Carousel from 'react-material-ui-carousel';
import './index.scss';

function ScreenProfile({ firstName, lastName, registeredRoadmap }) {
  const temp = {
    title: 'Lộ trình Frontend',
    author: 'Dương Quốc Bảo',
    descAuthor: 'Software Engineer',
    img: '/vercel.svg',
    description:
      'Lorem ipsum dolor sit.  magni corporis dignissimos sed atque reiciendis dolorum laboriosam sint consequuntur, architecto, nulla voluptate, harum ducimus. Doloribus.',
  };
  return (
    <div className="profile">
      <div className="profile__img">
        <PersonIcon
          style={{ margin: 'auto', fontSize: '5rem' }}
          fontSize="large"
        />
      </div>
      <div className="profile__info">
        <div className="profile__info__name">
          <h1>{firstName + ' ' + lastName}</h1>
        </div>
        <div>Các Roadmap của bạn </div>
        <div className="profile__info__group">
          <Carousel animation="slide" autoPlay={false} navButtonsAlwaysVisible>
            {registeredRoadmap.map((item) => (
              <RoadmapCard
                isRegistered={true}
                img={temp.img}
                title={item.name}
                descAuthor={temp.descAuthor}
                description={item.overview}
                author={item.owner}
                id={item._id}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ScreenProfile;
