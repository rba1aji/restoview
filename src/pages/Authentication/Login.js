import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Form, Modal } from 'react-bootstrap';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const regEx = '^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})';

  function HandleLogin(e) {
    // e.preventDefault();
    if (!password.match(regEx)) {
    }
  }

  return (
    <Modal
      show={true}
      style={{ minHeight: '80vh' }}
      className="modal-dialog-centered"
    >
        <Form onSubmit={HandleLogin}>
        <Modal.Header>
          <h1>Login</h1>
          {/* <Link to="/auth/register">
            <p className="text-center">Sign Up here</p>
          </Link> */}
          </Modal.Header>
      <Modal.Body>
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
              placeholder='regEx="^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})"'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </Form.Group>
          <Modal.Footer >
            <Button className="px-4 my-3" variant="dark" type="submit">
              Login
            </Button>
          </Modal.Footer>
      </Modal.Body>
        </Form>
    </Modal>
  );
}
