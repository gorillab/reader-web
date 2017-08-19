import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Posts } from 'reader-js';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../Posts/PostsList';
import SubscribeButton from '../Common/SubscribeButton';

import './Home.scss';

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

    this.state = {
      posts: [],
      sort: 'new',
      limit: 25,
      page: 0,
    };

    this.changeSort = this.changeSort.bind(this);
    this.getPosts = this.getPosts.bind(this);

    this.getPosts();
  }

  async getPosts(query = {
    sort: this.state.sort,
    limit: this.state.limit,
    page: this.state.page,
  }) {
    try {
      const posts = await Posts.getPosts({
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
      <div className="home">
        <PageHeader>
          <PageTitle title={this.props.title} />

          {this.props.isLoggedIn && this.props.source
          && <SubscribeButton source={this.props.source} />}

          <Sort current={this.state.sort} getPosts={this.changeSort} />
        </PageHeader>

        <PageContent>
          <PostsList posts={this.state.posts} />
        </PageContent>
      </div>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
