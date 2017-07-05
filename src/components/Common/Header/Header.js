import React, { Component } from 'react';
import { Auth } from 'reader-js';

import { Collapse, Navbar, Nav, NavItem, NavbarToggler, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

import './Header.scss';

// for testing purpose, should remove later
import sources from '../../../mock-data/sources';

const logout = () => {
  try {
    Auth.logout();

    // handle success
    // TODO
  } catch (err) {
    // handle error
    // TODO
  }
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleExplore = this.toggleExplore.bind(this);
    this.toggleUser = this.toggleUser.bind(this);

    this.state = {
      isOpen: false,
      exploreDropdownOpen: false,
      userDropdownOpen: false,
      sources,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
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

          <Collapse isOpen={this.state.isOpen} navbar>
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
              <NavDropdown isOpen={this.state.userDropdownOpen} toggle={this.toggleUser}>
                <DropdownToggle nav caret className="a-last">
                  <img className="avatar" src="/images/logo.png" alt="" />
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem onClick={logout}>Logout</DropdownItem>
                </DropdownMenu>
              </NavDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
