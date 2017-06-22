import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import UpperContent from '../UpperContent';
import MainContent from '../MainContent';
import HeaderTitle from '../HeaderTitle';
import Sort from '../Sort';
import PostList from '../PostList';

import styles from './ForYou.scss';

class ForYou extends Component {
  render() {
    return (
      <div styleName='for-you'>
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

export default CSSModules(ForYou, styles, {allowMultiple: true});
