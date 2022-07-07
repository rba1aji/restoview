import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
export default function Login() {
  return (
    <div className="text-cente">
      <h1>Login</h1>
      <Link to="/auth/register">Register here</Link>

      <div className="m-4">
        <Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title className="h2 mb-1">
              <h2>Balaji hotel</h2>
            </Card.Title>
            <Card.Text className="mb-0" style={{ fontSize: 12 }}>
              1/20, Mariyamman temple street, Pillanallur, Rasipuram, Namakkal,
              TamilNadu.
            </Card.Text>
            <button disabled className="pt-0 pb-0 border-0 mt-0" style={{fontSize:12}}>Veg</button>
            <Card.Text className="">Rating: ⭐⭐⭐⭐</Card.Text>
            <Row>
              <Col>
                {true && (
                  <Button variant="secondary" className="pt-0 pb-0 ps-4 pe-4">
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
                  Order
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
