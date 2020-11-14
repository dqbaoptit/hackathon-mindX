import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { List, Avatar, Spin } from 'antd';
import './Conversation.scss';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const Conversation = () => {
  //   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleInfiniteOnLoad = () => {
    console.log('Hello');
  };

  return (
    <div className="conversations-wrapper">
      <div className="conversations-wrapper__title-wrapper">
        <img
          src="https://i.imgur.com/U4RdkR5.png"
          alt="error"
          className="conversations-wrapper__button"
        />
        <p className="conversations-wrapper__title">Tin Nhắn</p>
      </div>
      <div className="conversations-wrapper__conversations">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={handleInfiniteOnLoad}
          hasMore={loading && hasMore}
          useWindow={false}
        >
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Sed ut perspiciatis"
                  description=" Đang Online"
                />
              </List.Item>
            )}
          >
            {loading && hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    </div>
  );
};

Conversation.propTypes = {
  //
};

export default Conversation;
