import React from 'react';
import { Spinner } from 'react-bootstrap';
export default function Loader(props) {
  if(!props.flag)return;
  return (
    <div
          style={{
            position: 'fixed',
            top: '45vh',
            paddingLeft: '47vw',
            zIndex: 1,
            // height: '100%',
            width: '100%',
            zIndex: '9999',
            // background:'black'
          }}
        >
    <Spinner
      animation="border"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}
