import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const regEx = '^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})';

  function HandleLogin(e) {
    // e.preventDefault();
    if (!password.match(regEx)) {
    }
    if (password !== confirmPassword) {
    }
  }

  return (
    <div style={{minHeight:'80vh'}} className="modal-dialog-centered">
      <Form
        className="d-flex-inline mx-auto"
        style={{ width: '18rem' }}
        onSubmit={HandleLogin}
      >
        <h1>Sign Up</h1>
        <Link to="/auth/login">
          <p className="text-center">Login here</p>
        </Link>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="border-dark"
            type="email"
            placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="border-dark"
            type="password"
            placeholder="^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            className="border-dark"
            type="password"
            placeholder="Confirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
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
