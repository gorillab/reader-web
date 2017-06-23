import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Moment from 'moment';

import styles from './Post.scss';

class Post extends Component {
  render() {
    const timeAgo = Moment(this.props.post.time).fromNow();
    
    return (
      <li styleName='post'>
        <img src={this.props.post.thumbnail} className='rounded' styleName='thumbnail' alt='' />

        <span styleName='title'>
          <a href={this.props.post.url}>{this.props.post.title}</a>
        </span>

        <br/>

        <div styleName='meta'>
          <a href={this.props.post.by.link} target='_blank' rel='noopener noreferrer'>{this.props.post.by.name}</a>

          <span styleName='time'>{timeAgo}</span>

          <div styleName='actions'>
            <button styleName='btn facebook-share-button'>Share</button>

            <div styleName='btn-group'>
              <button type='button' styleName='btn sub-button'>Subscribe</button>

              <button type='button' styleName='btn plus-button' aria-haspopup='true' aria-expanded='false'></button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default CSSModules(Post, styles, {allowMultiple: true});
