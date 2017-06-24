import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from './main-content';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainContent />, div);
});
