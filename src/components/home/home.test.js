import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const history = {
    listen: () => {}
  };
  ReactDOM.render(
    <MemoryRouter>
      <Home history={history} />
    </MemoryRouter>, div);
});
