import './index.scss';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AccountIcon from '@material-ui/icons/AccountCircleOutlined';
export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="navigation">
        <div className="navigation__logo">
          <img src="/vercel.svg" className="img-responsive" alt="" />
        </div>
        <div className="navigation__right">
          <div className="navigation__right__notification">
            <NotificationsIcon style={{ fontSize: '2rem' }} />
          </div>
          <div className="navigation__right__profile">
            <AccountIcon style={{ fontSize: '2rem' }} />
          </div>
        </div>
      </div>
      <div className="children">{children}</div>
    </div>
  );
}
