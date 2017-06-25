import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/common/header';
import Footer from './components/common/footer';
import Content from './components/common/content';
import Home from './components/home';
import ForYou from './components/for-you';

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
