import React, { Component } from 'react';

import UpperContent from '../UpperContent';
import MainContent from '../MainContent';
import HeaderTitle from '../HeaderTitle';
import Sort from '../Sort';
import PostList from '../PostList';

import styles from './ForYou.scss';

class ForYou extends Component {
  render() {
    return (
      <div className={styles.forYou}>
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
