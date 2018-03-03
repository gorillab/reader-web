import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

import './PostsList.scss';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
  getMore: PropTypes.any,
};

const defaultProps = {
  getMore: false,
};

export const PostsList = ({ posts, getMore }) => (
  <div className="posts-list-wrapper">
    <ul className="posts-list">
      {posts.map((post, index) => (
        <Post key={post.id} post={post} index={index} />
      ))}
    </ul>

    {<div className="get-more-wrapper">
      <button type="button" name="get-more" className="btn btn-get-more" onClick={getMore}>
        View more
      </button>
    </div>}
  </div>
);

PostsList.propTypes = propTypes;
PostsList.defaultProps = defaultProps;

export default PostsList;
