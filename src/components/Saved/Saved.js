import React, { Component } from 'react';
import { Users } from 'reader-js';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../Posts/PostsList';

import './Saved.scss';

class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      sort: 'new',
      limit: 25,
      page: 0,
    };

    this.getPosts = this.getPosts.bind(this);
    this.changeSort = this.changeSort.bind(this);

    this.getPosts();
  }

  async getPosts(query = {
    sort: this.state.sort,
    limit: this.state.limit,
    page: this.state.page,
  }) {
    try {
      const posts = await Users.getSaved({
        source: this.props.source ? this.props.source.id : undefined,
        ...query,
      });

      this.setState({
        posts,
        ...query,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  async changeSort(sort) {
    await this.getPosts({
      sort,
      limit: this.state.limit,
      page: this.state.page,
    });
  }

  render() {
    return (
      <div className="saved">
        <PageHeader>
          <PageTitle title="Saved" />

          <Sort current={this.state.sort} getPosts={this.getPosts} />
        </PageHeader>

        <PageContent>
          <PostsList posts={this.state.posts} />
        </PageContent>
      </div>
    );
  }
}

export default Saved;
