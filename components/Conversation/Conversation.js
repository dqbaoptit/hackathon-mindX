import React, { Component } from 'react';
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
class Conversation extends Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  };

  handleInfiniteOnLoad = () => {
    console.log('Hello');
  };

  render() {
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
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
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
              {this.state.loading && this.state.hasMore && (
                <div className="demo-loading-container">
                  <Spin />
                </div>
              )}
            </List>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

Conversation.propTypes = {
  //
};

export default Conversation;
