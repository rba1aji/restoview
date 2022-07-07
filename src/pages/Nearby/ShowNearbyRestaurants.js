import React, { useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function ShowNearbyRestaurants(props) {
  console.log(props.nearbyList);
  return (
    <div className="m-5">
      <Row xs={1} md={2} className="g-4">
        {props.nearbyList.map((item) => {
          return (
            <Col>
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title className="mb-0">{item.name}</Card.Title>
                  <Card.Text style={{ fontSize: 10 }}>{item.address}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
