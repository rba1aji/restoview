import React from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="text-center">
      <h1>Login</h1>
      <Link to="/auth/register">Register here</Link>
    </div>
  );
}
