import React from 'react';
import ReactDOM from 'react-dom';

import PostsList from './posts-list';

import { posts } from '../mock-data/posts.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostsList posts={posts} />, div);
});
