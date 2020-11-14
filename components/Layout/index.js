import './index.scss';

import IconProfile from './IconProfile';
import { useRouter } from 'next/router';
export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="layout">
      <div className="navigation">
        <div
          className="navigation__logo"
          style={{ cursor: 'pointer' }}
          onClick={() => router.push('/')}
        >
          <img src="/logo.png" className="img-responsive" alt="" />
        </div>
        <div className="navigation__right">
          <div className="navigation__right__profile">
            <IconProfile />
          </div>
        </div>
      </div>
      <div className="children">{children}</div>
    </div>
  );
}
