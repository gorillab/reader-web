import React from 'react';
import ReactDOM from 'react-dom';
import ForYou from './ForYou';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForYou />, div);
});
