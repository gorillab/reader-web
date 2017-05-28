import React, { Component } from 'react';
import './Sort.css';

class Sort extends Component {
  state = {};

  render() {
    return (
      <div className="Sort mr-auto">
      	<ul>
      		<li className="sort-active">
            <div>
              <a href="/sort/new">New</a>
            </div>
      		</li>
      		<li>
            <div>
              <a href="/sort/best">Best</a>
            </div>
          </li>
          <li>
            <div>
              <a href="/sort/daily">Daily</a>
            </div>
          </li>          
      	</ul>
      </div>
    );
  }
}

export default Sort;
