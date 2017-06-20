import React, { Component } from 'react';
import './ForYou.scss';
import Sort from '../Sort';
import HeaderTitle from '../HeaderTitle';
import PostList from '../PostList';

class ForYou extends Component {
  state = {};

  render() {
    return (
      <div className="ForYou">
        <div className="upper-content">
              <HeaderTitle title='For you'/>
              <Sort />
          </div>
          <div className="main-content">
            	<PostList />
          </div>
      </div>
    );
  }
}

export default ForYou;
