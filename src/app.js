import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import ForYou from './components/for-you';

import './app.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Header />

          <div className='content'>
            <Route exact path='/' component={Home}/>
            <Route path='/source/:source' component={Home}/>
            <Route path='/for-you' component={ForYou}/>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
