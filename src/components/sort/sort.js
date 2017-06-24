import React, { Component } from 'react';

import './sort.scss';

class Sort extends Component {
  render() {
    return (
      <div className='sort'>
      	<ul>
      		<li className='sort-active'>
            <a href=''>New</a>
      		</li>

      		<li>
            <a href=''>Best</a>
          </li>

          <li>
            <a href=''>Daily</a>
          </li>
      	</ul>
      </div>
    );
  }
}

export default Sort;
