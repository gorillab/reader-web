import React from 'react';
import ReactDOM from 'react-dom';

import PostsList from './PostsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const posts = [
    {
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
    },
    {
      id: 2,
      thumbnail: '/images/logo.png',
      title: 'Jean E. Sammet, who developed the FORMAC programming language, has died',
      url: 'abc/abc',
      by: {
        name: 'tinhte.vn',
        link: 'http://www.tinhte.vn',
      },
      time: Date.now(),
    },
    {
      id: 3,
      thumbnail: '/images/logo.png',
      title: 'Jean E. Sammet, who developed the FORMAC programming language, has died',
      url: 'abc/abc',
      by: {
        name: 'tinhte.vn',
        link: 'http://www.tinhte.vn',
      },
      time: Date.now(),
    },
  ];

  ReactDOM.render(<PostsList posts={posts} />, div);
});
