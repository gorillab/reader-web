import React from 'react';
import ReactDOM from 'react-dom';
import SubscribeButton from './SubscribeButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubscribeButton />, div);
});
