import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

import './PostsList.scss';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export const PostsList = ({ posts }) => (
  <ul className="posts-list">
    {posts.map((post, index) => (
      <Post key={post.id} post={post} index={index} />
    ))}
  </ul>
);

PostsList.propTypes = propTypes;

export default PostsList;
