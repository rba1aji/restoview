import React from 'react';
import './style.css';

import routes from './routes';
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Restaurant Rating App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/filter">
                Filter
              </Nav.Link>
              <Nav.Link as={Link} to="/near-by-restaurants">
                Nearby Restaurants
              </Nav.Link>
              <Nav.Link as={Link} to="/top-rated-restaurants">
                Top Rated Restaurants
              </Nav.Link>
              <Nav.Link as={Link} to="/auth/login">
                Login
              </Nav.Link>
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
