import React, { Component } from 'react';

import UpperContent from '../upper-content';
import MainContent from '../main-content';
import HeaderTitle from '../header-title';
import Sort from '../sort';
import PostList from '../post-list';

import './for-you.scss';

class ForYou extends Component {
  render() {
    return (
      <div className='for-you'>
        <UpperContent>
          <HeaderTitle title='For You'/>

          <Sort />
        </UpperContent>

        <MainContent>
          <PostList />
        </MainContent>
      </div>
    );
  }
}

export default ForYou;
