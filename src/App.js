import React, { Component } from 'react';
// import logo from './logo.svg';
import './app.css';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <Button color="danger">Danger!</Button>
      // </div>
      <div>
        <Header />
        <div className="container">
          
          <hr />
          <Footer />
        </div>
      </div>

    );
  }
}

export default App;
