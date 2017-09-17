import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Posts } from '@gorillab/reader-js';

import { userSelectors } from '../../state/ducks/user';

import FacebookButton from '../Common/FacebookButton';
import './Post.scss';

const propTypes = {
  post: PropTypes.any.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export class PostComponent extends Component {
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
            <button className="btn save-button">{this.props.post.source.title}</button>
          )}

          <div className="actions">
            {/* <button
              name="share"
              type="button"
              className="btn loginBtn loginBtn--facebook"
              onClick={this.share}
            >
              Share
            </button>*/}
            {!this.state.isSavedPage && this.props.isLoggedIn && (
              <button
                name="save"
                type="button"
                className="btn save-button"
                onClick={this.state.isSaved ? this.unSave : this.save}
              >
                {this.state.isSaved ? 'Unsave' : 'Save'}
              </button>
            )}
            <FacebookButton content="Share" classname=" btn fb-share" action={this.share} />
          </div>
        </div>
      </li>
    );
  }
}

PostComponent.propTypes = propTypes;

export default connect(
  state => ({
    isLoggedIn: userSelectors.isLoggedIn(state),
  }),
)(PostComponent);
