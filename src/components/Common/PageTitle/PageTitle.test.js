import React from 'react';
import ReactDOM from 'react-dom';

import PageTitle from './PageTitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageTitle />, div);
});
