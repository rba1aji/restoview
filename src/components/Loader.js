import React from 'react';
import { Spinner } from 'react-bootstrap';
export default function Loader() {
  return (
    <Spinner animation="border" role="status" style={{height:'10vw',width:"10vw"}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
