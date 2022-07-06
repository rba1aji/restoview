import React from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';
export default function Nearby() {
  return (
    <>
      <h1>Nearby Restaurants</h1>
      <Form
        className="m-4 "
        style={{
          display: 'grid',
          justifyContent: 'center',
        }}
      >
        <Button variant="outline-dark">Use Current Location</Button>
        <p className="text-center m-3">or</p>
        <Form.Group>
          <p className="m-0 text-center">
            Enter location manually
          </p>
          <Form.Control
            className="border border-3"
            type="text"
            placeholder="your location..?"
          />
        </Form.Group>
      </Form>
    </>
  );
}
