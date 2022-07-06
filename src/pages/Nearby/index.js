import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
export default function Nearby() {
  return (
    <>
      <h1>Nearby Restaurants</h1>
      <InputGroup>
        <button variant="primary">Use Current Location</button>
        <br />
        or
        <br />
        <label>Enter location manually</label>
        <FormControl placeholder="your location..?" />
      </InputGroup>
    </>
  );
}
