import '../styles/Home.module.scss';
import { RoadmapCard } from '../components';
export default function Home() {
  return (
    <div className="container">
      {[1, 2, 3].map((item) => (
        <RoadmapCard />
      ))}
    </div>
  );
}
