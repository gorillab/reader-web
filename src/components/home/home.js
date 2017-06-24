import React, { Component } from 'react';

import UpperContent from '../upper-content';
import MainContent from '../main-content';
import HeaderTitle from '../header-title';
import Sort from '../sort';
import PostList from '../post-list';

import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className='home'>
      		<UpperContent>
            <HeaderTitle title='Explore'/>
            
            <Sort />
          </UpperContent>

          <MainContent>
            <PostList />
          </MainContent>
      </div>
    );
  }
}

export default Home;
