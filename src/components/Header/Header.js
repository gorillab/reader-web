import React, { Component } from 'react';
import './Header.css';
import Logo from '../Logo'
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import Image from '../../assets/images/reader.png'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleExplore = this.toggleExplore.bind(this);
    this.toggleUser = this.toggleUser.bind(this);
    this.state = {
      isOpen: false,
      exploreDropdownOpen: false,
      userDropdownOpen: false
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
      <header className="header">
		    <Navbar light toggleable className="inner">
            <NavbarToggler right onClick={this.toggle} />
            <Logo />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavDropdown isOpen={this.state.exploreDropdownOpen} toggle={this.toggleExplore}>
                        <DropdownToggle nav caret className="router-link-active">
                          Explore
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>
                            TinhTe.vn
                          </DropdownItem>
                        </DropdownMenu>
                </NavDropdown>	              
                <NavItem>
                  <NavLink href="#">For you</NavLink>
                </NavItem>
              </Nav>
              <Nav navbar>
                <NavDropdown isOpen={this.state.userDropdownOpen} toggle={this.toggleUser}>
                    <DropdownToggle nav caret className="a-last">
                      <img src={Image} className="avatar" alt="" />
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
