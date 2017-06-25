import React, { Component } from 'react';

import PageHeader from '../common/page-header';
import PageTitle from '../common/page-title';
import Sort from '../common/sort';
import PageContent from '../common/page-content';
import PostsList from '../posts-list';
import SubscribeButton from '../common/subscribe-button';

import './home.scss';

// for testing purpose, should remove later
import { posts } from '../mock-data/posts';
import { sources } from '../mock-data/sources';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts,
      title: this.getTitle(window.location.pathname)
    }

    this.historyUnlisten = this.props.history.listen((location) => {
      this.setState({
        title: this.getTitle(location.pathname)
      });
    });
  }

  getTitle(pathname) {
    if (pathname) {
      const regex = /\/source\/([\w]+)/.exec(pathname);

      if (regex && regex[1]) {
        // find matched source
        const source = sources.find((source) => source.id === regex[1]);
        if (source) {
          return source.title;
        }

        window.location.href = '/';
      }
    }

    return 'Explore';
  }

  render() {
    return (
      <div className='home'>
        <PageHeader>
          <PageTitle title={this.state.title}/>
          <SubscribeButton></SubscribeButton>
          <Sort />
        </PageHeader>

        <PageContent>
          <PostsList posts={this.state.posts} />
        </PageContent>
      </div>
    );
  }

  componentWillUnmount() {
    this.historyUnlisten();
  }
}

export default Home;
