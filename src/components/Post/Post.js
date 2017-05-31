import React, { Component } from 'react';
import './Post.css';
import Moment from 'moment';

class Post extends Component {
  state = {};
  
  render() {
    var timeAgo = Moment(this.props.post.time).fromNow();
    // var FontAwesome = require('react-fontawesome');
    return (
      <li className="post">
        <img src={this.props.post.thumbnail} className="rounded thumnail" alt="..." />
        <span className="title">
          <a href={this.props.post.url}>{this.props.post.title}</a>
        </span>
        <br/>
        <span className="meta">
          <span className="by">
            <a target="_blank" rel="noopener noreferrer" href={this.props.post.by.link}>{this.props.post.by.name}</a>
          </span>
          <span className="time"> {timeAgo}</span>
          <span>
            <button className="btn facebook-share-button">Share</button>
          </span>
          <span>
            <div className="btn-group">
              <button type="button" className="btn sub-button">Subscribe</button>
              <button type="button" className="btn plus-button" aria-haspopup="true" aria-expanded="false">
              </button>
            </div>
          </span>          
        </span>
      </li>
    );
  }
}

export default Post;
