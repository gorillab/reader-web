import React, { Component } from 'react';
import './header.scss';
import Logo from '../logo'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
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
		<Navbar color="faded" light toggleable fixed>
			<div className="container">	
	          <NavbarToggler right onClick={this.toggle} />
	          <Logo />
	          <Collapse isOpen={this.state.isOpen} navbar>
	            <Nav className="mr-auto" navbar>
					<NavDropdown isOpen={this.state.exploreDropdownOpen} toggle={this.toggleExplore}>
			            <DropdownToggle nav caret>
			              Explore
			            </DropdownToggle>
			            <DropdownMenu>
			              <DropdownItem>TinhTe.vn</DropdownItem>
			              <DropdownItem>Medium.io</DropdownItem>
			              <DropdownItem>Another Action</DropdownItem>
			              <DropdownItem>Another Action</DropdownItem>
			            </DropdownMenu>
			         </NavDropdown>	              
	              <NavItem>
	                <NavLink href="https://github.com/reactstrap/reactstrap">For you</NavLink>
	              </NavItem>
	            </Nav>
	            <Nav navbar>
					<NavDropdown isOpen={this.state.userDropdownOpen} toggle={this.toggleUser}>
			            <DropdownToggle nav caret>
			            	<img src={Image} width="20" height="20" className="avatar" alt="" />
			            </DropdownToggle>
			            <DropdownMenu>
			              <DropdownItem>Logout</DropdownItem>
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
