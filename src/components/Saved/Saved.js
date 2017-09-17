import React, { Component } from 'react';
import { Users } from '@gorillab/reader-js';
import qs from 'qs';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../Posts';

import './Saved.scss';

class Saved extends Component {
  constructor(props) {
    super(props);

    const { sort } = qs.parse(location.search, { ignoreQueryPrefix: true });

    this.state = {
      posts: [],
      sort: sort || 'new',
      limit: 25,
      page: 0,
    };

    this.getPosts = this.getPosts.bind(this);
    this.changeSort = this.changeSort.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  async getPosts(query = {
    sort: this.state.sort,
    limit: this.state.limit,
    page: this.state.page,
  }) {
    try {
      const posts = await Users.getSaved(query);

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

          <Sort current={this.state.sort} onClick={this.changeSort} />
        </PageHeader>

        <PageContent>
          <div className="row">
            <PostsList posts={this.state.posts} />
          </div>
        </PageContent>
      </div>
    );
  }
}

export default Saved;
