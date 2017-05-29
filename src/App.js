import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="page">

            <Header />

            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/:source" component={Home}/>
            </div>

          </div>
        </Router>
    );
  }
}

export default App;
