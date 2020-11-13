import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Input, Tooltip, Row, Col } from 'antd';
import './Messages.scss';

const Messages = () => {
  // eslint-disable-line
  return (
    <div className="messages-wrapper">
      <Row>
        <Col span={16} className="messages-wrapper__messages">
          <div className="messages-wrapper__header">
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
          <div className="messages-wrapper__chat-view">
            <div className="messages-wrapper__chat-item">
              <div className="messages-wrapper__avatar-user">
                <Avatar size="large" icon="user" />
              </div>
              <div className="messages-wrapper__chat-content">
                <div className="messages-wrapper__chat-message">
                  <span>Con Cac Đkm Mày</span>
                </div>
                <div className="messages-wrapper__chat-message">
                  Con Cac Đkm Mày
                </div>
                <div className="messages-wrapper__chat-message">
                  Con Cac Đkm Mày con chó , Con Cac Đkm Mày con chó
                </div>
              </div>
            </div>

            <div className="messages-wrapper__chat-item-me">
              <div className="messages-wrapper__chat-content-me">
                <div className="messages-wrapper__chat-message-me">
                  Con Cac Đkm Mày
                </div>
                <div className="messages-wrapper__chat-message-me">
                  Con Cac Đkm Mày
                </div>
                <div className="messages-wrapper__chat-message-me">
                  Con Cac Đkm Mày con chó , Con Cac Đkm Mày con chó
                </div>
              </div>
            </div>

            <div className="messages-wrapper__chat-item">
              <div className="messages-wrapper__avatar-user">
                <Avatar size="large" icon="user" />
              </div>
              <div className="messages-wrapper__chat-content">
                <div className="messages-wrapper__chat-message">
                  <span>Con Cac Đkm Mày</span>
                </div>
                <div className="messages-wrapper__chat-message">
                  Con Cac Đkm Mày
                </div>
                <div className="messages-wrapper__chat-message">
                  Con Cac Đkm Mày con chó , Con Cac Đkm Mày con chó
                </div>
              </div>
            </div>

            <div className="messages-wrapper__chat-item-me">
              <div className="messages-wrapper__chat-content-me">
                <div className="messages-wrapper__chat-message-me">
                  Con Cac Đkm Mày
                </div>
                <div className="messages-wrapper__chat-message-me">
                  Con Cac Đkm Mày
                </div>
                <div className="messages-wrapper__chat-message-me">
                  Con Cac Đkm Mày con chó , Con Cac Đkm Mày con chó
                </div>
              </div>
            </div>

            <div className="messages-wrapper__chat-item">
              <div className="messages-wrapper__avatar-user">
                <Avatar size="large" icon="user" />
              </div>
              <div className="messages-wrapper__chat-content">
                <div className="messages-wrapper__chat-message">
                  <span>Con Cac Đkm Mày</span>
                </div>
                <div className="messages-wrapper__chat-message">
                  Con Cac Đkm Mày
                </div>
                <div className="messages-wrapper__chat-message">
                  Con Cac Đkm Mày con chó , Con Cac Đkm Mày con chó
                </div>
              </div>
            </div>

            <div className="messages-wrapper__chat-item-me">
              <div className="messages-wrapper__chat-content-me">
                <div className="messages-wrapper__chat-message-me">
                  Con Cac Đkm Mày
                </div>
                <div className="messages-wrapper__chat-message-me">
                  Con Cac Đkm Mày
                </div>
                <div className="messages-wrapper__chat-message-me">
                  Con Cac Đkm Mày con chó , Con Cac Đkm Mày con chó
                </div>
              </div>
            </div>
          </div>

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
              suffix={
                <Tooltip title="Enter">
                  <div>
                    <img
                      // src="https://i.imgur.com/cwDmVI0.png"
                      className="messages-wrapper__icon-chat"
                      alt="error"
                    />
                  </div>
                </Tooltip>
              }
            />
          </div>
        </Col>
        <Col span={8} className="messages-wrapper__info">
          <div className="messages-wrapper__info-user">
            <Avatar
              className="messages-wrapper__avatar-info-user"
              size={150}
              icon="user"
            />
            <div className="messages-wrapper__title-user">
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
            </div>
            <div className="messages-wrapper__content">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.
              </p>
            </div>
          </div>
          <div className="messages-wrapper__chat-bot">
            <p className="messages-wrapper__name-bot">CHAT BOT</p>
            <p className="messages-wrapper__messages-bot">Em ăn cơm chưa ?</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

Messages.propTypes = {};

export default Messages;
