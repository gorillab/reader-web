import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ForYou from './components/ForYou';

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <Header />

          <div className={styles.content}>
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
