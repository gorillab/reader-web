import React, { Component } from 'react';
import './Sort.css';

class Sort extends Component {
  state = {};

  render() {
    return (
      <div className="sort mr-auto">
      	<ul>
      		<li className="sort-active">
            <div>
              <a href="#">New</a>
            </div>
      		</li>
      		<li>
            <div>
              <a href="#">Best</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">Daily</a>
            </div>
          </li>          
      	</ul>
      </div>
    );
  }
}

export default Sort;
