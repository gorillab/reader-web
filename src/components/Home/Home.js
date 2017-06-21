import React, { Component } from 'react';

import HeaderTitle from '../HeaderTitle';
import Sort from '../Sort';
import PostList from '../PostList';

import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	text: 'All-data'
    };
  }

  render() {
    return (
      <div className="home">
      		<div className="upperContent">
            <HeaderTitle title='Explore'/>
            
            <Sort />
          </div>

          <div className="mainContent">
            <PostList />
          </div>
      </div>
    );
  }
}

export default Home;
