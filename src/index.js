import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const rootElem = document.getElementById('root');
ReactDOM.render(
  <App />,
  rootElem
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootElem
    );
  }); 
}

registerServiceWorker();
