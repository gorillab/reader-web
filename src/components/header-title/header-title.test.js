import React from 'react';
import ReactDOM from 'react-dom';
import HeaderTitle from './header-title';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderTitle />, div);
});
