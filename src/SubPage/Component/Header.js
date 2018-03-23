import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Header.css';

export default class Header extends Component{
  render(){
    return(
      <Navbar default fluid collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">SQRRL</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem  href="#">
              HOME
            </NavItem>
            <NavItem  href="#">
              ABOUT
            </NavItem>
            <NavItem  href="#">
              BLOG
            </NavItem>
            <NavItem  href="#">
              FAQ
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
