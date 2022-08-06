import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { AppState } from '../../reducers/AppContext';
import { auth } from '../../configs/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const regEx = '^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$';
  const { setAlert, setLoading, user } = AppState();
  const navigate = useNavigate();

  const updateName = useCallback(() => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        setAlert({
          show: true,
          variant: 'success',
          msg: `Welcome ${name}`,
        });
        setLoading(false);
        navigate(-2);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  function HandleSignUp(e) {
    setLoading(true);
    e.preventDefault();

    if (!password.match(regEx)) {
      setAlert({
        show: true,
        variant: 'danger',
        msg: 'Enter a strong password',
      });
      setLoading(false);
    } else if (password !== confirmPassword) {
      setAlert({
        show: true,
        variant: 'danger',
        msg: 'Password !== Confirm password',
      });
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          user && updateName();
        })
        .catch((error) => {
          setAlert({
            show: true,
            variant: 'danger',
            msg: error.message,
          });
          setLoading(false);
        });
    }
  }

  return (
    <div style={{ minHeight: '70vh' }} className="modal-dialog-centered">
      <Form
        className="d-flex-inline mx-auto"
        style={{ width: '18.5rem' }}
        onSubmit={HandleSignUp}
      >
        <h1>Sign Up</h1>
        <Link to="/auth/login">
          <p className="text-center">Login here</p>
        </Link>

        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            className="border-dark"
            type="text"
            placeholder="Full name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="border-dark"
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="border-dark"
            type="password"
            placeholder="^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            className="border-dark"
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button
            style={{ width: '100%' }}
            className="px-5 my-4"
            variant="dark"
            type="submit"
          >
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  );
}
