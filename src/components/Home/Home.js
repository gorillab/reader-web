import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sources, Posts } from 'reader-js';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../Posts/PostsList';
import SubscribeButton from '../Common/SubscribeButton';

import './Home.scss';

const propTypes = {
  history: PropTypes.any.isRequired,
};

const getSources = async () => {
  try {
    const sources = await Sources.getSources();

    return sources;
  } catch (err) {
    return [];
  }
};

const getTitle = async (pathname) => {
  if (pathname) {
    const regex = /\/source\/([\w]+)/.exec(pathname);

    if (regex && regex[1]) {
      // find matched source
      const sources = await getSources();
      const source = sources.find(({ id }) => id === regex[1]);
      if (source) {
        return source.title;
      }

      this.props.history.push('/');
    }
  }

  return 'Explore';
};

const getPosts = async (query) => {
  try {
    const posts = await Posts.getPosts(query);

    return posts;
  } catch (err) {
    return [];
  }
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Explore',
      posts: [],
      sort: 'new',
      limit: 25,
      page: 0,
    };

    this.loadPosts();

    this.historyUnlisten = props.history.listen(async () => {
      this.loadPosts();
    });

    this.changeSort = this.changeSort.bind(this);
    this.loadPosts = this.loadPosts.bind(this);
  }

  componentWillUnmount() {
    this.historyUnlisten();
  }

  async changeSort(sort) {
    await this.loadPosts({
      sort,
      limit: this.state.limit,
      page: this.state.page,
    });
  }

  async loadPosts(query = {
    sort: this.state.sort,
    limit: this.state.limit,
    page: this.state.page,
  }) {
    const [title, posts] = await Promise.all([
      getTitle(location.pathname),
      getPosts(query),
    ]);

    this.setState({
      title,
      posts,
      ...query,
    });
  }

  render() {
    return (
      <div className="home">
        <PageHeader>
          <PageTitle title={this.state.title} />

          <SubscribeButton />

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

export default Home;
