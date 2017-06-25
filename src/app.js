import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header';
import Footer from './common/footer';
import Content from './common/content';
import Home from './home';
import ForYou from './for-you';

import './app.scss';

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
