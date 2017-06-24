import React, { Component } from 'react';

import Post from '../post';

import './posts-list.scss';

class PostsList extends Component {
  render() {
    return (
      <ul className='posts-list'>
        {this.props.posts.map((post, index) => (
          <Post key={index} post={post} />     
        ))}
      </ul>
    );
  }
}

export default PostsList;
