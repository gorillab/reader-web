import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PageHeader from '../Common/PageHeader';
import PageTitle from '../Common/PageTitle';
import Sort from '../Common/Sort';
import PageContent from '../Common/PageContent';
import PostsList from '../Posts/PostsList';
import SubscribeButton from '../Common/SubscribeButton';

import './Home.scss';

// for testing purpose, should remove later
import posts from '../../mock-data/posts';
import sources from '../../mock-data/sources';

const propTypes = {
  history: PropTypes.any.isRequired,
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts,
      title: this.getTitle(location.pathname),
    };

    this.historyUnlisten = props.history.listen(({ pathname }) => {
      this.setState({
        title: this.getTitle(pathname),
      });
    });

    this.getTitle = this.getTitle.bind(this);
  }

  componentWillUnmount() {
    this.historyUnlisten();
  }

  getTitle(pathname) {
    if (pathname) {
      const regex = /\/source\/([\w]+)/.exec(pathname);

      if (regex && regex[1]) {
        // find matched source
        const source = sources.find(({ id }) => id === regex[1]);
        if (source) {
          return source.title;
        }

        this.props.history.push('/');
      }
    }

    return 'Explore';
  }

  render() {
    return (
      <div className="home">
        <PageHeader>
          <PageTitle title={this.state.title} />

          <SubscribeButton />

          <Sort />
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
