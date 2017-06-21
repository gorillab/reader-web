import React, { Component } from 'react';
import Moment from 'moment';

import './Post.scss';

class Post extends Component {
  render() {
    const timeAgo = Moment(this.props.post.time).fromNow();
    
    return (
      <li className="post">
        <img src={this.props.post.thumbnail} className="rounded thumbnail" alt="" />

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
            <button className="btn facebookShareButton">Share</button>
          </span>

          <span>
            <div className="btn-group btnGroup">
              <button type="button" className="btn subButton">Subscribe</button>

              <button type="button" className="btn plusButton" aria-haspopup="true" aria-expanded="false"></button>
            </div>
          </span>          
        </span>
      </li>
    );
  }
}

export default Post;
