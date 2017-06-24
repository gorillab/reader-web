import React, { Component } from 'react';

import Post from '../Post';

import styles from './PostList.scss';

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
      <ul className={styles.postList}>
        {this.state.posts.map((post, index) => (
          <Post key={index} post={post} />     
        ))}
      </ul>
    );
  }
}

export default PostList;
