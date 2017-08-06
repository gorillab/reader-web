import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

import './index.scss';

const rootElem = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElem,
);

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootElem,
    );
  });
}

registerServiceWorker();
