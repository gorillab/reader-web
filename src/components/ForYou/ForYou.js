import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { getForYouPosts, postsSelectors } from '../../state/ducks/posts';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../Posts';

import './ForYou.scss';

const LIMIT = 25;

const propTypes = {
  getPosts: PropTypes.func.isRequired,
  getForYouPosts: PropTypes.func.isRequired,
};

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
  }

  async componentDidMount() {
    if (!this.props.getPosts(this.state.sort).length) {
      await this.props.getForYouPosts({
        sort: this.state.sort,
        limit: this.state.limit,
        page: this.state.page,
      });
    }
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      posts: [...this.props.getPosts(this.state.sort)],
    });
  }

  getMore() {
    this.props.getForYouPosts({
      sort: this.state.sort,
      limit: LIMIT,
      page: Math.floor(this.props.getPosts(this.state.sort).length / LIMIT) + 1,
    });
  }

  render() {
    return (
      <div className="for-you">
        <PageHeader>
          <PageTitle title="For You" />

          <Sort current={this.state.sort} />
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
ForYou.propTypes = propTypes;

export default connect(
  state => ({
    getPosts: postsSelectors.getForYouPosts(state),
  }), {
    getForYouPosts,
  },
)(ForYou);
