import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
    , div);
});
