import React from 'react';
import ReactDOM from 'react-dom';
import Sort from './sort';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sort />, div);
});
