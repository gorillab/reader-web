import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';
import configureStore from '../../state';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = configureStore(window.REDUX_INITIAL_DATA);
  const props = {
    isLoggedIn: true,
    title: 'test',
    source: {},
  };
  ReactDOM.render(
    <ReduxProvider store={store}>
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>
    </ReduxProvider>, div);
});
