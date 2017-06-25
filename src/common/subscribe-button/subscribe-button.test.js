import React from 'react';
import ReactDOM from 'react-dom';
import SubscribeButton from './subscribe-button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubscribeButton />, div);
});
