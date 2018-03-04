import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Posts } from '@gorillab/reader-js';
import qs from 'qs';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../Posts';
import SubscribeButton from '../Common/SubscribeButton';

import './Home.scss';

const LIMIT = 25;

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  source: PropTypes.any,
};
const defaultProps = {
  source: undefined,
};

class Home extends Component {
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
      const posts = await Posts.getPosts({
        source: this.props.source ? this.props.source.id : undefined,
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
      const posts = await Posts.getPosts({
        source: this.props.source ? this.props.source.id : undefined,
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
      <div className="home">
        <PageHeader>
          <PageTitle title={this.props.title} />

          {this.props.isLoggedIn && this.props.source
          && <SubscribeButton source={this.props.source} />}

          <Sort current={this.state.sort} onClick={this.changeSort} />
        </PageHeader>

        <PageContent>
          <div className="row">
            <PostsList
              source={this.props.source}
              posts={this.state.posts}
              getMore={this.state.posts.length >= this.state.limit && this.getMore}
            />
          </div>
        </PageContent>
      </div>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
