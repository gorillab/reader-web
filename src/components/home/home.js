import React, { Component } from 'react';

import PageHeader from '../common/page-header';
import PageTitle from '../common/page-title';
import Sort from '../common/sort';
import PageContent from '../common/page-content';
import PostsList from '../posts-list';

import './home.scss';

// for testing purpose, should remove later
import { posts } from '../mock-data/posts';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts
    }
  }

  render() {
    return (
      <div className='home'>
        <PageHeader>
          <PageTitle title='Explore'/>
          
          <Sort />
        </PageHeader>

        <PageContent>
          <PostsList posts={this.state.posts} />
        </PageContent>
      </div>
    );
  }
}

export default Home;
