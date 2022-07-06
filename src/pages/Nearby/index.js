import React, { useRef } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';

function AutoLocationDetect() {
  const URL = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_KEY}&lat=${lat}&lon=${lon}&countrySet=IN&categoryset=7315&view=IN`;
}

function ManualLocationDetect(props) {
  const URL = ``;
}

export default function Nearby() {
  const currLocationRef = useRef();
  return (
    <>
      <div
        className="mt-4 mb-5"
        style={{
          display: 'grid',
          marginLeft: '15vw',
          marginRight: '15vw',
        }}
      >
        <Button variant="outline-dark" size="md" className="ms-1 me-1">
          Use current location
        </Button>
        <p className="text-center m-2">or</p>
        <Form.Group>
          <p className="mb-1 text-center">Enter location manually</p>
          <Form.Control
            className="border-dark"
            type="text"
            placeholder="your location..?"
            Ref={currLocationRef}
            onChange={(e) => {
              <ManualLocationDetect place={currLocation.current.value} />;
            }}
          />
        </Form.Group>
      </div>
      <h1>Nearby Restaurants</h1>
    </>
  );
}
