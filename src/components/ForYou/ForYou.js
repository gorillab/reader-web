import React, { Component } from 'react';

import HeaderTitle from '../HeaderTitle';
import Sort from '../Sort';
import PostList from '../PostList';

import './ForYou.scss';

class ForYou extends Component {
  render() {
    return (
      <div className="forYou">
        <div className="upperContent">
          <HeaderTitle title='For You'/>

          <Sort />
        </div>

        <div className="mainContent">
          <PostList />
        </div>
      </div>
    );
  }
}

export default ForYou;
