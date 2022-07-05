import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MdOutlineFoodBank, BsShop, MdFoodBank } from 'react-icons/md';

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
          <Nav.Item>
            <h1 className="mb-1 ms-auto me-auto">
              <MdFoodBank />
            </h1>
          </Nav.Item>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ fontWeight: 'bold' }}
            className="ms-auto me-auto"
          >
            {/* RESRAT -  */}
            Restaurant Rating App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item as={LinkContainer} to="/">
                <Nav.Link>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as={LinkContainer} to="/filter">
                <Nav.Link>Filter</Nav.Link>
              </Nav.Item>
              <Nav.Item as={LinkContainer} to="/near-by-restaurants">
                <Nav.Link>Nearby</Nav.Link>
              </Nav.Item>
              <Nav.Item as={LinkContainer} to="/top-rated-restaurants">
                <Nav.Link>Top Rated</Nav.Link>
              </Nav.Item>
              <Nav.Item as={LinkContainer} to="/auth/login">
                <Nav.Link>Login</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Outlet/> */}
    </>
  );
}
