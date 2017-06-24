import React, { Component } from 'react';

import { Collapse, Navbar, Nav, NavItem, NavbarToggler, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../Logo'

import logoImage from '../../assets/images/reader.png';
import styles from './Header.scss';

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
      <header className={styles.header}>
		    <Navbar light toggleable className={styles.inner}>
          <NavbarToggler right onClick={this.toggle} />

          <Logo />
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className={`${styles.mrAuto} ${styles.nav}`} navbar>
              <NavDropdown isOpen={this.state.exploreDropdownOpen} toggle={this.toggleExplore}>
                <DropdownToggle nav caret className={styles.routerLinkActive}>Explore</DropdownToggle>

                <DropdownMenu>
                  <DropdownItem>TinhTe.vn</DropdownItem>
                </DropdownMenu>
              </NavDropdown>
              
              <NavItem>
                <Link to='/for-you' className={styles.navLink}>For You</Link>
              </NavItem>
            </Nav>

            <Nav navbar className={styles.nav}>
              <NavDropdown isOpen={this.state.userDropdownOpen} toggle={this.toggleUser}>
                <DropdownToggle nav caret className={styles.aLast}>
                  <img src={logoImage} className={styles.avatar} alt='' />
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
