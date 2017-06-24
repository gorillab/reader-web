import React, { Component } from 'react';
import Moment from 'moment';

import styles from './Post.scss';

class Post extends Component {
  render() {
    const timeAgo = Moment(this.props.post.time).fromNow();
    
    return (
      <li className={styles.post}>
        <img src={this.props.post.thumbnail} className={`rounded ${styles.thumbnail}`} alt='' />

        <span className={styles.title}>
          <a href={this.props.post.url}>{this.props.post.title}</a>
        </span>

        <br/>

        <div className={styles.meta}>
          <a href={this.props.post.by.link} target='_blank' rel='noopener noreferrer'>{this.props.post.by.name}</a>

          <span className={styles.time}>{timeAgo}</span>

          <div className={styles.actions}>
            <button className={styles.facebookShareButton}>Share</button>

            <div className={styles.btnGroup}>
              <button type='button' className={styles.subButton}>Subscribe</button>

              <button type='button' className={styles.plusButton} aria-haspopup='true' aria-expanded='false'></button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Post;
