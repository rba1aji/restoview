import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MdOutlineFoodBank, BsShop, MdFoodBank } from 'react-icons/md';
import routes  from '../routes';

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
        <Container>
          <span className="mb-1.5">
            <MdFoodBank size="33" />
          </span>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ fontWeight: 'bold', fontSize: 25, letterSpacing: 2 }}
            className="h1 mb-0 ps-3 me-auto"
          >
            RESRAT
            {/* Restaurant Rating App */}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ border: 'none' }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {routes?.map((item) => {
                if(!item.nav)return;
                return (
                  <Nav.Item as={LinkContainer} to={item.path}>
                    <Nav.Link>{item.title}</Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Outlet/> */}
    </>
  );
}
