import React from 'react';
import ReactDOM from 'react-dom';

import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const history = {
    listen: () => {},
  };
  ReactDOM.render(
    <MemoryRouter>
      <Home history={history} />
    </MemoryRouter>, div);
});
