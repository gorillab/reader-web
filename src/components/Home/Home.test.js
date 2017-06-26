import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const history = {
    listen: createHistory(),
  };
  ReactDOM.render(
    <MemoryRouter>
      <Home history={history} />
    </MemoryRouter>, div);
});
