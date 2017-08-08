import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Auth } from 'reader-js';

import { Collapse, Navbar, Nav, NavItem, NavbarToggler, NavDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';

import { isLoggedIn, logOut } from '../../../state/ducks/user';

import Logo from '../Logo';
import './Header.scss';

// for testing purpose, should remove later
import sources from '../../../mock-data/sources';

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarOpen: false,
      exploreDropdownOpen: false,
      userDropdownOpen: false,
      sources,
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
            <Nav className="mr-auto nav" navbar>
              <NavDropdown isOpen={this.state.exploreDropdownOpen} toggle={this.toggleExplore}>
                <DropdownToggle className="router-link-active" nav caret>Explore</DropdownToggle>

                <DropdownMenu>
                  {this.state.sources.map(source => (
                    <Link className="dropdown-item" to={`/source/${source.id}`} key={source.id} id={source.id}>{source.title}</Link>
                  ))}
                </DropdownMenu>
              </NavDropdown>

              <NavItem>
                <Link className="nav-link" to="/for-you">For You</Link>
              </NavItem>

              <NavItem>
                <Link className="nav-link" to="/saved">Saved</Link>
              </NavItem>
            </Nav>

            <Nav className="nav" navbar>
              {!this.props.isLoggedIn ? (
                <NavItem>
                  <a className="nav-link" href={Auth.LOGIN_BY_FACEBOOK_URL}>Facebook</a>
                </NavItem>
              ) : (
                <NavDropdown isOpen={this.state.userDropdownOpen} toggle={this.toggleUser}>
                  <DropdownToggle nav caret className="a-last">
                    <img className="avatar" src="/images/logo.png" alt="" />
                  </DropdownToggle>

                  <DropdownMenu right>
                    <button type="button" className="dropdown-item" onClick={this.props.logOut}>
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
    isLoggedIn: isLoggedIn(state),
  }), {
    logOut,
  },
)(Header);
