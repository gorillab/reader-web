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
