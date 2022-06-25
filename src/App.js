import React from 'react';
import './style.css';

import routes from './routes';
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Restaurant Rating App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" >
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

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              element={<route.component />}
              // render={(props) => <route.component {...props} />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
