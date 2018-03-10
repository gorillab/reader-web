import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import ForYou from './ForYou';
import configureStore from '../../state';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = configureStore(window.REDUX_INITIAL_DATA);
  ReactDOM.render(
    <ReduxProvider store={store}>
      <MemoryRouter>
        <ForYou />
      </MemoryRouter>
    </ReduxProvider>, div);
});
