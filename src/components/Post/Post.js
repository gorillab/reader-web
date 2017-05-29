import React, { Component } from 'react';
import './Post.css';
import Image from '../../assets/images/reader.png'

class Post extends Component {
  state = {};

  render() {
    return (
      <li className="Post">
          <img width="40px" height="40px" src={Image} className="rounded" alt="..." />
        <span className="title">
          <a href="/abc-abc">Jean E. Sammet, who developed the FORMAC programming language, has died</a>
        </span>
        <br/>
        <span className="meta">
          <span className="by">
            <span>by </span>
            <a href="abc/awdd">tinhte.vn</a>
          </span>
          <span className="time"> 2 hours ago</span>
          <span>
            <button type="button" className="btn btn-secondary btn-sm">Share</button>
          </span>
        </span>
      </li>
    );
  }
}

export default Post;
