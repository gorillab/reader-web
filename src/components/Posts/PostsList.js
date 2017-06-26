import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

import './PostsList.scss';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const PostsList = ({ posts }) => (
  <ul className="posts-list">
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </ul>
);

PostsList.propTypes = propTypes;

export default PostsList;
