import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar, NavDropdown,Nav, Image} from 'react-bootstrap'
export default function Header() {
  return (
    
      
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand  href="/home"><h5 style={{color:"blue"}}>WebServ4u</h5></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/faq">FAQ</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link href="/createBlog">Admin</Nav.Link>
        <Nav.Link href="/disclaimer">Disclaimer</Nav.Link>
        <Nav.Link href="/privacyPolicy">
          PrivacyPolicy
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

       
  );
}