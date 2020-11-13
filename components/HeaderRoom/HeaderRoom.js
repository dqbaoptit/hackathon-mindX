import React from 'react';
import { Row, Col, Avatar, Badge, Tooltip } from 'antd';
import Link from 'next/link';
// import Logo from '../../static/logo-heacon.png'
import './HeaderRoom.scss';

// const Logo = 'https://i.imgur.com/cwDmVI0.png';

const HeaderMessenger = () => {
  return (
    <div className="header">
      <Row>
        <Col span={12}>
          <div className="header-messenger__left">
            <div className="header-messenger__logo">
              <img width="46" height="49" alt="Logo" />
            </div>
            <div className="header-messenger__name">Hackathon</div>
            <div className="header-messenger__category-menu">
              <ul className="header-messenger__list-category-menu">
                <li>
                  <Link href="/">Trang Chủ</Link>
                </li>
                <li>
                  <Link href="/">Matching</Link>
                </li>
                <li>
                  <Link href="/">Về Chúng Tôi</Link>
                </li>
                <li>
                  <Link href="/">Liên Hệ</Link>
                </li>
                <li>
                  <Link href="/">Hỗ Trợ</Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="header-messenger__right">
            <div className="header-messenger__user">
              <Avatar
                size={40}
                icon="user"
                className="header-messenger__avatar-user"
              />
              <p className="header-messenger__name-user"> Phan Đình Huy </p>
            </div>

            <div className="header-messenger__tool">
              <Tooltip title="Thông báo">
                <div className="header-messenger__notification">
                  <Badge count={1}>
                    <img
                      width={25}
                      className="header-messenger__icon"
                      alt="error"
                      src="https://i.imgur.com/ziQ4stu.png"
                    />
                  </Badge>
                </div>
              </Tooltip>

              <Tooltip title="Cài đặt">
                <div className="header-messenger__setting">
                  <img
                    width={25}
                    className="header-messenger__icon"
                    alt="error"
                    src="https://i.imgur.com/eYZyhYK.png"
                  />
                </div>
              </Tooltip>
              <Tooltip title="Đăng xuất">
                <div className="header-messenger__log-out">
                  <img
                    width={25}
                    className="header-messenger__icon"
                    alt="error"
                    src="https://i.imgur.com/ZQkzMHn.png"
                  />
                </div>
              </Tooltip>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderMessenger;
