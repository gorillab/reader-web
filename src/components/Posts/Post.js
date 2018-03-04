import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Posts } from '@gorillab/reader-js';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

import { userSelectors } from '../../state/ducks/user';

import './Post.scss';

const trimText = (text, length = 100) => `${text.substr(0, length)}${text.length > length ? '...' : ''}`;

const propTypes = {
  post: PropTypes.any.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export class PostComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      href: this.props.post.url,
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
      <li className={`post ${!this.props.post.image ? 'no-image' : ''}`}>
        { this.props.post.image &&
          <img src={this.props.post.image} className="rounded thumbnail" alt="" />
        }

        <a className="title" href={this.props.post.url} onClick={this.view}>
          <span className="order">{this.props.index + 1}.</span> {trimText(`${this.props.post.title}${this.props.post.content ? ` - ${this.props.post.content}` : ''}`)}
        </a>

        <div className="meta">
          <div className="actions">
            {this.props.post.source && (
              <Link className="btn save-button source" to={`/source/${this.props.post.source.id}`}>{this.props.post.source.title}</Link>
            )}
            <button
              name="save"
              type="button"
              className="btn view-button"
            >
              {`${this.props.post.meta.numViewed || 0} Views`}
            </button>

            {this.props.isLoggedIn && (
              <ButtonGroup size="sm">
                <Button className={'save-button mr-0'}>{this.props.post.meta.numSaved || 0}</Button>
                <Button className={'save-button mr-0'} onClick={this.state.isSaved ? this.unSave : this.save}>{this.state.isSaved ? 'Saved' : 'Save'}</Button>
              </ButtonGroup>
            )}
            <ButtonGroup size="sm">
              <Button className={'share-button mr-0'}>{this.props.post.meta.numShared || 0}</Button>
              <Button className={'share-button mr-0'} onClick={this.share}>Share</Button>
            </ButtonGroup>
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
