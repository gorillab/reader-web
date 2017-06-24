import React, { Component } from 'react';

import UpperContent from '../UpperContent';
import MainContent from '../MainContent';
import HeaderTitle from '../HeaderTitle';
import Sort from '../Sort';
import PostList from '../PostList';

import './Home.scss';

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
