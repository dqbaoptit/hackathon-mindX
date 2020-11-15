import { useEffect, useState } from 'react';
import './index.scss';
import Api from '../../configs/Api';

export default function Profile({
  img = '/vercel.svg',
  name = 'Contributor',
  education = '',
  timelineEducation = '',
  experience = 'Software Engineer ',
  idOwner,
}) {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function getProfile() {
      try {
        const { data } = await Api.get(`/user/profile/${idOwner}`);
        setProfile(data.profile);
      } catch (err) {
        console.log(err);
      }
    }
    getProfile();
  }, []);

  return (
    <div className="ctb-profile">
      <img src={img} alt="" className="img-responsive ctb-profile__img" />
      <div className="ctb-profile__name">{name}</div>
      <div className="ctb-profile__education">
        {education}
        {` `}
        <span className="ctb-profile__education__timeline">
          {timelineEducation}
        </span>
      </div>

      <div className="ctb-profile__experience">{experience}</div>
    </div>
  );
}
