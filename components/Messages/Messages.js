import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Avatar, Input, Tooltip, Row, Col } from 'antd';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { db } from '../../configs/Firebase';
import { SendOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { api } from '../../services/API';
import { v4 as uuidv4 } from 'uuid';
import './Messages.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const Messages = (props) => {
  let userToken = '';
  let roomId = '';
  let roomToken = '';
  let roomMain = undefined;
  let callClient = undefined;

  // eslint-disable-line
  const { user } = props;
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);
  const [messages, setMessages] = useState('');
  const [chatsRealtime, setChatsRealtime] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isChange, setChange] = useState(false)
  const [roomID, setRoomID] = useState(null)
  const [roomURL,setRoomURL] = useState('')
  const router = useRouter()
  

  useEffect(() => {
    console.log(window.location.href)
    api.setRestToken();
    const { roomCallId  } = router.query
    if (roomCallId) {
      roomId = roomCallId;
      join();
    }
  });

  const authen = () => {
    return new Promise(async (resolve) => {
      const userToken2 = await api.getUserToken(user._id);
      userToken = userToken2;
      if (!callClient) {
        const client = new window.StringeeClient();
        console.log(client);
        client.on('authen', function (res) {
          console.log('on authen: ', res);
          resolve(res);
        });
        callClient = client;
      }
      callClient.connect(userToken);
    });
    // api
    //   .getUserToken(user._id)
    //   .then((data) => {
    //     window.StringeeClient().connect(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const publish = async (screenSharing = false) => {
    const localTrack = await window.StringeeVideo.createLocalVideoTrack(
      callClient,
      {
        audio: true,
        video: true,
        screen: screenSharing,
        videoDimensions: { width: 640, height: 360 },
      }
    );

    const videoElement = localTrack.attach();
    addVideo(videoElement);

    const roomData = await window.StringeeVideo.joinRoom(callClient, roomToken);
    const room = roomData.room;
    console.log({ roomData, room });

    if (roomMain) {
      roomMain = room;
      room.clearAllOnMethos();
      room.on('addtrack', (e) => {
        const track = e.info.track;

        console.log('addtrack', track);
        if (track.serverId === localTrack.serverId) {
          console.log('local');
          return;
        }
        subscribe(track);
      });
      room.on('removetrack', (e) => {
        const track = e.track;
        if (!track) {
          return;
        }

        const mediaElements = track.detach();
        mediaElements.forEach((element) => element.remove());
      });

      // Join existing tracks
      roomData.listTracksInfo.forEach((info) => subscribe(info));
    }

    await room.publish(localTrack);
    console.log('room publish successful');
  };

  const createRoom = async () => {
    const room = await api.createRoom();
    const { roomId: rooId2 } = room;
    const roomTokenSub = await api.getRoomToken(roomId);
    const location = window.location.href;
    setRoomID(rooId2)  
    setRoomURL(`https://${location}?roomCallId=${rooId2}`)
    roomId = rooId2;
    roomToken = roomTokenSub;
    console.log({ rooId2, roomToken });

    await authen();
    await publish();
  };

  const join = async () => {
    const roomTokenSub = await api.getRoomToken(roomId);
    roomToken = roomTokenSub;

    await authen();
    await publish();
  };

  const joinWithId = async () => {
    const roomIdSub = prompt('Dán Room ID vào đây nhé!');
    if (roomIdSub) {
      roomId = roomIdSub;
      await join();
    }
  };

  const subscribe = async (trackInfo) => {
    const track = await roomMain.subscribe(trackInfo.serverId);
    track.on('ready', () => {
      const videoElement = track.attach();
      addVideo(videoElement);
    });
  };
  const addVideo = (video) => {
    const videoContainer = document.querySelector("#videos");
    video.setAttribute('controls', 'true');
    video.setAttribute('playsinline', 'true');
    videoContainer.appendChild(video);
    setChange(!isChange)
  };

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
          user: user,
          uid: uuidv4(),
        });
        setMessages('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openVideoCall = () => {
    setIsModal(true);
  };

  const closeVideoCall = () => {
    setIsModal(false);
  };

  const renderMesssages = () => {
    if (chatsRealtime.length) {
      return chatsRealtime.map((chat) => {
        if (chat.user._id !== user._id) {
          return (
            <div className="messages-wrapper__chat-item">
              <div className="messages-wrapper__avatar-user">
                <Avatar size="large" icon={chat.user.lastName.trim().charAt(0)} />
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
    <>
      <div className="messages-wrapper">
        <Row>
          <Col span={16} className="messages-wrapper__messages">
            <div className="messages-wrapper__header">
              <div className="messages-wrapper__user-wraper">
                <div className="messages-wrapper__avatar">
                  <Avatar size={54} icon={user.lastName.trim().charAt(0)} />
                </div>
                <div className="messages-wrapper__title-wrapper">
                  <h5 className="messages-wrapper__title">
                    {`${user.firstName} ${user.lastName}`}
                  </h5>
                  <p className="messages-wrapper__status">Đang Online</p>
                </div>
              </div>
              <ul className="messages-wrapper__tool">
                <li className="messages-wrapper__camera-wrapper">
                  <a className="messages-wrapper__camera">
                    <div
                      onClick={openVideoCall}
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
            <div className="messages-wrapper__chat-view">
              {renderMesssages()}
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
                value={messages}
                onKeyDown={(e) => {
                  event.preventDefault();
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

      <Modal
        isOpen={isModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeVideoCall}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="call-video-wrapper">
          <div className="container-2 has-text-centered" v-cloak id="app">
            <div>
              <button
                className="button is-primary"
                onClick={() => createRoom()}
              >
                Tạo Meeting
              </button>

              <button className="button is-info" onClick={() => joinWithId()}>
                Join Meeting
              </button>
            </div>
            {
              roomID && (
                <div v-if="roomId" className="info">
                <p>
                   Bạn đang ở trong room <strong>{roomID}</strong>.
                </p>
              {/* <p>
                Gửi link này cho bạn bè cùng join room nhé
                <a v-bind:href="roomUrl" target="_blank">
                  {{ roomUrl }}
                </a>
                .
              </p> */}
              <p>
                Hoặc bạn cũng có thể copy <code>{roomURL}</code> để share.
              </p>
            </div>
              )
            }  
          </div>

          <div className="container-2">
            <div id="videos"></div>
          </div>
        </div>
      </Modal>
    </>
  );
};

Messages.propTypes = {};

export default Messages;
