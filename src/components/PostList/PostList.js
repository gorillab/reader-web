import React, { Component } from 'react';
import './PostList.css';
import Post from '../Post';
import { PostData } from '../mock-data/post-list.js';


class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: PostData
    }
  }
  

  render() {
    return (
      <ul className="post-list">
        {this.state.lists.map((list, index) => (
            <Post key={index} list={list} />     
        ))}
      </ul>
    );
  }
}

export default PostList;
