import React, { Component } from 'react';

import './post.scss';

class Post extends Component {
  render() {
    const time = new Date(this.props.post.time);
    const date = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
    
    return (
      <li className='post'>
        <img src={this.props.post.thumbnail} className='rounded thumbnail' alt='' />

        <span className='title'>
          <a href={this.props.post.url}>{this.props.post.title}</a>
        </span>

        <br/>

        <div className='meta'>
          <a href={this.props.post.by.link} target='_blank' rel='noopener noreferrer'>{this.props.post.by.name}</a>

          <span className='time'>{date}</span>

          <div className='actions'>
            <button className='btn facebook-share-button'>Share</button>
            <button className='btn save-button'>Save</button>
          </div>
        </div>
      </li>
    );
  }
}

export default Post;
