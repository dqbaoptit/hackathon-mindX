import './index.scss';
export default function RoadmapCard() {
  return (
    <div className="roadmap-card">
      <div className="roadmap-card__left">
        <div className="roadmap-card__left__img"></div>
        <div className="roadmap-card__left__desc"></div>
      </div>
      <div className="roadmap-card__right">
        <div className="roadmap-card__right__title">Hello world</div>
        <div className="roadmap-card__right__desc">Description</div>
      </div>
      <div className="roadmap-card__bottom">{/* rating here */}</div>
    </div>
  );
}
