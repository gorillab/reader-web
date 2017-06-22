import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import UpperContent from '../UpperContent';
import MainContent from '../MainContent';
import HeaderTitle from '../HeaderTitle';
import Sort from '../Sort';
import PostList from '../PostList';

import styles from './Home.scss';

class Home extends Component {
  render() {
    return (
      <div styleName='home'>
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

export default CSSModules(Home, styles, {allowMultiple: true});
