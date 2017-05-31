import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import { PostData } from '../mock-data/post-list.js';

it('renders without crashing', () => {
  const post = PostData[0];
  const div = document.createElement('div');
  ReactDOM.render(<Post post={post} />, div);
});
