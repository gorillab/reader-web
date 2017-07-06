import React, { Component } from 'react';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../Posts/PostsList';

import './ForYou.scss';

// for testing purpose, should remove later
import posts from '../../mock-data/posts';

const getPosts = () => posts;

class ForYou extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: 'new',
      posts,
    };
    this.getPosts = this.getPosts.bind(this);
  }

  getPosts(sort) {
    const postsList = getPosts(sort);
    this.setState({
      sort,
      posts: postsList,
    });
  }

  render() {
    return (
      <div className="for-you">
        <PageHeader>
          <PageTitle title="For You" />

          <Sort current={this.state.sort} getPosts={this.getPosts} />
        </PageHeader>

        <PageContent>
          <PostsList posts={this.state.posts} />
        </PageContent>
      </div>
    );
  }
}


export default ForYou;
