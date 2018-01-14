import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { getHomePosts, getSourcePosts, postsSelectors } from '../../state/ducks/posts';

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
  getPosts: PropTypes.func.isRequired,
  getHomePosts: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  getPostsBySource: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  match: PropTypes.any.isRequired,
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
  }

  async componentDidMount() {
    const sourceId = this.props.match.params.sourceId;
    if (sourceId) {
      if (!this.props.getPostsBySource(this.state.sort, sourceId).length) {
        await this.props.getSourcePosts({
          source: sourceId,
          sort: this.state.sort,
          limit: this.state.limit,
          page: this.state.page,
        });
      }
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        posts: [...this.props.getPostsBySource(this.state.sort, sourceId)],
      });
    } else {
      if (!this.props.getPosts(this.state.sort).length) {
        await this.props.getHomePosts({
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
  }

  getMore() {
    this.props.getHomePosts({
      source: this.props.source ? this.props.source.id : undefined,
      sort: this.state.sort,
      limit: LIMIT,
      page: Math.floor(this.props.getPosts(this.state.sort).length / LIMIT) + 1,
    });
  }

  render() {
    return (
      <div className="home">
        <PageHeader>
          <PageTitle title={this.props.title} />

          {this.props.isLoggedIn && this.props.source
          && <SubscribeButton source={this.props.source} />}

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

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(
  state => ({
    getPosts: postsSelectors.getHomePosts(state),
    getPostsBySource: postsSelectors.getSourcePosts(state),
  }), {
    getHomePosts,
    getSourcePosts,
  },
)(Home);
