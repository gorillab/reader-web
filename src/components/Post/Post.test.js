import React from 'react';
import ReactDOM from 'react-dom';

import Post from './Post';

import { posts } from '../../mock-data/posts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Post post={posts[0]} />, div);
});
