import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Auth } from '@gorillab/reader-js';

import { Collapse, Navbar, Nav, NavItem, NavDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';

import { logOut, userSelectors } from '../../../state/ducks/user';
import { sourcesSelectors } from '../../../state/ducks/sources';

import FacebookButton from '../FacebookButton';
import Logo from '../Logo';
import './Header.scss';

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  sources: PropTypes.array.isRequired,
  user: PropTypes.any,
  logOut: PropTypes.func.isRequired,
};

const defaultProps = {
  user: null,
};

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarOpen: false,
      exploreDropdownOpen: false,
      userDropdownOpen: false,
      exploreOpen: false,
      userOpen: false,
      isChecked: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleExplore = this.toggleExplore.bind(this);
    this.toggleUser = this.toggleUser.bind(this);
    this.openExplore = this.openExplore.bind(this);
    this.openUser = this.openUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.unCheck = this.unCheck.bind(this);
  }

  unCheck() {
    this.setState({
      isChecked: false,
    });
  }
  handleChange(e) {
    this.setState({
      isChecked: e.target.checked,
    });
  }
  openExplore() {
    this.setState({
      exploreOpen: !this.state.exploreOpen,
    });
  }
  openUser() {
    this.setState({
      userOpen: !this.state.userOpen,
    });
  }
  toggle() {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    });
  }

  toggleExplore() {
    this.setState({
      exploreDropdownOpen: !this.state.exploreDropdownOpen,
    });
  }

  toggleUser() {
    this.setState({
      userDropdownOpen: !this.state.userDropdownOpen,
    });
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <Navbar light toggleable>
            <Logo />

            {/* <NavbarToggler right onClick={this.toggle} /> */}
            <div className="outer-menu">
              <input
                className="checkbox-toggle"
                type="checkbox"
                checked={this.state.isChecked}
                onChange={this.handleChange}
              />
              <div className="hamburger">
                <div>{}</div>
              </div>
              <div className="overlay overlay-hugeinc">
                <nav>
                  <ul>
                    {!!this.props.sources.length &&
                      <li>
                        <a role="button" tabIndex={0} className={`active ${this.state.exploreOpen ? 'has-sub' : ''}`} onClick={this.openExplore}>
                          <span>Explore</span>
                          <ins>
                            <i>{}</i>
                          </ins>
                        </a>
                        { this.props.sources.map.length &&
                          <ul className="sub">
                            {this.props.sources.map(source => (
                              <li key={source.id}>
                                <Link to={`/source/${source.id}`} onClick={this.unCheck} key={source.id} id={source.id}>{source.title}</Link>
                              </li>
                          ))}
                          </ul>
                        }
                      </li>
                    }

                    {this.props.isLoggedIn &&
                      <li>
                        <Link onClick={this.unCheck} to="/for-you">For You</Link>
                      </li>
                    }
                    {this.props.isLoggedIn &&
                      <li>
                        <Link onClick={this.unCheck} to="/saved">Saved</Link>
                      </li>
                    }
                    {!this.props.isLoggedIn ? (
                      <li>
                        <a
                          role="button"
                          tabIndex={0}
                          onClick={() => { location.href = Auth.LOGIN_BY_FACEBOOK_URL; }}
                        >
                          Facebook
                        </a>
                      </li>
                    ) : (
                      <li>
                        <a role="button" tabIndex={0} onClick={this.props.logOut}>
                          Logout
                        </a>
                      </li>
                    )}
                  </ul>
                </nav>
                <div className="copyright">© Gorillab {new Date().getFullYear()}</div>
              </div>
            </div>

            <Collapse isOpen={this.state.navbarOpen} navbar>
              <Nav className="mr-auto nav" navbar>
                {!!this.props.sources.length && <NavDropdown
                  isOpen={this.state.exploreDropdownOpen}
                  toggle={this.toggleExplore}
                >
                  <DropdownToggle className="router-link-active" nav caret>
                    Explore
                  </DropdownToggle>

                  <DropdownMenu>
                    {this.props.sources.map(source => (
                      <Link className="dropdown-item" to={`/source/${source.id}`} key={source.id} id={source.id}>{source.title}</Link>
                    ))}
                  </DropdownMenu>
                </NavDropdown>}

                {this.props.isLoggedIn && <NavItem>
                  <Link className="nav-link" to="/for-you">For You</Link>
                </NavItem>}

                {this.props.isLoggedIn && <NavItem>
                  <Link className="nav-link" to="/saved">Saved</Link>
                </NavItem>}
              </Nav>

              <Nav className="nav" navbar>
                {!this.props.isLoggedIn ? (
                  <NavItem className="btn-logFace">
                    <FacebookButton
                      content="Login"
                      className="fb-login"
                      action={() => { location.href = Auth.LOGIN_BY_FACEBOOK_URL; }}
                    />
                  </NavItem>
                ) : (
                  <NavDropdown isOpen={this.state.userDropdownOpen} toggle={this.toggleUser}>
                    <DropdownToggle nav caret className="a-last">
                      {this.props.user.profile.displayName}
                    </DropdownToggle>

                    <DropdownMenu right>
                      <button
                        name="logout"
                        type="button"
                        className="dropdown-item"
                        onClick={this.props.logOut}
                      >
                        Logout
                      </button>
                    </DropdownMenu>
                  </NavDropdown>
                )}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default connect(
  state => ({
    isLoggedIn: userSelectors.isLoggedIn(state),
    sources: sourcesSelectors.getSources(state),
    user: userSelectors.getUser(state),
  }), {
    logOut,
  },
)(Header);
