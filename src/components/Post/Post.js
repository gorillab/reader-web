import React, { Component } from 'react';
import './Post.css';
import Moment from 'moment';

class Post extends Component {
  state = {};
  
  render() {
    var timeAgo = Moment(this.props.list.time).fromNow()
    return (
      <li className="post">
        <img src={this.props.list.thumnail} className="rounded thumnail" alt="..." />
        <span className="title">
          <a href={this.props.list.url}>{this.props.list.title}</a>
        </span>
        <br/>
        <span className="meta">
          <span className="by">
            <span>by </span>
            <a target="_blank" href={this.props.list.by.link}>{this.props.list.by.name}</a>
          </span>
          <span className="time"> {timeAgo}</span>
          <span>
            <button type="button" className="btn btn-secondary btn-sm">Share</button>
          </span>
        </span>
      </li>
    );
  }
}

export default Post;
