import React from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';
export default function Nearby() {
  return (
    <>
      <h1>Nearby Restaurants</h1>
      <Form className="mt-4"
        style={{
          display:'grid',
          marginLeft:"15vw",
          marginRight:"15vw"
        }}
      >
        <Button variant="outline-dark" size="md" className="ms-1 me-1">Use Current Location</Button>
        <p className="text-center m-2">or</p>
        <Form.Group>
          <p className="mb-1 text-center">Enter location manually</p>
          <Form.Control
            className="border-dark"
            type="text"
            placeholder="your location..?"
          />
        </Form.Group>
      </Form>
    </>
  );
}
