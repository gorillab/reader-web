import React from 'react';
import ReactDOM from 'react-dom';
import Sort from './Sort';
import { MemoryRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Sort />
    </MemoryRouter>, div);
});
