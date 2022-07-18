import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

function TopRated() {
  return <div>top viewed</div>;
}
function MostViewed() {
  return <div>mostviewed</div>;
}

export default function TopRated() {
  const [famousType, setFamousType] = useState();
  function HandleChange(event, eventKey) {
    setFamousType(event.target.eventKey);
  }
  return (
    <>
      <h1>Famous Restaurants</h1>

      <Nav
        fill
        variant="tabs"
        defaultActiveKey="0"
        style={{ marginLeft: '10vw', marginRight: '10vw', marginTop: '5vh' }}
      >
        <Nav.Item>
          <Nav.Link className="text-reset" eventKey="0" onSelect={HandleChange}>
            Top Rated
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-reset" eventKey="1" onSelect={HandleChange}>
            Most Viewed
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {famousType == 0 ? <TopRated /> : <MostViewed />}
    </>
  );
}
