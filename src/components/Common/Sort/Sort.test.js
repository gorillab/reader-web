import React from 'react';
import ReactDOM from 'react-dom';

import { MemoryRouter } from 'react-router-dom';
import Sort from './Sort';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Sort current="new" onClick={() => {}} />
    </MemoryRouter>, div);
});
