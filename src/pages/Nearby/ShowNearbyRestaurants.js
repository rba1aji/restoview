import React, { useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function ShowNearbyRestaurants(props) {
  return (
    <div className="m-5">
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: props.nearbyList.length }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
