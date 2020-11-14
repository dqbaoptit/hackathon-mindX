import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Avatar, Input, Tooltip, Row, Col } from 'antd';
import { db } from '../../configs/Firebase';
import Camera from '../../public/Icons/camera.svg';
import { SendOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import './Messages.scss';

const user1 = {
  id: '1234567',
};
const user2 = {
  id: '123456789',
};

const Messages = () => {
  // eslint-disable-line
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);
  const [messages, setMessages] = useState('');
  const [chatsRealtime, setChatsRealtime] = useState('');

  useEffect(() => {
    try {
      db.ref('room-1').on('value', (snapshot) => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        setChatsRealtime(chats);
      });
    } catch (error) {
      console.log(error);
      setReadError({ readError: error.message });
    }
  }, []);

  useEffect(() => {
    let body = document.getElementsByTagName('BODY')[0];
    if (body) {
      body.style.overflowX = 'hidden';
      body.style.overflowY = 'hidden';
    }
  }, []);

  const handleMessage = (e) => {
    setMessages(event.target.value);
  };

  const handleSentMessage = async () => {
    try {
      event.preventDefault();
      let container = document.querySelector('.messages-wrapper__chat-view');
      container.maxScrollTop = container.scrollHeight - container.offsetHeight;
      // if (
      //   container.maxScrollTop - container.scrollTop <=
      //   container.offsetHeight
      // ) {
      //   console.log(container.scrollHeight);
      //   container.scrollTop = container.scrollHeight;
      //   console.log('I just scrolled to the bottom!');
      // } else {
      //   console.log(
      //     "I won't scroll: you're way too far from the bottom!\n" +
      //       'You should maybe alert the user that he received a new message.\n' +
      //       'If he wants to scroll at this point, he must do it manually.'
      //   );
      // }
      if (messages.length) {
        container.scrollTop = container.scrollHeight;
        await db.ref('room-1').push({
          content: messages,
          timestamp: Date.now(),
          userId: user1.id,
          uid: uuidv4(),
        });
        setMessages('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderMesssages = () => {
    if (chatsRealtime.length) {
      return chatsRealtime.map((chat) => {
        if (chat.userId !== user1.id) {
          return (
            <div className="messages-wrapper__chat-item">
              <div className="messages-wrapper__avatar-user">
                <Avatar size="large" icon="user" />
              </div>
              <div className="messages-wrapper__chat-content">
                <div className="messages-wrapper__chat-message">
                  <span>{chat.content}</span>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div className="messages-wrapper__chat-item-me">
            <div className="messages-wrapper__chat-content-me">
              <div className="messages-wrapper__chat-message-me">
                {chat.content}
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="messages-wrapper">
      <Row>
        <Col span={16} className="messages-wrapper__messages">
          <div className="messages-wrapper__header">
            <div className="messages-wrapper__user-wraper">
              <div className="messages-wrapper__avatar">
                <Avatar size={54} icon="user" />
              </div>
              <div className="messages-wrapper__title-wrapper">
                <h5 className="messages-wrapper__title">
                  Sed ut perspiciatis unde omnis
                </h5>
                <p className="messages-wrapper__status">Đang Online</p>
              </div>
            </div>
            <ul className="messages-wrapper__tool">
              <li className="messages-wrapper__camera-wrapper">
                <a className="messages-wrapper__camera">
                  <div
                    aria-label="Start a group video chat"
                    title="Start a group video chat"
                    data-testid="startVideoCall"
                    className="messages-wrapper__call-video"
                  >
                    <VideoCameraOutlined className="messages-wrapper__video-camera" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="messages-wrapper__chat-view">{renderMesssages()}</div>

          <div className="messages-wrapper__chat-input">
            <div>
              <img
                src="https://i.imgur.com/qgZgl7C.png"
                className="messages-wrapper__icon-chat"
                alt="error"
              />
            </div>
            <div>
              <img
                src="https://i.imgur.com/ZQuSZ0u.png"
                className="messages-wrapper__icon-chat"
                alt="error"
              />
            </div>

            <div>
              <img
                src="https://i.imgur.com/sPtpnig.png"
                className="messages-wrapper__icon-chat"
                alt="error"
              />
            </div>
            <Input
              className="messages-wrapper__input"
              placeholder="Nhập tin nhắn....."
              alt="error"
              value={messages}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && messages.length) {
                  handleSentMessage();
                }
              }}
              onChange={handleMessage}
              suffix={
                <Tooltip title="Enter">
                  <div onClick={handleSentMessage}>
                    <SendOutlined className="messages-wrapper__sent" />
                    {/* <img
                      // src="https://i.imgur.com/cwDmVI0.png"
                      className="messages-wrapper__icon-chat"
                      alt="error"
                    /> */}
                  </div>
                </Tooltip>
              }
            />
          </div>
        </Col>
        <Col span={8} className="messages-wrapper__info">
          <div className="messages-wrapper__info-user">
            {/* <Avatar
              className="messages-wrapper__avatar-info-user"
              size={150}
              icon="user"
            /> */}
            {/* <div className="messages-wrapper__title-user">
              <p> Sed ut perspiciatis unde omnis </p>
            </div>
            <div className="messages-wrapper__status-user">
              <p> Đang Online </p>
            </div>
            <div className="messages-wrapper__distance">
              <img
                width={20}
                src="https://i.imgur.com/gcZXPJ0.png"
                alt="error"
              />
              <p> Cách xa 120 km </p>
            </div> */}
            <div className="messages-wrapper__content">
              {/* <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.
              </p> */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

Messages.propTypes = {};

export default Messages;
