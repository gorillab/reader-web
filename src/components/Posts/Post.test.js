import React from 'react';
import ReactDOM from 'react-dom';

import { MemoryRouter } from 'react-router-dom';
import { PostComponent } from './Post';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    post: {
      id: 1,
      image: '/images/logo.png',
      title: 'Jean E. Sammet, who developed the FORMAC programming language, has died',
      content: 'Jean E. Sammet, who developed the FORMAC programming language, has died',
      url: 'abc/abc',
      source: {
        id: 2,
        title: 'Medium',
      },
      meta: {
        numSaved: 0,
        numShared: 0,
        numViewed: 0,
      },
    },
    isLoggedIn: true,
    index: 1,
  };
  ReactDOM.render(
    <MemoryRouter>
      <PostComponent {...props} />
    </MemoryRouter>, div);
});
