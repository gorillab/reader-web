import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore, { history } from './state';
import { getUser } from './state/ducks/user';
import { getSources } from './state/ducks/sources';

import routes from './App.routes';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Content from './components/Common/Content';

import './App.scss';

const store = configureStore(window.REDUX_INITIAL_DATA);
Promise.all([
  store.dispatch(getUser()),
  store.dispatch(getSources()),
]);

const App = () => (
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <div className="app">
        <Header />

        <Content>
          <Switch>
            {routes.map(route => (
              <Route {...route} />
            ))}
          </Switch>
        </Content>

        <Footer className="hidden-sm-down" />
      </div>
    </ConnectedRouter>
  </ReduxProvider>
);

export default App;
