import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './state';
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
    <Router>
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
    </Router>
  </ReduxProvider>
);

export default App;
