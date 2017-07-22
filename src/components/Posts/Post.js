import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';

const propTypes = {
  post: PropTypes.any.isRequired,
};

const Post = ({ post }) => {
  const time = new Date(post.time);
  const date = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
  const pathname = location.pathname;

  return (
    <li className="post">
      <img src={post.image} className="rounded thumbnail" alt="" />

      <div className="title">
        <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
      </div>

      <div className="meta">
        {post.source.title}
        <span className="time">{date}</span>

        <div className="actions">
          <button className="btn facebook-share-button">Share</button>
          { pathname !== '/saved' && post.isRead ? <button className="btn save-button">Save</button> : null }
        </div>
      </div>
    </li>
  );
};

Post.propTypes = propTypes;

export default Post;
