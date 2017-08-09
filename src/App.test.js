import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import configureStore from './state';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={configureStore(window.REDUX_INITIAL_DATA)} />, div);
});
