import './index.scss';

export default function Profile({
  img = '/vercel.svg',
  name = 'Contributor',
  education = '',
  timelineEducation = '',
  experience = 'Software Engineer ',
}) {
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
