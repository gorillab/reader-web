import React, { Component } from 'react';
import { Users } from '@gorillab/reader-js';
import qs from 'qs';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../Posts';

import './Saved.scss';

const LIMIT = 25;

class Saved extends Component {
  constructor(props) {
    super(props);

    const { sort } = qs.parse(location.search, { ignoreQueryPrefix: true });

    this.state = {
      posts: [],
      sort: sort || 'new',
      limit: LIMIT,
      page: 0,
    };

    this.getMore = this.getMore.bind(this);
    this.changeSort = this.changeSort.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  async getPosts(query = {}) {
    try {
      const posts = await Users.getSaved({
        sort: this.state.sort,
        limit: this.state.limit,
        page: this.state.page,
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

  async getMore() {
    try {
      const posts = await Users.getSaved({
        sort: this.state.sort,
        limit: LIMIT,
        page: Math.floor(this.state.posts.length / LIMIT) + 1,
      });

      this.setState({
        posts: this.state.posts.concat(posts),
        limit: this.state.limit + LIMIT,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  async changeSort(sort) {
    await this.getPosts({ sort });
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
            <PostsList
              posts={this.state.posts}
              getMore={this.state.posts.length >= this.state.limit && this.getMore}
            />
          </div>
        </PageContent>
      </div>
    );
  }
}

export default Saved;
