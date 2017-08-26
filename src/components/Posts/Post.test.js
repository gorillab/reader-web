import React from 'react';
import ReactDOM from 'react-dom';

import Post from './Post';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const post = {
    id: 1,
    thumbnail: '/images/logo.png',
    title: 'Jean E. Sammet, who developed the FORMAC programming language, has died',
    url: 'abc/abc',
    by: {
      name: 'tinhte.vn',
      link: 'http://www.tinhte.vn',
    },
    time: Date.now(),
    isRead: true,
  };

  ReactDOM.render(<Post post={post} />, div);
});
