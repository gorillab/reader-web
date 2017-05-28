import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="page">

            <Header />

            <Container>
              <Route exact path="/" component={Home}/>
              <Route path="/:source" component={Home}/>

              <hr />
              <Footer />

            </Container>
          </div>
        </Router>
    );
  }
}

export default App;
