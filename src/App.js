import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './state';
import { getUser } from './state/ducks/user/actions';
import getSources from './state/ducks/sources/actions';

import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Content from './components/Common/Content';
import Home from './components/Home';
import ForYou from './components/ForYou';
import Saved from './components/Saved';

import './App.scss';

const store = configureStore(window.REDUX_INITIAL_DATA);
store.dispatch(getUser());
store.dispatch(getSources());

const routes = [{
  key: 'home',
  path: '/',
  exact: true,
  component: Home,
}, {
  key: 'source',
  path: '/source/:source',
  component: Home,
}, {
  key: 'for-you',
  path: '/for-you',
  component: ForYou,
}, {
  key: 'saved',
  path: '/saved',
  component: Saved,
}];

const App = () => (
  <ReduxProvider store={store}>
    <Router>
      <div className="app">
        <Header />

        <Content>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Content>

        <Footer />
      </div>
    </Router>
  </ReduxProvider>
);

export default App;
