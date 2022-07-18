import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function TopRated() {
    return (
      <>
        <h1>Famous Restaurants</h1>

    <Nav fill variant="tabs" style={{marginLeft:'10vw', marginRight:'10vw', marginTop:'10vh'}}>
      <Nav.Item>
        <Nav.Link eventKey="/">Top Rated</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="">Most Viewed</Nav.Link>
      </Nav.Item>
    </Nav>

    </>
  );
}
