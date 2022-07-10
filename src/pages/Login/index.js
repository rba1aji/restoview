import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function HandleLogin(e) {
    // e.preventDefault();
  }
  return (
    <div>
      <h1>Login</h1>
      <Link to="/auth/register">
        <p className="text-center">Register here</p>
      </Link>
      <Form
        className="d-flex-inline mx-auto"
        style={{ width: '21rem' }}
        onSubmit={HandleLogin}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="border-dark"
            type="email"
            placeholder="Enter email"
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
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
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
