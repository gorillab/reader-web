import React from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from './FacebookButton';

it('renders without crashing', () => {
  const props = {
    content: '',
    classname: '',
    action: () => {},
  };
  const div = document.createElement('div');
  ReactDOM.render(<FacebookButton {...props} />, div);
});
