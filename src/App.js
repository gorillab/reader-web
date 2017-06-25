import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Content from './components/Common/Content';
import Home from './components/Home';
import ForYou from './components/ForYou';

import './App.scss';

class App extends Component {
  render() {
    const routes = [{
      key: 'home',
      path: '/',
      exact: true,
      component: Home
    }, {
      key: 'source',
      path: '/source/:source',
      component: Home
    }, {
      key: 'for-you',
      path: '/for-you',
      component: ForYou
    }];
    
    return (
      <BrowserRouter>
        <div className='app'>
          <Header />

          <Content>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Content>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
