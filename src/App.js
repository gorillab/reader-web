import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="page">
            <Header />
            <div className="page-content">
              <Route exact path="/" component={Home}/>
              <Route path="/:source" component={Home}/>
            </div>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
