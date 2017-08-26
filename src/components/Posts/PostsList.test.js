import React from 'react';
import ReactDOM from 'react-dom';

import { PostsList } from './PostsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    posts: [],
  };

  ReactDOM.render(<PostsList {...props} />, div);
});
