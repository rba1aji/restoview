import React from 'react';
import { Spinner } from 'react-bootstrap';
export default function Loader(props) {
  if (!props.flag) return;
  return (
    <div
      style={{
        position: 'fixed',
        top: '45vh',
        left: '45vw',
        zIndex: 1,
        width: '100%',
        zIndex: '9999',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '10vw',
          height: '10vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // background: 'black',
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}
