import React, { useRef , useEffect } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';
import axios from 'axios';

import API_KEY from '../../components/GetAPIKey';

function AutoLocationDetect() {
  const URL = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_KEY}&lat=${lat}&lon=${lon}&countrySet=IN&categoryset=7315&view=IN`;
}

function ManualLocationDetect(place) {
  const URL = `https://api.tomtom.com/search/2/categorySearch/${place}.{ext}?key=${API_KEY}&countrySet=IN&categorySet=CITY_CENTER&view=IN`;
  // useEffect(()=>{
    axios.get(URL)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[place]);
// }

export default function Nearby() {
  const currLocationRef = useRef('');
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
            ref={currLocationRef}
            onChange={(e) => {
              const place=currLocationRef.current.value;
              ManualLocationDetect(place)
            }}
          />
        </Form.Group>
      </div>
      <h1>Nearby Restaurants</h1>
    </>
  );
}
