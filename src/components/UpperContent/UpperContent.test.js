import React from 'react';
import ReactDOM from 'react-dom';
import UpperContent from './UpperContent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpperContent />, div);
});
