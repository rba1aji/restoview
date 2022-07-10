import React, { useState } from 'react';
import AppState from '../components/AppContext';
export default function Alert() {
  const [show, setShow] = useState(true);

  return (
    <Alert
      show="true"
      variant="danger"
      onClose={() => setShow(false)}
      dismissible
    >
      hai
    </Alert>
  );
}
