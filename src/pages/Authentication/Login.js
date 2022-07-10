import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const regEx = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;

  function HandleLogin(e) {
    // e.preventDefault();
    if (!password.match(regEx)) {
    }
  }

  return (
    <div style={{ minHeight: '60vh' }} className="modal-dialog-centered">
      <Form
        className="d-flex-inline mx-auto justify-content-center"
        style={{ width: '18rem' }}
        onSubmit={HandleLogin}
      >

        <h1>Login</h1>
        <Link to="/auth/register">
          <p className="text-center">Sign Up here</p>
        </Link>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="border-dark"
            type="email"
            placeholder="name@example.com"
            onChange={(e) => 
              setEmail(e.target.value)
            }
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="border-dark"
            type="password"
            placeholder="/^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/"
            onChange={(e) => 
              setPassword(e.target.value)
            }
            required
          />

        </Form.Group>
        <div className="text-center">
          <Button className="px-4 my-3" variant="dark" type="submit">
            Login
          </Button>
        </div>

      </Form>
    </div>
  );
}
