import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ForYou from './components/ForYou';

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div styleName='app'>
          <Header />

          <div styleName='content'>
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

export default CSSModules(App, styles, {allowMultiple: true});
