import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Posts } from 'reader-js';

import { userSelectors } from '../../state/ducks/user';

import './Post.scss';

const propTypes = {
  post: PropTypes.any.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSavedPage: location.pathname === '/saved',
      isSaved: props.post.isSaved,
    };

    this.view = this.view.bind(this);
    this.share = this.share.bind(this);
    this.save = this.save.bind(this);
    this.unSave = this.unSave.bind(this);
  }

  view() {
    Posts.viewPost(this.props.post.id);
  }

  share() {
    // eslint-disable-next-line no-undef
    FB.ui({
      method: 'share',
      url: this.props.post.url,
    }, (res) => {
      if (res && !res.error_message) {
        Posts.sharePost(this.props.post.id);
      }
    });
  }

  async save() {
    try {
      await Posts.savePost(this.props.post.id);

      this.setState({
        isSaved: true,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  async unSave() {
    try {
      await Posts.unSavePost(this.props.post.id);

      this.setState({
        isSaved: false,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  render() {
    return (
      <li className="post">
        <img src={this.props.post.image} className="rounded thumbnail" alt="" />

        <div className="title">
          <a
            href={this.props.post.url}
            onClick={this.view}
          >
            {this.props.post.title}
          </a>
        </div>

        <div className="meta">
          {this.props.post.source && (
            <span className="source">{this.props.post.source.title}</span>
          )}

          <div className="actions">
            <button
              type="button"
              className="btn facebook-share-button"
              onClick={this.share}
            >
              Share
            </button>

            {!this.state.isSavedPage && this.props.isLoggedIn && (
              <button
                type="button"
                className="btn save-button"
                onClick={this.state.isSaved ? this.unSave : this.save}
              >
                {this.state.isSaved ? 'Unsave' : 'Save'}
              </button>
            )}
          </div>
        </div>
      </li>
    );
  }
}

Post.propTypes = propTypes;

export default connect(
  state => ({
    isLoggedIn: userSelectors.isLoggedIn(state),
  }),
)(Post);
