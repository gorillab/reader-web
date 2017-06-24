import React, { Component } from 'react';
import Moment from 'moment';

import './Post.scss';

class Post extends Component {
  render() {
    const timeAgo = Moment(this.props.post.time).fromNow();
    
    return (
      <li className='post'>
        <img src={this.props.post.thumbnail} className='rounded thumbnail' alt='' />

        <span className='title'>
          <a href={this.props.post.url}>{this.props.post.title}</a>
        </span>

        <br/>

        <div className='meta'>
          <a href={this.props.post.by.link} target='_blank' rel='noopener noreferrer'>{this.props.post.by.name}</a>

          <span className='time'>{timeAgo}</span>

          <div className='actions'>
            <button className='btn facebook-share-button'>Share</button>

            <div className='btn-group'>
              <button type='button' className='btn sub-button'>Subscribe</button>

              <button type='button' className='btn plus-button' aria-haspopup='true' aria-expanded='false'></button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Post;
