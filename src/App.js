import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Common/Header';
import Footer from './Common/Footer';
import Content from './Common/Content';
import Home from './Home';
import ForYou from './ForYou';

import './App.scss';

class App extends Component {
  render() {
    const routes = [{
      path: '/',
      exact: true,
      component: Home
    }, {
      path: '/source/:source',
      component: Home
    }, {
      path: '/for-you',
      component: ForYou
    }];
    
    return (
      <BrowserRouter>
        <div className='app'>
          <Header />

          <Content>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Content>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
