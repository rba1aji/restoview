import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

function TopRated() {
  return <div>top viewed</div>;
}
function MostViewed() {
  return <div>mostviewed</div>;
}

export default function Famous() {
  const [famousType, setFamousType] = useState();

  return (
    <>
      <h1>Famous Restaurants</h1>

      <Nav
        fill
        variant="tabs"
        defaultActiveKey="0"
        style={{ marginLeft: '10vw', marginRight: '10vw', marginTop: '5vh' }}
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
    </>
  );
}
