import React, { Component } from 'react';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../PostsList';
import SubscribeButton from '../Common/SubscribeButton';

import './Home.scss';

// for testing purpose, should remove later
import { posts } from '../../mock-data/posts';
import { sources } from '../../mock-data/sources';

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
