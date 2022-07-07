import React, { useRef } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

export default function ShowNearbyRestaurants(props) {
  // console.log(props.nearbyList);
  return (
    <div className="m-4">
      <Row xs={1} md={2} className="g-4">
        {props.nearbyList.map((item) => {
          return (
            <Col>
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>
                    <h2 className="m-0 p-0">{item.name}</h2>
                  </Card.Title>
                  <Card.Text className="m-0" style={{ fontSize: 12 }}>
                    {item.address}
                  </Card.Text>
                  {item.tags.map((tag) => {
                    return (
                      <button
                        disabled
                        className="pt-0 pb-0 border-0 mt-0"
                        style={{ fontSize: 12 }}
                      >
                        {tag}
                      </button>
                    );
                  })}
                  <Card.Text className="">Rating: ⭐⭐⭐⭐</Card.Text>
                  <Row>
                    <Col>
                      {true && (
                        <Button
                          variant="secondary"
                          className="pt-0 pb-0 ps-4 pe-4"
                        >
                          Call
                        </Button>
                      )}
                    </Col>
                    <Col>
                      <Button
                        style={{ float: 'right' }}
                        variant="secondary"
                        className="pt-0 pb-0 ps-3 pe-3"
                      >
                        Order online
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
