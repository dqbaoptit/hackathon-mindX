import './index.scss';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AccountIcon from '@material-ui/icons/AccountCircleOutlined';
import { IconButton } from '@material-ui/core';
import IconProfile from './IconProfile';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="navigation">
        <div className="navigation__logo">
          <img src="/logo.png" className="img-responsive" alt="" />
        </div>
        <div className="navigation__right">
          <div className="navigation__right__notification">
            <IconButton>
              <NotificationsIcon style={{ fontSize: '2rem' }} />
            </IconButton>
          </div>
          <div className="navigation__right__profile">
            <IconProfile />
          </div>
        </div>
      </div>
      <div className="children">{children}</div>
    </div>
  );
}
