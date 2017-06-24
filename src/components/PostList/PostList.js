import React, { Component } from 'react';

import Post from '../Post';

import './PostList.scss';

import { PostData } from '../mock-data/post-list.js';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: PostData
    }
  }
  
  render() {
    return (
      <ul className='post-list'>
        {this.state.posts.map((post, index) => (
          <Post key={index} post={post} />     
        ))}
      </ul>
    );
  }
}

export default PostList;
