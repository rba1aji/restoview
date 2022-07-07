import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/auth/register">
        <p className="text-center">Register here</p>
      </Link>
    </div>
  );
}
