import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './app';

import './index.scss';

const rootElem = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElem
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(
      <NextApp />,
      rootElem
    );
  }); 
}

registerServiceWorker();
