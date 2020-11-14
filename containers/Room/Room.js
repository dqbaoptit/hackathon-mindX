import React, { useState, useLayoutEffect, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/HeaderRoom';
import { GetRegisteredRoadmaps } from '../../redux/actions/profile';
import Conversations from '../../components/Conversation';
import Messegas from '../../components/Messages';
import Get from 'lodash/get';
import './Room.scss';
import { Row, Col } from 'antd';

const Room = (props) => {
  // eslint-disable-line
  const { user } = props;
  const [userRoadMaps, setUserRoadMaps] = useState([]);
  const [client, setClient] = useState(null);
  const [userTokenVideoCall, setUserTokenVideoCall] = useState(null);
  useEffect(() => {
    console.log(window);
  });
  return (
    <div className="messenger-wrapper">
      {/* <Header /> */}
      <Row className="messenger-wrapper__row-messenger">
        <Col span={5} className="messenger-wrapper__bg-conversations">
          <Conversations user={user} />
        </Col>
        <Col span={19} className="messenger-wrapper__bg-messages">
          <Messegas user={user} />
        </Col>
      </Row>
    </div>
  );
};

Room.propTypes = {
  // eslint-disable-line
};
export default Room;
