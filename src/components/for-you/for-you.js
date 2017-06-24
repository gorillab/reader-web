import React, { Component } from 'react';

import UpperContent from '../common/upper-content';
import MainContent from '../common/main-content';
import HeaderTitle from '../common/header-title';
import Sort from '../common/sort';
import PostList from '../common/post-list';

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
