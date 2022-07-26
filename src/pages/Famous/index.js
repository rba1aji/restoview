import React, { useState } from 'react';
import { Nav, DropDdown, Dropdown } from 'react-bootstrap';
import TopRated from './TopRated';
import MostViewed from './MostViewed';

export default function Famous() {
  const [famousType, setFamousType] = useState(0);

  return (
    <>
      <h1>Famous Restaurants</h1>
      <div>
        <DropdownButton>India</DropdownButton>
      </div>
      <div
        style={{ marginLeft: '7vw', marginRight: '7vw', marginTop: '5vh' }}
        // className='border-dark border'
      >
        <Nav
          fill
          variant="tabs"
          defaultActiveKey="0"
          className=" "
          onSelect={(key) => setFamousType(key)}
        >
          <Nav.Item>
            <Nav.Link className="text-reset" eventKey="0">
              Top Rated
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-reset" eventKey="1">
              Most Viewed
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {famousType == 0 ? <TopRated /> : <MostViewed />}
      </div>
    </>
  );
}
