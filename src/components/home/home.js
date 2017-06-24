import React, { Component } from 'react';

import UpperContent from '../common/upper-content';
import MainContent from '../common/main-content';
import HeaderTitle from '../common/header-title';
import Sort from '../common/sort';
import PostList from '../common/post-list';

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
