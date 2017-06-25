import React from 'react';
import ReactDOM from 'react-dom';
import PageContent from './PageContent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageContent />, div);
});
