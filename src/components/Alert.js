import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import AppState from '../components/AppContext';
export default function Alert() {
  const [show, setShow] = useState(true);
  const { alert, setAlert } = AppState();
  function HandleClose() {
    () => setAlert({ show: false, variant: '', msg: '' });
  }
  return (
    <Alert
      show={alert.show}
      variant={alert.variant}
      onClose={() => HandleClose()}
      dismissible
    >
      {Alert.msg}
    </Alert>
  );
}
