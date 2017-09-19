import React from 'react';
import ReactDOM from 'react-dom';

import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    isLoggedIn: true,
    sources: [],
    logOut: () => {},
    user: {
      profile: {
        displayname: '',
      },
    },
  };
  ReactDOM.render(
    <MemoryRouter>
      <Header {...props} />
    </MemoryRouter>
    , div);
});
