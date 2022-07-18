import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

function TopRated() {
  return <div>hro</div>;
}
function MostViewed() {
  return <div>mostviewed</div>;
}

export default function TopRated() {
  const [famousType, setFamousType] = useState(<p>d</p>);
  return (
    <>
      <h1>Famous Restaurants</h1>

      <Nav
        fill
        variant="tabs"
        defaultActiveKey="0"
        // className='border-3'
        style={{ marginLeft: '10vw', marginRight: '10vw', marginTop: '5vh' }}
      >
        <Nav.Item>
          <Nav.Link
            className="text-reset"
            eventKey="0"
            onSelect={setFamousType(0)}
          >
            Top Rated
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-reset"
            eventKey="1"
            onSelect={setFamousType(1)}
          >
            Most Viewed
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {famousType === 0 ? <TopRated /> : <MostViewed />}
    </>
  );
}
