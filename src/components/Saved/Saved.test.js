import React from 'react';
import ReactDOM from 'react-dom';

import { MemoryRouter } from 'react-router-dom';
import Saved from './Saved';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Saved />
    </MemoryRouter>, div);
});
