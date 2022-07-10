import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { AppState } from '../AppContext';
export default function Alert() {
  const [show, setShow] = useState(true);
  const { alert, setAlert } = AppState();

  function HandleClose() {
    setAlert({ show: false, variant: '', msg: '' });
  }
  alert.show && setTimeout(HandleClose, 2000);

  return (
    <div

    style={{
      margin: '20vw',
      position: 'fixed',
      bottom: '',
      zIndex: 1,
      // width: '100%',
    }}
    >
      <Alert
        className="p-3 d-flex-inline"
        show={alert.show}
        variant={alert.variant}
        onClose={HandleClose}
        dismissible
      >
        {alert.msg}
      </Alert>
    </div>
  );
}
