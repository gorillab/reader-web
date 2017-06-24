import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './post-list';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostList />, div);
});
