import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from './MainContent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainContent />, div);
});
