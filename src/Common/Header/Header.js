import React, { Component } from 'react';

import { Collapse, Navbar, Nav, NavItem, NavbarToggler, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../Logo'

import './Header.scss';

// for testing purpose, should remove later
import { sources } from '../../mock-data/sources';

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
      sources
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleExplore() {
    this.setState({
      exploreDropdownOpen: !this.state.exploreDropdownOpen
    });
  }

  toggleUser() {
    this.setState({
      userDropdownOpen: !this.state.userDropdownOpen
    });
  }

  render() {
    return (
      <header className='header'>
		    <Navbar light toggleable className='inner'>
          <NavbarToggler right onClick={this.toggle} />

          <Logo />
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto nav' navbar>
              <NavDropdown isOpen={this.state.exploreDropdownOpen} toggle={this.toggleExplore}>
                <DropdownToggle nav caret className='router-link-active'>Explore</DropdownToggle>

                <DropdownMenu>
                  {this.state.sources.map((source, index) => (
                    <Link to={`/source/${source.id}`} key={index} className='dropdown-item' id={source.id}>{source.title}</Link>
                  ))}
                </DropdownMenu>
              </NavDropdown>
              
              <NavItem>
                <Link to='/for-you' className='nav-link'>For You</Link>
              </NavItem>
            </Nav>

            <Nav navbar className='nav'>
              <NavDropdown isOpen={this.state.userDropdownOpen} toggle={this.toggleUser}>
                <DropdownToggle nav caret className='a-last'>
                  <img src='/images/logo.png' className='avatar' alt='' />
                </DropdownToggle>
                
                <DropdownMenu right>
                  <DropdownItem>Logout</DropdownItem>
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
