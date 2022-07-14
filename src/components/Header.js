import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MdOutlineFoodBank, BsShop, MdFoodBank } from 'react-icons/md';
import routes from '../reducers/routes';
import { auth } from '../configs/firebaseConfig';
import { signOut } from 'firebase/auth';
import { AppState } from '../reducers/AppContext';
import PrivateWrapper from './PrivateWrapper';

export default function Header() {
  const { user, setAlert } = AppState();

  function Logout() {
    signOut(auth);
    setAlert({
      show: true,
      variant: 'success',
      msg: `Sad to see you go Bye ${user.email}`,
    });
    return;
  }

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
              {routes?.map((item, index) => {
                return item.private ? (
                  <PrivateWrapper>
                    <Nav.Item key={index} as={LinkContainer} to={item.path}>
                      <Nav.Link key={index}>{item.title}</Nav.Link>
                    </Nav.Item>
                  </PrivateWrapper>
                ) : (
                  <Nav.Item key={index} as={LinkContainer} to={item.path}>
                    <Nav.Link key={index}>{item.title}</Nav.Link>
                  </Nav.Item>
                );
              })}
              {!user ? (
                <Nav.Item as={LinkContainer} to="/auth/login">
                  <Nav.Link>LogIn</Nav.Link>
                </Nav.Item>
              ) : (
                <Nav.Item as={LinkContainer} onClick={Logout} to="/">
                  <Nav.Link>LogOut</Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Outlet/> */}
    </>
  );
}
