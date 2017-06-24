import React from 'react';
import ReactDOM from 'react-dom';

import Post from './post';

import { posts } from '../../mock-data/posts.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Post post={posts[0]} />, div);
});
