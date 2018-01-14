import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { getSavedPosts, postsSelectors } from '../../state/ducks/posts';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../Posts';

import './Saved.scss';

const LIMIT = 25;

const propTypes = {
  getPosts: PropTypes.func.isRequired,
  getSavedPosts: PropTypes.func.isRequired,
};

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
  }

  async componentDidMount() {
    if (!this.props.getPosts(this.state.sort).length) {
      await this.props.getSavedPosts({
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
    this.props.getSavedPosts({
      sort: this.state.sort,
      limit: LIMIT,
      page: Math.floor(this.props.getPosts(this.state.sort).length / LIMIT) + 1,
    });
  }

  render() {
    return (
      <div className="saved">
        <PageHeader>
          <PageTitle title="Saved" />

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

Saved.propTypes = propTypes;

export default connect(
  state => ({
    getPosts: postsSelectors.getSavedPosts(state),
  }), {
    getSavedPosts,
  },
)(Saved);
