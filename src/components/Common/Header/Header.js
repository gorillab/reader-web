import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Auth } from 'reader-js';

import { Collapse, Navbar, Nav, NavItem, NavbarToggler, NavDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';

import { logOut, userSelectors } from '../../../state/ducks/user';
import { sourcesSelectors } from '../../../state/ducks/sources';

import FacebookButton from '../FacebookButton';
import Logo from '../Logo';
import './Header.scss';

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  sources: PropTypes.array.isRequired,
  logOut: PropTypes.func.isRequired,
};

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarOpen: false,
      exploreDropdownOpen: false,
      userDropdownOpen: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleExplore = this.toggleExplore.bind(this);
    this.toggleUser = this.toggleUser.bind(this);
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
        <Navbar className="inner" light toggleable>
          <NavbarToggler right onClick={this.toggle} />

          <Logo />

          <Collapse isOpen={this.state.navbarOpen} navbar>
            <Nav className="mr-auto nav is-logout" navbar>
              {!!this.props.sources.length &&
                <NavDropdown isOpen={this.state.exploreDropdownOpen} toggle={this.toggleExplore}>
                  <DropdownToggle className="router-link-active" nav caret>Explore</DropdownToggle>

                  <DropdownMenu>
                    {this.props.sources.map(source => (
                      <Link className="dropdown-item" to={`/source/${source.id}`} key={source.id} id={source.id}>{source.title}</Link>
                    ))}
                  </DropdownMenu>
                </NavDropdown>
              }

              {this.props.isLoggedIn && <NavItem>
                <Link className="nav-link" to="/for-you">For You</Link>
              </NavItem>}

              {this.props.isLoggedIn && <NavItem>
                <Link className="nav-link" to="/saved">Saved</Link>
              </NavItem>}

              {this.props.isLoggedIn && <NavItem>
                <button className="nav-link" onClick={this.props.logOut}>
                Logout
                </button>
              </NavItem>}
            </Nav>

            <Nav className="nav is-hide" navbar>
              {!this.props.isLoggedIn ? (
                <NavItem className="btn-logFace">
                  <a
                    className="nav-link loginMobile"
                    href={Auth.LOGIN_BY_FACEBOOK_URL}
                  >
                    Login with Facebook
                  </a>
                  {/* <button
                    className="loginBtn loginBtn--facebook"
                    onClick={() => (window.location.href = Auth.LOGIN_BY_FACEBOOK_URL)}
                  >
                      Login
                  </button>*/}
                  <FacebookButton
                    content="Login"
                    classname="fb-login"
                    action={() => (window.location.href = Auth.LOGIN_BY_FACEBOOK_URL)}
                  />
                </NavItem>
              ) : (
                <NavDropdown isOpen={this.state.userDropdownOpen} toggle={this.toggleUser}>
                  <DropdownToggle nav caret className="a-last">
                    <img className="avatar" src="/images/logo.png" alt="" />
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
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default connect(
  state => ({
    isLoggedIn: userSelectors.isLoggedIn(state),
    sources: sourcesSelectors.getSources(state),
  }), {
    logOut,
  },
)(Header);
