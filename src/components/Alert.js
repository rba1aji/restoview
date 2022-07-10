import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { AppState } from '../AppContext';
export default function Alert() {
  const [show, setShow] = useState(true);
  const { alert, setAlert } = AppState();
  function HandleClose() {
    () => setAlert({ show: false, variant: '', msg: '' });
  }
  return (
    <div style={{margin:'20vw'}}>
    <Alert
      className='p-3 d-flex-inline'
      show={alert.show}
      variant={alert.variant}
      onClose={() => HandleClose()}
      dismissible
    >
      {alert.msg}
    </Alert>
    </div>
  );
}
