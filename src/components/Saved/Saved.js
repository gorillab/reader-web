import React, { Component } from 'react';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../Posts/PostsList';

import './Saved.scss';

// for testing purpose, should remove later
import posts from '../../mock-data/posts';

class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts,
    };
  }

  render() {
    return (
      <div className="saved">
        <PageHeader>
          <PageTitle title="Saved" />

          <Sort />
        </PageHeader>

        <PageContent>
          <PostsList posts={this.state.posts} />
        </PageContent>
      </div>
    );
  }
}

export default Saved;
