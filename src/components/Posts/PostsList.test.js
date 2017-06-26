import React from 'react';
import ReactDOM from 'react-dom';

import PostsList from './PostsList';

import posts from '../../mock-data/posts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostsList posts={posts} />, div);
});
