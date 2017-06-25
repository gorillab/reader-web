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
    return (
      <BrowserRouter>
        <div className='app'>
          <Header />

          <Content>
            <Route exact path='/' component={Home}/>
            <Route path='/source/:source' component={Home}/>
            <Route path='/for-you' component={ForYou}/>
          </Content>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
