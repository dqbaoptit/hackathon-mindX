import './index.scss';
export default function Profile({
  img = '/vercel.svg',
  name = 'Dương Quốc Bảo',
  education = 'Post & Telecomunication Institute of Technology',
  timelineEducation = '2018 - 2023',
  experience = 'Software Engineer at Tekgo',
}) {
  return (
    <div className="ctb-profile">
      <img src={img} alt="" className="img-responsive ctb-profile__img" />
      <div className="ctb-profile__name">{name}</div>
      <div className="ctb-profile__education">{education}</div>
      <div className="ctb-profile__education__timeline">
        {timelineEducation}
      </div>
      <div className="ctb-profile__experience">{experience}</div>
    </div>
  );
}
