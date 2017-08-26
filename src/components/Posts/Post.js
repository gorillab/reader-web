import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userSelectors } from '../../state/ducks/user';

import './Post.scss';

const propTypes = {
  post: PropTypes.any.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const Post = ({ post, isLoggedIn }) => {
  const time = post.time ? new Date(post.time) : null;
  const date = time ? `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}` : null;
  const isSavedPage = location.pathname === '/saved';

  return (
    <li className="post">
      <img src={post.image} className="rounded thumbnail" alt="" />

      <div className="title">
        <a href={post.url} rel="noopener noreferrer">{post.title}</a>
      </div>

      <div className="meta">
        {post.source && (
          <span className="source">{post.source.title}</span>
        )}

        {date && (
          <span className="time">{date}</span>
        )}

        <div className="actions">
          <button className="btn facebook-share-button">Share</button>
          {!isSavedPage && isLoggedIn && (
            <button className="btn save-button">{post.isSaved ? 'Unsave' : 'Save'}</button>
          )}
        </div>
      </div>
    </li>
  );
};

Post.propTypes = propTypes;

export default connect(
  state => ({
    isLoggedIn: userSelectors.isLoggedIn(state),
  }),
)(Post);
