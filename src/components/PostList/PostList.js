import React, { Component } from 'react';
import './PostList.css';
import Post from '../Post';

class PostList extends Component {
  state = {};

  render() {
    return (
      <ul className="PostList">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    );
  }
}

export default PostList;
