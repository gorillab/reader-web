import React, { Component } from 'react';
import './header.scss';
import Logo from '../logo'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import Image from '../../assets/images/reader.png'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle2.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      dropdownOpen2: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggle2() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  } 
  toggle3() {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2
    });
  }

  render() {
    return (
      <header className="header">
		<Navbar color="faded" light toggleable fixed>
			<div className="container">	
	          <NavbarToggler right onClick={this.toggle} />
	          <NavbarBrand href="/">
	          	<Logo />
	          </NavbarBrand>
	          <Collapse isOpen={this.state.isOpen} navbar>
	            <Nav className="mr-auto" navbar>
					<NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle2}>
			            <DropdownToggle nav caret>
			              Explore
			            </DropdownToggle>
			            <DropdownMenu>
			              <DropdownItem header>Header</DropdownItem>
			              <DropdownItem disabled>Action</DropdownItem>
			              <DropdownItem>Another Action</DropdownItem>
			              <DropdownItem divider />
			              <DropdownItem>Another Action</DropdownItem>
			            </DropdownMenu>
			         </NavDropdown>	              
	              <NavItem>
	                <NavLink href="https://github.com/reactstrap/reactstrap">For you</NavLink>
	              </NavItem>
	            </Nav>
	            <Nav navbar>
					<NavDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle3}>
			            <DropdownToggle nav caret>
			            	<img src={Image} width="20" height="20" className="avatar" alt="" />
			            </DropdownToggle>
			            <DropdownMenu>
			              <DropdownItem header>Header</DropdownItem>
			              <DropdownItem disabled>Action</DropdownItem>
			              <DropdownItem>Another Action</DropdownItem>
			              <DropdownItem divider />
			              <DropdownItem>Another Action</DropdownItem>
			            </DropdownMenu>
			         </NavDropdown>
	            </Nav>	            
	          </Collapse>
			</div>
        </Navbar>     	
      </header>
    );
  }
}

export default Header;
