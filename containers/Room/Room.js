import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/HeaderRoom';

import Conversations from '../../components/Conversation';
import Messegas from '../../components/Messages';
import './Room.scss';
import { Row, Col } from 'antd';

class Messenger extends Component {
  // eslint-disable-line
  render() {
    return (
      <div className="messenger-wrapper">
        <Header />
        <Row className="messenger-wrapper__row-messenger">
          <Col span={6} className="messenger-wrapper__bg-conversations">
            <Conversations />
          </Col>
          <Col span={18} className="messenger-wrapper__bg-messages">
            <Messegas />
          </Col>
        </Row>
      </div>
    );
  }
}

Messenger.propTypes = {
  // eslint-disable-line
};
export default Messenger;
