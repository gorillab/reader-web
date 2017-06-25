import React from 'react';
import ReactDOM from 'react-dom';
import Sort from './sort';
import { MemoryRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Sort />
    </MemoryRouter>, div);
});
