import React, { Component } from 'react';
import { Users } from '@gorillab/reader-js';
import qs from 'qs';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../Posts';

import './ForYou.scss';

const LIMIT = 25;

class ForYou extends Component {
  constructor(props) {
    super(props);

    const { sort } = qs.parse(location.search, { ignoreQueryPrefix: true });

    this.state = {
      posts: [],
      sort: sort || 'new',
      limit: LIMIT,
      page: 1,
    };

    this.getMore = this.getMore.bind(this);
    this.changeSort = this.changeSort.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  async getPosts(query = {}) {
    try {
      const posts = await Users.getForYou({
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
      const posts = await Users.getForYou({
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

  changeSort(sort) {
    this.getPosts({ sort });
  }

  render() {
    return (
      <div className="for-you">
        <PageHeader>
          <PageTitle title="For You" />

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

export default ForYou;
