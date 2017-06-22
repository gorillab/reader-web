import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

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
      <ul styleName='post-list'>
        {this.state.posts.map((post, index) => (
          <Post key={index} post={post} />     
        ))}
      </ul>
    );
  }
}

export default CSSModules(PostList, styles, {allowMultiple: true});
