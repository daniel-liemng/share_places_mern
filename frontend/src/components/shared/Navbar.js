import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Logo from "../../assets/star_logo.svg";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Navbar bg='primary' expand='md'>
      <LinkContainer to='/'>
        <Navbar.Brand>
          <Image
            src={Logo}
            width='30'
            height='30'
            className='d-inline-block align-top mr-2'
            alt='Logo'
          />
          PlaceSharing
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <LinkContainer to='/'>
            <Nav.Link>Users</Nav.Link>
          </LinkContainer>
          {isAuthenticated && (
            <LinkContainer to='/u1/places'>
              <Nav.Link>My Places</Nav.Link>
            </LinkContainer>
          )}

          {isAuthenticated && (
            <LinkContainer to='/places/new'>
              <Nav.Link>Add Place</Nav.Link>
            </LinkContainer>
          )}

          {!isAuthenticated && (
            <LinkContainer to='/login'>
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
